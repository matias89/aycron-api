import { pool } from '../db/connection.js';



export const getWarehouses = async (req, res) => {
    const result = await pool.query('SELECT * FROM warehouses ORDER BY id DESC');
    res.json(result[0]);
}

const getWarehouse = async (code) => {
    const [result] = await pool.query('SELECT * FROM warehouses WHERE code = ?', [code]);
    return result[0];
}
export const postWarehouses = async (req, res) => {
    const { name, address, code, state, country, zip, lat, lng } = req.body;
    const { file: { filename } } = req;
    const warehouse = await getWarehouse(code);
    if (warehouse) {
        return res.status(400).json({ message: 'Warehouse exists', status: 400 });
    }
    const result = await pool.query(
        'INSERT INTO warehouses (name, address, code, state, country, zip, lat, lng, filename) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [name, address, code, state, country, zip, lat, lng, filename]
    );
    return res.json({
        message: result[0],
        status: 200,
    });
}

export const deleteWarehouse = async (req, res) => {
    const { id } = req.params;
    const [result] = await pool.query('DELETE FROM warehouses WHERE code = ?', [id]);
    return res.json(result);
};

export const getNearWarehouses = async (req, res) => {
    const { lat, lng } = req.body;
    const [result] = await pool.query(`SELECT id, lat, lng, name, address, state, country, zip, ( 3959 * acos( cos( radians(${lat}) ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(${lng}) ) + sin( radians(${lat}) ) * sin( radians( lat ) ) ) ) AS distance FROM warehouses HAVING distance < 25 ORDER BY distance LIMIT 0 , 3;`);
    return res.json(result);
};

export const getFile = async (req, res) => {
    const { filename } = req.params;
    return res.download('./public/data/uploads/' + filename);
}