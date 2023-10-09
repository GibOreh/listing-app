const gameRouter = require('./game')
const appRouter = require('./app')
const articleRouter = require('./article')
const insertGame = require('./insertGame')
const insertApp = require('./insertApp')
const insertArticle = require('./insertArticle')

const initRouters = (app)=>{
    app.use('/api/game',gameRouter)
    app.use('/api/app',appRouter)
    app.use('/api/article',articleRouter)
    app.use('/api/insert-game',insertGame)
    app.use('/api/insert-app',insertApp)
    app.use('/api/insert-article',insertArticle)
}

module.exports = initRouters
