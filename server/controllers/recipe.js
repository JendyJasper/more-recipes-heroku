import models from '../models';
const recipe = models.Recipe;

const RecipeController = {
  addRecipe(req, res) {
    return recipe
      .create({
        title: req.body.title,
        description: req.body.description,
        details: req.body.details,
        instructions: req.body.instructions,
        userId: req.body.userId,
      })

      .then(() => {
        res.send({
            status: 'Success',
            message: "Recipe succesfully added"
        });
      })
      .catch(error => res.status(400).send({
        status: false,
        message: 'UserId not valid'
      }));
  },
getRecipe(req, res) {
  return recipe
  .findAll({})
  .then((recipes) => {
    if(recipes.length < 1) {
      res.status(200).send({
        message: 'There is no recipe in the database'
      });
    } else {
      res.status(200).send(recipes)
    };
  })
  .catch((error) => res.status(400).send(error))
},

deleteARecipe(req, res){
  return recipe
  .destroy({
    where: {
      id: req.params.recipeId,    },
  })
  .then((recipe) => {
    if(recipe){
     return  res.status(200).send({
    status: 'success',
    message: 'Recipe deleted successfully'
    });

    }
    else{
     return res.status(400).send({
        status: 'failed',
        message: 'Recipe does not exist'
      })
    }
  })
  .catch((error) => res.status(409).send({
    status: 'success',
    message: error
  }));
},

modifyRecipe(req, res){
  return recipe
  .findById(req.params.recipeId)
  .then(rec => {
    //return res.status(200).send(rec);
    if(rec)
    {
     return  rec.update(req.body, {
        where: {
          id: req.params.recipeId
        },
      })
      .then((recipe) => {
          return res.status(200).send({
        status: 'success',
        message: 'Recipe modified successfully'
       })});
  }
  else{
      return res.status(400).send({
        status: 'failed',
        message: 'Recipe does not exist'
      })
    }
  });
},
}

export default RecipeController;