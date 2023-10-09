const Article = require('../models/articles')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')
const data = require('../../data/dataArticle.json')

const fn = async(article) => {
    await Article.create({
        title: article?.title,
        slug: slugify(article?.title),
        image: article?.image,
        description: article?.description,
    })
}
const insertArticle = asyncHandler(async(req,res)=>{
    const promises =[]
    for(let article of data) promises.push(fn(article))
    await Promise.all(promises)
    return res.status(200).json('Done')
})

module.exports = {
    insertArticle
}