import { Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    email: String,
    password: {
        type: String,
        minLength : [ 3, 'Your password is too short!']
    }
});

const SALT_ROUNDS = 10;

// Hash password before save
userSchema.pre('save', async function(){
    //TODO: Hash password
    const hash= await bcrypt.hash(this.password, SALT_ROUNDS)
    this.password = hash;
})

const User = model('User', userSchema);

export default User;