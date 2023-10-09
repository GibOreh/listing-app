const router = require('express').Router()
const ctrls = require('../controllers/articles')

router.post('/',ctrls.createArticle)
router.get('/',ctrls.getArticles)


router.delete('/:pid',ctrls.deleteArticle)
router.put('/:pid',ctrls.updateArticle)
router.get('/:pid',ctrls.getArticle)


module.exports = router
