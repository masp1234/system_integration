import { connectToMongoDB, closeMongoDBConnection } from "./db/connectToMongoDB.js";
import connectToMySQL from "./db/connectToMySQL.js";

const mongoConnection = await connectToMongoDB();
const mysqlConnection = await connectToMySQL();

const customers = await mongoConnection.collection('customers').find().toArray();
const products = await mongoConnection.collection('products').find().toArray();

const createdProducts = [];

try {
    await mysqlConnection.beginTransaction();

    for (const customer of customers) {
        const [customerResults] = await mysqlConnection.execute('INSERT INTO customers(name, email) VALUES (?, ?)', [customer.name, customer.email]);
            
        for (const order of customer.orders) {
            const [orderResults] = await mysqlConnection.execute('INSERT INTO orders(customer_id, total_amount) VALUES (?, ?)', [
                customerResults.insertId, order.total_amount
            ]);
    
            for (const lineItem of order.productLineItems) {
                const product = products.find((product) => product._id === lineItem.product_id);
                if (product) {
                    let createdProduct = createdProducts
                        .find((createdProduct) => createdProduct.sku === product.sku);
                     
                    if (!createdProduct) {
                        const [productResults] = await mysqlConnection.execute('INSERT INTO products(name, price, sku) VALUES (?, ?, ?)', [
                            product.name, product.price, product.sku
                        ]);
                        createdProduct = {
                            ...product,
                            mysqlId: productResults.insertId
                        }
                        createdProducts.push(createdProduct);
                    }
    
                    await mysqlConnection.execute('INSERT INTO product_line_items(order_id, product_id, quantity) VALUES (?, ?, ?)', [
                        orderResults.insertId, createdProduct.mysqlId, lineItem.quantity
                        ]);               
                }
            }
        }
    }
    await mysqlConnection.commit();
    console.log('Transaction committed successfully');

}
catch(error) {
    await mysqlConnection.rollback();
    console.error('Transaction rolled back due to error:', error);
}
finally {
    await mysqlConnection.close();
    await closeMongoDBConnection();
}
