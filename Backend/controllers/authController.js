import User from "../models/User.js";
import { hashPassword, comparePassword } from "../utils/authUtility.js";
const login = async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user===null){
        return res.status(200).json({message: 'Cannot find the user with given info', success: false});
    }
    let userAuthenticated = await comparePassword(password, user.password);
    if(userAuthenticated){
        res.status(200).json({message: "User is Authenticated", success: true, data: user});
    }else{
        res.status(404).json({message: 'User is not Authenticated', success: false});
    }
}

const register= async (req, res)=>{
    try{
        const {username, password, email, phone, role} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(200).json({message: "User already exists", data: existingUser, success: false});
        }
        const hashedPassword= await hashPassword(password);
        const newUser = await User.create({username, password: hashedPassword, email, phone, role});
        newUser.save();
        res.status(201).json({message: "User registered successfully", data: newUser, success: true});
    }catch(error){
        console.log("Cannot register User to the Application");
        res.status(500).json({message: "Cannot register User", success: true});
    }
}

export {login, register};