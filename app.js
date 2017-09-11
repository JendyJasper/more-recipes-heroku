import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken' 
// import UserRoutes from './server/routes/user';
// import validator from 'express-validator';

const app = express();

const port = process.env.PORT || 5000;

app.use(logger('dev'));

app.use(bodyParser.json());
// app.use(validator());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(validator());

// require ('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to more recipes.',
  }));

 app.listen(port, (req, res) => {
   console.log(`App running on port ${port}`)
 })

module.exports = app;