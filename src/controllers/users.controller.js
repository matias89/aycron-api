import bcryptjs from 'bcryptjs';
import { pool } from '../db/connection.js';
export const UserRegistration = async (req, res) => {
    const { name, email, role, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    try {
        const [rows] = await pool.query('INSERT INTO users (name, email, role, password) VALUES (?, ?, ?, ?)', [name, email, role, hashedPassword]);
        const newUser = {
            id: rows.insertId,
            name,
            email,
        };
        return res.status(201).json(newUser);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};