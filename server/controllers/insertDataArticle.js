const App = require('../models/apps')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')
const data = require('../../data/dataApp.json')

const fn = async(app) => {
    await App.create({
        title: app?.title,
        slug: slugify(app?.title),
        image: app?.image,
        description: app?.description,
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