import express from 'express';
import { AuthService } from './auth.service.js';

let router = express.Router();
const authService = new AuthService();


router.post('/register',authService.demo);

router.get('/login',authService.login);

router.post('/add',authService.addBook);

export default router;
