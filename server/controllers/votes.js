import models from '../models';
const vote = models.Vote;

const VotesController = {
  addVote(req, res) {
  return vote 
  .create({
      userId: req.body.userId,
      recipeId: req.body.recipeId,
      rate: req.body.rate
  })
  .then(() => {
      res.send ({
          status: 'Success',
          message: 'Votes Successfully added'
      });
  })
  .catch (error => res.status(400).send ({
      status: false,
      message: error
  }));
  },
  

  upVote(req, res) {
      return vote
      .findAll({
          where: {
              recipeId: req.params.recepeid
          }
      })
      .then((vote) => {
          if(vote){
              vote.update({
                  rate: vote.rate + 1
              })
          }
      })
  }
};

export default VotesController;