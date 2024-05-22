const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json()); // Парсинг JSON-тела запроса
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

app.post('/proxy', (req, res) => {
  // ...
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
