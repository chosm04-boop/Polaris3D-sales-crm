const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  const publicPath = path.join(__dirname, 'public', 'index.html');
  const rootPath = path.join(__dirname, 'index.html');
  const fs = require('fs');
  if (fs.existsSync(publicPath)) {
    res.sendFile(publicPath);
  } else {
    res.sendFile(rootPath);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`AMR Sales CRM running on port ${PORT}`);
});
