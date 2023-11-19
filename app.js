import { createDBConnection } from './db.js';

export async function startServer(app) {
    const connection = await createDBConnection();

    const server = app.listen(3000, () => {
        console.log(`Server is running`);
    });

    server.on('close', async () => {
        await connection.end();
    });
}
