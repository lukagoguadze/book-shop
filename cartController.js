import express from 'express';
import { CartService } from './cart.service.js';
let router = express.Router();

const cartService= new CartService();

router.get('/cart' ,cartService.allBook);

router.post('/cart/add',cartService.insertCart);

router.delete('/cart/delete/:id',cartService.delCart)
export default router;