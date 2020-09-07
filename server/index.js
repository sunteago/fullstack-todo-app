const express = require('express');
const sequelize = require('./config/db');

const PORT = 4000;

const app = express();

app.use(express.json());


sequelize
  .sync()
  .then(() => app.listen(PORT))
  .then(() => console.log(`Server listening at port ${PORT}`))
  .catch(err => console.log("An error occured", err))  
