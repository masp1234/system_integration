import { MongoClient } from "mongodb";

let connection;

export default async function connectToMongoDB() {
    if (connection) {
        return connection;
    }
    const client = new MongoClient('mongodb://root:123123@localhost:27017');
    await client.connect();
    connection = await client.db('mydatabase');
    return connection;
}



