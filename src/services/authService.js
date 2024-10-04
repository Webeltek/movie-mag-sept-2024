import User from '../models/User.js'
//TODO create model

const register = (email,password)=>{
    return User.create({email,password});
    
}

export default {
    register
}