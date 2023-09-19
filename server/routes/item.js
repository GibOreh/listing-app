const router = require('express').Router()
const ctrls = require('../controllers/items')

router.post('/',ctrls.createItem)
router.get('/',ctrls.getItems)


router.delete('/:pid',ctrls.deleteItem)
router.put('/:pid',ctrls.updateItem)
router.get('/:pid',ctrls.getItem)


module.exports = router
