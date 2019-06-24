const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const config = require('./config/config');

mongoose.connect(
  config.infoConectionMongoDB,
  { useNewUrlParser: true },
).then(() => console.log('Connected in the database.'),
  (err) => {
    console.log(`An error was detected in the database connection: ${err}`);
  });

app.use((req, res, next) => {
  req.io = io;
  next();
});

// Alterar para a pasta resized posteriormente quando encontrar um
// módulo de redimensionamento de imagens.
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(cors());

app.use(require('./routes'));

app.use((err, req, res, next) => {
  res.json({ error: err.message });
});

const PORT = 3001;
server.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
