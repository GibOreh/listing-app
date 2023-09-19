const router = require('express').Router()
const ctrls = require('../controllers/itemCategories')

router.post('/',ctrls.createCategory)
router.get('/',ctrls.getCategories)
router.delete('/:pcid',ctrls.deleteCategory)
router.put('/:pcid',ctrls.updateCategory)




module.exports = router
