import { pool } from '../db/connection.js';

export const getWarehouses = async (req, res) => {
    const result = await pool.query('SELECT * FROM warehouses');
    res.json(result[0]);
}

export const postWarehouses = async (req, res) => {
    const { name, address, code, state, country, zip } = req.body;
    const result = await pool.query('INSERT INTO warehouses (name, address, code, state, country, zip) VALUES (?, ?, ?, ?, ?, ?)', [name, address, code, state, country, zip]);
    res.json(result[0]);
}