const express = require('express');
const app = express();
const path = require('path')

const pathFile = path.join(__dirname, 'public', 'index.html')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(pathFile);
});

app.listen(3000, () => {
    console.log('The app is listening on port 3000')
});