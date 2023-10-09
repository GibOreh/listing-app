const router = require('express').Router()
const ctrls = require('../controllers/insertDataArticle')

router.post('/',ctrls.insertArticle)


module.exports = router
