const gameRouter = require('./game')

const initRouters = (app)=>{
    app.use('/api/game',gameRouter)
}

module.exports = initRouters
