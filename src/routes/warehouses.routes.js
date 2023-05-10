import { Router } from 'express';

import { getWarehouses, postWarehouses, deleteWarehouse } from '../controllers/warehouses.controller.js';

const router = Router();

router.post('/warehouses', postWarehouses);
router.get('/warehouses', getWarehouses);

router.delete('/warehouses/:id', deleteWarehouse);

export default router;