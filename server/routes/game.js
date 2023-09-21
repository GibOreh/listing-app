const router = require('express').Router()
const ctrls = require('../controllers/games')

router.post('/',ctrls.createGame)
router.get('/',ctrls.getGames)


router.delete('/:pid',ctrls.deleteGame)
router.put('/:pid',ctrls.updateGame)
router.get('/:pid',ctrls.getGame)


module.exports = router
