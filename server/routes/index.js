const itemRouter = require('./item')
const gameCategoryRouter  = require('./gameCategory')

const initRouters = (app)=>{
    app.use('/api/item',itemRouter)
    app.use('/api/gamecategory',gameCategoryRouter)
}

module.exports = initRouters
