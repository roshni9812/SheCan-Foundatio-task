const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static('public'));

app.get('/api/user', (req, res) => {
  res.json({
    name: "Roshni Kumari",
    referralCode: "roshni2025",
    donations: 2000
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
