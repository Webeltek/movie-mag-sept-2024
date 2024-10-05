import bcrypt from 'bcrypt'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'


const SECRET = '4325njlkjn43324nlkasdjn098u'

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
    const payload = { 
        _id: user._id, 
        email
    }
    const token = jwt.sign(payload, SECRET, { expiresIn: '2h'})
    //TODO: Return jwt token
    return token;
}

export default {
    register
}