import jwt from 'jsonwebtoken'

const verifyToken = async (req, res, next)=>{
    const token = req.cookies.token;
    try{
        if(!token){
            return res.send(404).json({message: "Unauthorized - Token not provided", success: false});
        }
        const decode = jwt.verify("token", process.env.JSON_SECRET);
        if(!decode){
            return res.send(401).json({message: "Unauthorized - Invalid Token", success: false});
        }
        req.user=decode;
        next();
    }catch(error){
        console.log("Error verifying token");
        res.send(500).json({message: "Cannot verify token", success: false});
    }
}

export {verifyToken};