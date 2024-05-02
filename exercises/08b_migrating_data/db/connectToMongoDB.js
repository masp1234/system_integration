import { MongoClient } from "mongodb";

let client;

export async function connectToMongoDB() {
    const databaseName = 'mydatabase';
    if (client) {
        return client.db(databaseName);
    }
    client = new MongoClient('mongodb://root:123123@localhost:27018');
    await client.connect();
    
    return client.db(databaseName);
}

export async function closeMongoDBConnection() {
    if (client) {
        await client.close();
        client = null;
    }
}



