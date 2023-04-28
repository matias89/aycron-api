import express from 'express';
import cors from 'cors';
import session from 'express-session';

import warehousesRoutes from './routes/warehouses.routes.js';
import usersRoutes from './routes/users.routes.js';

const app = express();

app.use(cors(
    {
        origin: 'http://localhost:3000',
    }
));

app.use(session({
    secret: 'secret-key',
    resave: true,
    saveUninitialized: true,
}));

app.use(express.json());

app.use(warehousesRoutes);
app.use(usersRoutes);

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
