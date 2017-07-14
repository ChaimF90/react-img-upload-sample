const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const routeToPublic = path.join(__dirname, './frontend/public/images');
var upload = multer({ dest: routeToPublic });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/save-image', upload.single('sample'), (req, res) => {
    res.json(req.file);
});


app.listen(6000, () => console.log('server is running on port 6000'));