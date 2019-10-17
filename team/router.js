const { Router} = require ('express')
const Team = require ('./model')


const router = new Router()
router.get('/team', (req, res, next) =>{
    Team.findAll()
    .then(teams =>{ 
        res.send(teams)
    })
    .catch(next)
})

router.get('/teams/:teamId', (req, res, next) => {
    Team.findByPk(req.params.teamId, { include: [ Player ]})
      .then(team => {
        res.send(team);
      })
      .catch(next);
  });
  
  // Create a new team account
  router.post("/teams", (req, res, next) => {
    // console.log("WHAT IS REQ.BODY", req.body)
    Team.create(req.body)
      .then(team => res.json(team))
      .catch(next)
  });
  
  router.delete("/teams/:teamId", (req, res, next) => {
    // console.log('WHAT IS REQ.PARAMS before we get wrecked by params', req.params)
    // res.send('Some people want to watch the world burn') // -> route works
  
    Team.destroy({
      where: {
        id: req.params.teamId,
      }
    })
    .then(numDeleted => {
      if (numDeleted) {
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
  });
  
  router.put("/teams/:teamId", (req, res, next) => {
    // res.send('oh hi')
    // console.log(req.params, 'WRECKED BY PARAMS??')
    Team.findByPk(req.params.teamId)
      .then(team => {
        console.log("TEAM FOUND?", team)
        if (team) {
          team
            .update(req.body)
            .then(team => res.json(team));
        } else {
          res.status(404).end();
        }
      })
      .catch(next);
  });

module.exports = router