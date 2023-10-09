const Article = require('../models/articles')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')


const createArticle = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length===0) throw new Error("Missing inputs")
    if(req.body && req.body.title) req.body.slug = slugify(req.body.title)
    const newArticle = await Article.create(req.body)
    return res.status(200).json({
        success: newArticle ? true : false,
        createArticle: newArticle ? newArticle : 'Cannot create new article'
    })
})

const getArticles = asyncHandler(async (req, res) => {
    const { title, sort, category, page, limit } = req.query;
  
    const filter = {};
    if (title) {
      filter.slug = slugify(title, { lower: true });
    }
    if (category) {
      filter.category = category;
    }
  const sortOptions = {};
  if (sort === 'releaseDate') {
    sortOptions.releaseDate = 1; 
  }

  const pageNumber = parseInt(page) || 1;
  const pageSize = parseInt(limit) || 10;
  const skip = (pageNumber - 1) * pageSize;

  const articles = await Article.find(filter)
    .sort(sortOptions)
    .skip(skip)
    .limit(pageSize);

  res.status(200).json({
    success: true,
    articles,
  });
});


const getArticle = asyncHandler(async (req, res) => {
    const { pid } = req.params
    const article = await Article.findById(pid)
    return res.status(200).json({
        success: article ? true : false,
        articleData: article ? article : 'Cannot get article'
    })
})


const updateArticle = asyncHandler(async(req,res)=>{
    const {pid} = req.params
    if (req.body && req.body.title) req.body.slug = slugify(req.body.title)
    const updateArticle = await Article.findByIdAndUpdate(pid,req.body, {new: true})
    return res.status(200).json({
        success: updateArticle ? true : false,
        articleData: updateArticle ? updateArticle : 'Cannot update Article'
    })
})

const deleteArticle = asyncHandler(async(req,res)=>{
    const {pid} = req.params
    const deleteArticle = await Article.findByIdAndDelete(pid)
    return res.status(200).json({
        success: deleteArticle ? true : false,
        ArticleData: deleteArticle ? deleteArticle : 'Cannot delete Article'
    })
})




module.exports = {
    createArticle,
    getArticle,
    getArticles,
    updateArticle,
    deleteArticle
}