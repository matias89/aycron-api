import bcryptjs from 'bcryptjs';
import { pool } from '../db/connection.js';
export const UserRegistration = async (req, res) => {
    const { name, email, role, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    try {
        const [result] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        console.log(result);
        if (result.length > 0) {
            return res.status(400).json({ message: 'User exists' });
        }
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

export const UserLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials', isLogged: false });
        }
        const user = rows[0];
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials', isLogged: false });
        }
        return res.status(200).json({ message: 'Login successful', isLogged: true, name: user.name });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}