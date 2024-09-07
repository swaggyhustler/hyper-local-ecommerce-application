import Owner from "../models/Owner.js";
import User from "../models/User.js";
import { hashPassword, comparePassword } from "../utils/authUtility.js";
const login = async (req, res)=>{
    const {email, password, role} = req.body;
    let user=null;

    if(role==='user'){
        user = await User.findOne({email});
    }else if (role==='owner'){
        user = await Owner.findOne({email});
    }else{
        return res.status(200).json({message: 'Please Select the role', success: false});
    }

    if(user===null){
        return res.status(200).json({message: 'Cannot fetch user with the details provided', success: false});
    }

    let userAuthenticated = await comparePassword(password, user.password);

    if(userAuthenticated){
        res.status(200).json({message: "User is Authenticated", success: true, data: user});
    }else{
        res.status(200).json({message: 'User is not Authenticated', success: false});
    }
}

const registerUser= async (req, res)=>{
    try{
        const {username, password, email, phone} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(200).json({message: "User already exists", data: existingUser, success: false});
        }
        const hashedPassword= await hashPassword(password);
        const newUser = await User.create({username, password: hashedPassword, email, phone});
        newUser.save();
        res.status(201).json({message: "User registered successfully", data: newUser, success: true});
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
        const newOwner = await Owner.create({owner_name, password: hashedPassword, email, phone, bank_name, bank_account_no, bank_IFSC_code});
        newOwner.save();
        res.status(201).json({message: "Owner registered successfully", data: newOwner, success: true});
    }catch(error){
        console.log("Cannot register Owner to the Application");
        res.status(500).json({message: "Cannot register Owner", success: false});
    }
}

export {login, registerUser, registerOwner};