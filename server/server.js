const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

app.use(cors());

app.use(express.static('public'));

app.get('/getApiKey', (req, res) => {
  res.setHeader('Content-Type', 'application/json'); // Set the content type to JSON
  res.json({ apiKey });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
