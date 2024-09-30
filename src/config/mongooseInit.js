import { connect } from 'mongoose';

const dbUrl = 'mongodb://localhost:27017/test1'


export default async function mongooseInit(){
    try {
        const url = process.env.DB_URL || dbUrl;
        await connect(url, {})
        console.log('Connected to DB!' + url);
        
    } catch (err) {
        console.log('Cannot connect to DB'+ err.message);
        
    }
}
