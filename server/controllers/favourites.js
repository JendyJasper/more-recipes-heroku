import models from '../models';
const favourite = models.Favourite;


const FavouriteRecipe = {
  addFavourite(req, res) {
    return favourite
    .create({
      recipeId: req.body.recipeId,
      userId: req.body.userId
    })
    .then(() => {
      res.send ({
        status: 'Done',
        message: 'Favourite Added'
      });

    })
    .catch (error => res.status(400).send ({
      status: false,
      message: error
    }));
  },


  getFavourite(req, res){
    return favourite
    .findAll({
    where: {
      userId: req.params.userId
    },
    })
    .then((favourite) => {
      if(favourite.length < 1){
        return res.status(200).send({
          message: 'The user has no favourite recipe'
        });
      }
        return res.status(200).send(favourite)
    })
    .catch((error) => {
      res.send(error);
    })
  }
}

export default FavouriteRecipe;