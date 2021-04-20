const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(require('./routes/index'));
app.listen(3000);