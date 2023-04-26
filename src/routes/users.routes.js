import { Router } from 'express';

const router = Router();

router.post('/users/register', (req, res) => { // User registration
    res.send('/users/register POST');
    }
);

router.post('/users/login', (req, res) => { // User login
    res.send('/users/login');
    }
);

export default router;