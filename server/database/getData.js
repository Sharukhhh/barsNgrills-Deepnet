import {MongoClient} from 'mongodb'
import dotenv from 'dotenv'
dotenv.config();

const connectionUri = process.env.MONGODB_CONNECTION_STRING ;


export const getData = async (collectionName) => {

    const client = new MongoClient(connectionUri );

    try {
        await client.connect();
        const db = client.db();
        const collection = db.collection(collectionName);
        const data = await collection.find({}).toArray();

        return data;
    } catch (error) {
        console.log('error retireving data', error);
        throw error;
    } finally {
        await client.close();
    }
}
