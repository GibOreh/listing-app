const router = require('express').Router()
const ctrls = require('../controllers/insertData')

router.post('/',ctrls.insertGame)


module.exports = router
