//CONSTANTES
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
//VARIÁVEIS
const routes = require('./routes');

const app = express();

//SERVIÇOS
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

//PORTA
app.listen(3333);