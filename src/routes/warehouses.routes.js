import { Router } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/data/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

import { getWarehouses, postWarehouses, deleteWarehouse, getNearWarehouses, getFile } from '../controllers/warehouses.controller.js';

const router = Router();

router.post('/warehouses', upload.single('file'), postWarehouses);
router.get('/warehouses', getWarehouses);
router.post('/warehouses/near', getNearWarehouses);
router.delete('/warehouses/:id', deleteWarehouse);
router.get('/warehouses/file/:filename', getFile);

export default router;