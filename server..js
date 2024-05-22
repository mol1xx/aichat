const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/proxy', (req, res) => {
  const { url, body } = req.body;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Api-Key YOUR_API_KEY_HERE'
    },
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(data => {
    res.json(data);
  })
  .catch(error => {
    console.error('Error communicating with AI:', error);
    res.status(500).json({ error: 'Error communicating with AI' });
  });
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});