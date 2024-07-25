const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const PYTHON_SERVICE_URL = process.env.PYTHON_BASE_URL || 'http://localhost:8000';
app.get('/items', async (req, res) => {
    try {
        const response = await axios.get(`${PYTHON_SERVICE_URL}/items/`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching items from Python service' });
    }
});

app.post('/items', async (req, res) => {
    try {
        const response = await axios.post(`${PYTHON_SERVICE_URL}/items/`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error adding item to Python service' });
    }
});

app.listen(port, () => {
    console.log(`Node.js service running at :${port}`);
});
