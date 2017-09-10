require('dotenv').config();

const seq = {
  development: {
    username:  process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: 5432,
    dialect: process.env.DIALECT
  },
  test: {
    username:  process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: 5432,
    dialect: process.env.DIALECT
  },
  production: {
    
       use_env_variable: 'postgres://vuhjibls:0-PB8xHCRUcXiV3qVKTzRIHa8Gy61zhj@stampy.db.elephantsql.com:5432/vuhjibls'
    
     }
}

module.exports = seq;