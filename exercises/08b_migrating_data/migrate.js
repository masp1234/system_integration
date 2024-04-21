import connectToMongoDB from "./db/connectToMongoDB.js";
import connectToMySQL from "./db/connectToMySQL.js";

const mongoConnection = await connectToMongoDB();

const mysqlConnection = await connectToMySQL();

const customers = await mongoConnection.collection('customers').find().toArray();
const products = await mongoConnection.collection('products').find().toArray();

console.log(customers);

console.log(products);

const [results, fields] = await mysqlConnection.query('SELECT * FROM customers');

console.log(results);
console.log(fields);
