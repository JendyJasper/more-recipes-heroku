import models from '../models';
import jwt from 'jsonwebtoken';
const user = models.User;

const UserController = {
  addUser(req, res) {
    return user 
        .create({
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            active: req.body.active
        })
        .then(() => {
            res.send ({
                status: 'Success',
                message: "User successfully added"
            });
        })
        .catch(error => res.status(400).send({
            status: false,
            message: error
        }));
  },
  login(req, res) {
    return user
      .findOne({
        where: { 
            username: req.body.username,
            password: req.body.password
         },
      })
      .then((user) => {
          if (!user) {
              return res.status(404).send({
                  message: 'User not found! Please create an account'
              });
          }
          else{
            
            const token = jwt.sign({
                id: user.id }, 
                process.env.SIGNATURE);

            return res.json({
            success: true,
            message: 'Token generated!',
            token: token
          });
          }
         
        
        });
    },


    verifyToken(req, res, next) {

         const token = req.body.token || req.query.token || req.headers['x-token-access'];
          if (token) {
            // verify user
            jwt.verify(token, process.env.SIGNATURE, (err, decoded) => {      
              if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });    
              }
               else {
                // if everything is good
                req.decoded = decoded;    
                next();
              };


             }); 
        }
        else {
            return res.status(403).send({ 
                success: false, 
                message: 'No token provided.' 
            });
    }
    }
}

export default UserController;