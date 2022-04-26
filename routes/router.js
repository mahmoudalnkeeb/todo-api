const router = require('express').Router()
const todoroutes = require('./apis/todo')

router.use('/todo' , todoroutes)


module.exports = router