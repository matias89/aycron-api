import * as dotenv from 'dotenv';
import { createPool } from 'mysql2/promise';

dotenv.config();

export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // port: 3306,
    database: process.env.DB_NAME,
});