const router = require('express').Router()
const ctrls = require('../controllers/apps')

router.post('/',ctrls.createApp)
router.get('/',ctrls.getApps)
router.get('/search', ctrls.searchAppByTitle);

router.delete('/:pid',ctrls.deleteApp)
router.put('/:pid',ctrls.updateApp)
router.get('/:pid',ctrls.getApp)


module.exports = router
