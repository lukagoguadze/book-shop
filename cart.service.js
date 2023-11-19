import { createDBConnection } from '../db.js';
const connection = await createDBConnection();

export class CartService{
    constructor(connection) {
        this.connection = connection;
    };

    async  allBook(req,res)  {
        const [book]=await connection.query('SELECT * FROM books');
        const bookData = Object.values(book);
        res.json(bookData);
    };

    async insertCart(req, res)  {
        const vBody = req.body;
        const [book] = await connection.query('SELECT * FROM books');
        const bookData = Object.values(book);
        const findBook = bookData.find(i => i.name === vBody.name && i.author === vBody.author && i.price === vBody.price);
        if (findBook && findBook.name !== undefined && findBook.author !== undefined && findBook.price !== undefined) {
            await connection.query('INSERT INTO cart (name, author, price) VALUES (?, ?, ?)', [findBook.name, findBook.author, findBook.price]);
            res.json('insert cart');
        } else {
            res.json({ message: 'Book not found' });
        }
    };

    async delCart(req, res)  {
        const { id } = req.params;
        await connection.query('DELETE FROM cart WHERE id = ?', [id]);
        res.json('cart is deleted')
}
}                                                 