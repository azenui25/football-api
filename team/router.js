const express = require ('express')
const model = require ('./model')


const router = new router()
router.get('/team', (req, res, next) =>{
    TextDecoderStream.findAll()
    .then(teams =>{ 
        res.send(teams)
    })
    .catch(next)
})

module.exports = router