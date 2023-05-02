import { Router } from 'express';
import { UserRegistration, UserLogin } from '../controllers/users.controller.js';

const router = Router();

router.post('/users/register', UserRegistration);

router.post('/users/login', UserLogin);

export default router;