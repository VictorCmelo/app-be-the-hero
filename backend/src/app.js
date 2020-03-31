const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');


const app = express();

app.use(cors(
    
));

app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Rota/recurso
 */

/**
 * Métodos HTTP:
 * 
 * Get: Buscar Informações no back-end
 * Post: criar uma informação no back-end
 * Put: alterar uma informação no back-end
 * Delete: deletar uma informação no back-end
 */


 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após ? (filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo de requisição, utilizando para criar ou alterar recursos 
  */

  /**
   * SQL: SQLite 
   * NoSQL> MongoDB, CouchDB
   */

   /**
    * Driver: SELECT * FROM users
    * Query Bulder: table('users').select('*').where()
    */


module.exports = app;
