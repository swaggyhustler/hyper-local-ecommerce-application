import { sendVerificationEmail, sendWelcomeEmail } from "../nodemailer/emails.js";
import Owner from "../models/Owner.js";
import User from "../models/User.js";
import { hashPassword, comparePassword } from "../utils/authUtility.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

const checkAuth = async (req, res)=>{
    const {user_id, role} = req.body;
    try{
        let user = null;
        if(role === 'user'){
            user = await User.findById(user_id);
        }else if(role == 'owner'){
            user = await Owner.findById(user_id);
        }else{
            return res.status(404).json({message: "User not found", success: false});
        }

        if(user===null){
            return res.status(404).json({message: 'User not found', success: false});
        }
        res.status(200).json({
            message: "User is authorized", 
            success: true, 
            user: {
                ...user._doc,
                password: undefined
            }
        });
    }catch(error){
        console.log("Cannot perfrom authorization of user");
        res.status(500).json({message: "Cannot authorize user", success: false});
    }
}

const verifyEmail = async (req, res)=>{
    const {code, role} = req.body;
    try{
        let user= null;
        if(role === 'user'){
            user = await User.findOne({
                verificationToken: code,
                verificationTokenExpiresAt: {$gt: Date.now()}   
            });
        }else if(role === 'owner'){
            user = await User.findOne({
                verificationToken: code,
                verificationTokenExpiresAt: {$gt: Date.now()}
            });
        }else{
            return res.status(401).json({message: "Cannot verify provided email", success: false});
        }

        if(user===null){
            return res.status(404).json({message: 'User not found', success: false});
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        await user.save();
        
        if(role==='owner'){
            await sendWelcomeEmail(user.email, user.owner_name);
        }else{
            await sendWelcomeEmail(user.email, user.username);
        }

        res.status(200).json({message: "Email verified successfully", success: true, data: {...user._doc, password: undefined}});

    }catch(error){
        console.log("Cannot verity provided email ", error);
        res.status(500).json({message: "Cannot verify provided email", success: false});
    }
}

const login = async (req, res)=>{
    const {email, password, role} = req.body;
    try{

        let user=null;
        if(role==='user'){
            user = await User.findOne({email});
        }else if (role==='owner'){
            user = await Owner.findOne({email});
        }
        if(user===null){
            return res.status(404).json({message: 'User not found', success: false});
        }
        let userAuthenticated = await comparePassword(password, user.password);

        if(userAuthenticated){
            if(user.role!=role){
                return res.status(401).json({message: "Wrong credentials", success: false});
            }
            generateTokenAndSetCookie(res, user._id, user.role);
            res.status(200).json({message: "User login successful", success: true, data: user});
        }else{
            res.status(404).json({message: 'Wrong Credentials', success: false});
        }
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: "Internal Error", success: false});
    }
}

const registerUser= async (req, res)=>{
    try{
        const {username, password, email, phone, role} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(405).json({message: "User already exists", data: existingUser, success: false});
        }
        const hashedPassword= await hashPassword(password);
        const verificationToken = Math.floor(100000+Math.random()*900000).toString();
        const newUser = new User({
            username, 
            password: hashedPassword, 
            email, 
            phone, 
            role,
            verificationToken,
            verificationTokenExpiresAt: Date.now()+24*60*60*1000
        });
        await newUser.save();
        generateTokenAndSetCookie(res, newUser._id, newUser.role);
        await sendVerificationEmail(newUser.email, verificationToken);
        res.status(201).json({message: "User registered successfully", data: {...newUser._doc, password: undefined}, success: true});
    }catch(error){
        console.log("Cannot register User to the Application");
        res.status(500).json({message: "Cannot register User", success: true});
    }
}

const registerOwner= async (req, res)=>{
    try{
        const { owner_name, password, email, phone, bank_name, bank_account_no, bank_IFSC_code } = req.body;
        const existingOwner = await Owner.findOne({email});
        if(existingOwner){
            return res.status(200).json({message: "Owner already exists", data: existingOwner, success: false});
        }
        const hashedPassword= await hashPassword(password);
        const verificationToken = Math.floor(100000+Math.random()*900000).toString();
        const newOwner = await Owner.create({
            owner_name, 
            password: hashedPassword, 
            email, 
            phone, 
            bank_name, 
            bank_account_no, 
            bank_IFSC_code,
            role,
            verificationToken,
            verificationTokenExpiresAt: Date.now()+24*60*60*1000
        });
        newOwner.save();
        generateTokenAndSetCookie(res, newOwner._id, newOwner.role);
        await sendVerificationEmail(newOwner.email, verificationToken);
        res.status(201).json({message: "Owner registered successfully", data: {...newOwner._doc, password: undefined}, success: true});
    }catch(error){
        console.log("Cannot register Owner to the Application");
        res.status(500).json({message: "Cannot register Owner", success: false});
    }
}

const logout = (req, res)=>{
    res.clearCookie("token");
    res.status(200).json({message: "Logged out of the application sucessfully", success: true});
}

export {login, registerUser, registerOwner, logout, checkAuth, verifyEmail};