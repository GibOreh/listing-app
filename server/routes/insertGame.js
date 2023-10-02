const router = require('express').Router()
const ctrls = require('../controllers/insertDataGame')

router.post('/',ctrls.insertGame)


module.exports = router
