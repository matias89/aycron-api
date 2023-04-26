import express from 'express';

import warehousesRoutes from './routes/warehouses.routes.js';
import usersRoutes from './routes/users.routes.js';

const app = express();

app.use(express.json());

app.use(warehousesRoutes);
app.use(usersRoutes);

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
