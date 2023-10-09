const Game = require('../models/games')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')
const data = require('../../data/dataGame.json')

const fn = async(game) => {
    await Game.create({
        title: game?.title,
        slug: slugify(game?.title),
        category: game?.category,
        platform: game?.platform,
        size: game?.size,
        version: game?.version,
        image: game?.image,
        downloadLinks: game?.downloadLinks,
        description: game?.description,
        modFeatures: game?.modFeatures,
        isAPK: game?.isAPK,
        isMod: game?.isMod,
        isEditorsChoice: game?.isEditorsChoice,
        rating: game?.rating
    })
}
const insertGame = asyncHandler(async(req,res)=>{
    const promises =[]
    for(let game of data) promises.push(fn(game))
    await Promise.all(promises)
    return res.status(200).json('Done')
})

module.exports = {
    insertGame
}