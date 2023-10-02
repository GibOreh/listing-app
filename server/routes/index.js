const gameRouter = require('./game')
const appRouter = require('./app')
const insertGame = require('./insertGame')
const insertApp = require('./insertApp')

const initRouters = (app)=>{
    app.use('/api/game',gameRouter)
    app.use('/api/app',appRouter)
    app.use('/api/insert-game',insertGame)
    app.use('/api/insert-app',insertApp)
}

module.exports = initRouters
