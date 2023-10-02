const App = require('../models/apps')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')
const data = require('../../data/dataApp.json')

const fn = async(app) => {
    await App.create({
        title: app?.title,
        slug: slugify(app?.title),
        category: app?.category,
        platform: app?.platform,
        size: app?.size,
        version: app?.version,
        releaseDate: app?.releaseDate,
        image: app?.image,
        downloadLinks: app?.downloadLinks,
        description: app?.description,
        modFeatures: app?.modFeatures,
        isAPK: app?.isAPK,
        isMod: app?.isMod,
        isEditorsChoice: app?.isEditorsChoice,
        rating: app?.rating
    })
}
const insertApp = asyncHandler(async(req,res)=>{
    const promises =[]
    for(let app of data) promises.push(fn(app))
    await Promise.all(promises)
    return res.status(200).json('Done')
})

module.exports = {
    insertApp
}