import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const connection_String = process.env.MONGODB_CONNECTION_STRING;

const connectDb = async () => {
    try {
        await mongoose.connect(connection_String);
        console.log('Connected to db');
    } catch (error) {
        console.log('database connection error', error);
    }
};


export default  connectDb;