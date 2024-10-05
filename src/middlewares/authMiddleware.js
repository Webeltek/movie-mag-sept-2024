import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/constants.js';

export const authMiddleware = async (req,res,next)=>{
    //TODO: Check it there is a token in the request
    const token = req.cookies['auth'];
    if(!token){
        return next()
    }
    // TODO : validate token
    try {
        const decodedToken =  jwt.verify(token, JWT_SECRET)

        console.log(' decoded',decodedToken);
        return next()
    } catch (err){
        
        //TODO: Invalid token
    }
    //TODO: Add user data to request
}