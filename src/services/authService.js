import bcrypt from bcrypt
import User from '../models/User.js'
//TODO create model

const register = (email,password)=>{
    //TODO: check if user exists
    return User.create({email,password});
    
}

const login = async (email,password)=>{
    //TODO : check if user exists
    const user = await User.findOne({email})
    if(!user){
        throw new Error('User doesn\'t exist')
    }
    //TODO: validate password
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid){
        throw new Error('Password does\'t match')
    }
    //TODO: generate jwt token
    //TODO: Return jwt token
}

export default {
    register
}