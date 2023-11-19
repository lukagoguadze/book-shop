import express from 'express';
import bodyParser from 'body-parser';
import { startServer } from './app.js';
import registerRoutes from './auth/registerRoute.js';
import cartController from './cart/cartController.js'

const app = express();
app.use(bodyParser.json());
app.use('/app', registerRoutes);
app.use('/app',cartController)

startServer(app);

