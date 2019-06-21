const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://mozelli:mozelli@cluster0-44xx3.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

app.use((req, res, next) => {
	req.io = io;
	next();
});

//Alterar para a pasta resized posteriormente quando encontrar um módulo de redimensionamento de imagens.
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(cors());

app.use(require('./routes'));

const PORT = 3000;
server.listen(3000, console.log(`Server running on http://localhost:${PORT}`));