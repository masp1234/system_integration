import { MongoClient } from "mongodb";

let connection;

export default async function connectToMongoDB() {
    if (connection) {
        return connection;
    }
    const client = new MongoClient('mongodb://root:123123@localhost:27018');
    await client.connect();
    connection = client.db('mydatabase');
    
    return connection;
}



