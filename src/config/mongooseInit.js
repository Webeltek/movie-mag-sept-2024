import { connect } from 'mongoose';

const dbUrl = 'mongodb://localhost:27017/test1'


export default async function mongooseInit(){
    try {
        await connect(dbUrl, {})
        console.log('Connected to DB');
        
    } catch (err) {
        console.log('Cannot connect to DB'+ err.message);
        
    }
}
