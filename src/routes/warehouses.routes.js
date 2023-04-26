import { Router } from 'express';

import { getWarehouses, postWarehouses } from '../controllers/warehouses.controller.js';

const router = Router();

router.post('/warehouses', postWarehouses);
router.get('/warehouses', getWarehouses);

router.delete('/warehouses/:id', (req, res) => { // Warehouse delete
    res.send('warehouses DELETE');
    }
);

export default router;