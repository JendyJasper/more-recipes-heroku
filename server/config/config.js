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
  }
}

module.exports = seq;