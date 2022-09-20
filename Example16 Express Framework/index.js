const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 58080;

// Load all static html files in the directory, here index.html file open as default at http://localhost:58080/ but to load html like Resume.html we should call complete http://localhost:58080/Resume.html
app.use(express.static(path.join(__dirname)));

// Load all static html files in specific directory.
//app.use(express.static(path.join(__dirname, '.')));
//app.use(express.static(path.join(__dirname, '/test')));

// Configure Port
app.listen(PORT, () => console.log("Server listening on port " + PORT));