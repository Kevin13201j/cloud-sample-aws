const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from my cloud project!! Provider: ' + (process.env.PROVIDER || 'local'));
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});