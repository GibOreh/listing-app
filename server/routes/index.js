const gameRouter = require('./game')
const appRouter = require('./app')
const insert = require('./insert')

const initRouters = (app)=>{
    app.use('/api/game',gameRouter)
    app.use('/api/app',appRouter)
    app.use('/api/insert',insert)
}

module.exports = initRouters
