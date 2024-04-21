import mysql from 'mysql2/promise';

let connection;

export default async function connectToMySQL() {
    if (connection) {
        return connection;
    }
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'webshop',
        password: '123123'
    });

    return connection;
}
