const Item = require('../models/items')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')


const createItem = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length===0) throw new Error("Missing inputs")
    if(req.body && req.body.title) req.body.slug = slugify(req.body.title)
    const newItem = await Item.create(req.body)
    return res.status(200).json({
        success: newItem ? true : false,
        createItem: newItem ? newItem : 'Cannot create new item'
    })
})

const getItems = asyncHandler(async(req,res)=>{
    const queries = {...req.query} 
    // tach cac truong dac biet ra khoi query
    const excludeFields = ['limit', 'sort','page','fields']
    excludeFields.forEach(ele => delete queries[ele])

    //Format lai cac oprators cho dung cu phap cua mongoose
    let queryString = JSON.stringify(queries)
    queryString = queryString.replace(/\b(gte|gt|lt|lte)\b/g, matchEle =>`$${matchEl}`)
    const formatedQueries = JSON.parse(queryString)

    //Filtering
    if(queries?.title) formatedQueries.title = {$regex: queries.title, $options: 'i'}
    let queryCommand = Item.find(formatedQueries)


    //Sorting
    if(req.query.fields){
        const fields = req.body.fields.split(',')
        queryCommand = queryCommand.sort(sortBy)
    }

    //Fields limiting
    if(req.query.fields){
        const fields = req.query.fields.split(',')
        queryCommand = queryCommand.select(fields)

    }

    //Pagination
    const page = +req.query.page || 1
    const limit = +req.query.limit || process.env.LIMIT_ITEMS
    const skip = (page - 1)*limit
    const counts = await Item.find().select(['title']).limit(limit).skip
    return res.status(200).json({
                success: item ? true : false,
                counts,
                items: item ? item : 'Cannot get items'
            })
})


const getItem = asyncHandler(async (req, res) => {
    const { pid } = req.params
    const item = await Item.findById(pid).populate('category')
    return res.status(200).json({
        success: item ? true : false,
        itemData: item ? item : 'Cannot get item'
    })
})


const updateItem = asyncHandler(async(req,res)=>{
    const {pid} = req.params
    if (req.body && req.body.title) req.body.slug = slugify(req.body.title)
    const updatedItem = await Item.findByIdAndUpdate(pid,req.body, {new: true})
    return res.status(200).json({
        success: updatedItem ? true : false,
        itemData: updatedItem ? updatedItem : 'Cannot update item'
    })
})

const deleteItem = asyncHandler(async(req,res)=>{
    const {pid} = req.params
    const deleteItem = await Item.findByIdAndDelete(pid)
    return res.status(200).json({
        success: deleteItem ? true : false,
        itemData: deleteItem ? deleteItem : 'Cannot delete item'
    })
})



module.exports = {
    createItem,
    getItem,
    getItems,
    updateItem,
    deleteItem
}