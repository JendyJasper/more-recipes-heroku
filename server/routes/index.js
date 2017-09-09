import RecipeController from '../controllers/recipe';
import UserController from '../controllers/user';
//import VotesControler from '../controllers/votes';
import ReviewsController from '../controllers/reviews';
import FavouriteRecipe from '../controllers/favourites'

module.exports = (app) => {
  app.get('/api',(req,res) => res.status(200).send ({
      message: 'Welcome to the recipes API',
  }));

  //Recipe routes
  app.post('/api/recipes', UserController.verifyToken, RecipeController.addRecipe);
  app.get('/api/recipes', UserController.verifyToken, RecipeController.getRecipe);
  app.put('/api/recipes/:recipeId', UserController.verifyToken, RecipeController.modifyRecipe);
  app.delete('/api/recipes/:recipeId', UserController.verifyToken, RecipeController.deleteARecipe);

  //User routes
  app.post('/api/users/signup', UserController.addUser);
  app.post('/api/users/signin', UserController.login),

  //votes routes
  //app.post('/api/upvotes', UserController.verifyToken, VotesControler.addVote);

  //favourites routes
  app.get('/api/users/:userId/recipes', UserController.verifyToken, FavouriteRecipe.getFavourite);
  app.post('/api/users/favourites', UserController.verifyToken, FavouriteRecipe.addFavourite);
  

  //reviews routes
  app.post('/api/recipes/:recipeId/reviews', UserController.verifyToken, ReviewsController.addReview)
};