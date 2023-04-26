import { Router } from 'express';
import { UserRegistration } from '../controllers/users.controller.js';

const router = Router();

router.post('/users/register', UserRegistration);

router.post('/users/login', (req, res) => { // User login
    res.send('/users/login');
    }
);

export default router;