import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken' 
// import UserRoutes from './server/routes/user';
// import validator from 'express-validator';

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
// app.use(validator());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(validator());

require ('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to more recipes.',
  }));

//  app.listen(5000, (req, res) => {
//    console.log('App running on port 3000')
//  })

module.exports = app;