const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'app/public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Index Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/public/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/public/index.html'));
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port '+port);
});
