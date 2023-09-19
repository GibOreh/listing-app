const { Types } = require('mongoose')
const GameCategories = require('../models/GameCategories')
const asyncHandler = require('express-async-handler')


const createCategory = asyncHandler(async(req,res)=>{
    const response = await GameCategories.create({
        ...req.body,
        category: new Types.ObjectId(req.body.category)
    })
    return res.status(200).json({
        success: response ? true : false,
        createdCategory: response ? response : 'Cannot create new game category'
    })
})
const getCategories = asyncHandler(async(req,res)=>{
    const response = await GameCategories.find().select('title     _id')
    return res.status(200).json({
        success: response ? true : false,
        GameCategories: response ? response : 'Cannot get game category'
    })
})
const updateCategory = asyncHandler(async(req,res)=>{
    const {pcid} = req.params
    const response = await GameCategories.findByIdAndUpdate(pcid,req.body,{new: true})
    return res.status(200).json({
        success: response ? true : false,
        updatedCategory: response ? response : 'Cannot update game category'
    })
})
const deleteCategory = asyncHandler(async(req,res)=>{
    const {pcid} = req.params
    const response = await GameCategories.findByIdAndDelete(pcid)
    return res.status(200).json({
        success: response ? true : false,
        deletedCategoy: response ? response : 'Cannot delete game category'
    })
})
module.exports ={
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
}