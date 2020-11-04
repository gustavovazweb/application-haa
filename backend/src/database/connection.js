//CONSTANTES
const knex = require('knex');

const configuration = require('../../knexfile');

//SERVIÇOS
const connection = knex(configuration.development);

//EXPORTAÇÃO
module.exports = connection;