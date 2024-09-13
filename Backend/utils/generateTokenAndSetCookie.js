import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (res, user_id, role)=>{
    const token = jwt.sign({user_id, role}, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24*60*60*1000
    });

    return token;
}

export {generateTokenAndSetCookie};