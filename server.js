const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint simple: GET /hello?name=TuNombre
app.get('/hello', (req, res) => {
  const name = (req.query.name || 'mundo').toString();
  res.json({
    message: `Hola, ${name}!`,
    service: 'hello-microservice',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
