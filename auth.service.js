import { createDBConnection } from '../db.js';
import { hashPassword } from './bcryptHandler.js';
const connection = await createDBConnection();

export class AuthService{
    constructor(connection) {
        this.connection = connection;
    }
    async demo(req, res) {
        const vBody = req.body;
        await connection.query('INSERT INTO register (first_name, email, password) VALUES (?, ?, ?)', [vBody.first_name, vBody.email, vBody.password]);
        res.json('add item');
    }

    async login(req, res) {
        const vBody = req.body;
        const [item] = await connection.query('SELECT * FROM register');
        const dataArray = Object.values(item);
        const findData = dataArray.find(data => data.first_name === vBody.first_name && data.email === vBody.email && data.password === vBody.password);
        
        if (findData) {
            const hashedPassword = await hashPassword(findData.password);
            const hashedData = { ...findData, password: hashedPassword };
            res.json(hashedData);
        } else {
            res.json({ message: 'error' });
        };
    };

    async addBook(req,res) {
        const vBody=req.body;
        await connection.query('INSERT INTO books (name, author, price) VALUES (?, ?, ?)', [vBody.name, vBody.author, vBody.price]);
        res.json('add book');
    }
}