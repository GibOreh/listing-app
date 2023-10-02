const router = require('express').Router()
const ctrls = require('../controllers/insertDataApp')

router.post('/',ctrls.insertApp)


module.exports = router
