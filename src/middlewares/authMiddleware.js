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

        const user = {
            _id: decodedToken._id,
            email : decodedToken.email
        }

        req.user = user;
        req.isAuthenticated = true;
        res.locals.userId = user._id;
        res.locals.userEmail = user.email;
        res.locals.isAuthenticated = true;
        return next()
    } catch (err){
        //TODO: Invalid token
        console.log(err);
        
        res.clearCookie('auth')

        res.redirect('/auth/login');
    }
    //TODO: Add user data to request
}

export const isAuth = (req,res,next)=>{
    if(!req.isAuthenticated){
       return res.redirect('/auth/login')
    }

    return next()
}