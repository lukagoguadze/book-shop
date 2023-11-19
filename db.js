import mysql from 'mysql2/promise';

export async function createDBConnection() {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: '1234',
        database: 'person'
    });
}
