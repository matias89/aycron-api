import { pool } from '../db/connection.js';

export const getWarehouses = async (req, res) => {
    const result = await pool.query('SELECT * FROM warehouses');
    res.json(result[0]);
}

const getWarehouse = async (code) => {
    const [result] = await pool.query('SELECT * FROM warehouses WHERE code = ?', [code]);
    return result[0];
}
export const postWarehouses = async (req, res) => {
    const { name, address, code, state, country, zip } = req.body;
    const warehouse = await getWarehouse(code);
    if (warehouse) {
        return res.status(400).json({ message: 'Warehouse exists' });
    }
    const result = await pool.query('INSERT INTO warehouses (name, address, code, state, country, zip) VALUES (?, ?, ?, ?, ?, ?)', [name, address, code, state, country, zip]);
    res.json(result[0]);
}