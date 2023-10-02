const App = require('../models/apps')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')


const createApp = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length===0) throw new Error("Missing inputs")
    if(req.body && req.body.title) req.body.slug = slugify(req.body.title)
    const newApp = await App.create(req.body)
    return res.status(200).json({
        success: newApp ? true : false,
        createApp: newApp ? newApp : 'Cannot create new App'
    })
})

const getApps = asyncHandler(async (req, res) => {
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

  const apps = await App.find(filter)
    .sort(sortOptions)
    .skip(skip)
    .limit(pageSize);

  res.status(200).json({
    success: true,
    apps,
  });
});


const getApp = asyncHandler(async (req, res) => {
    const { pid } = req.params
    const app = await App.findById(pid)
    return res.status(200).json({
        success: app ? true : false,
        appData: app ? app : 'Cannot get app'
    })
})


const updateApp = asyncHandler(async(req,res)=>{
    const {pid} = req.params
    if (req.body && req.body.title) req.body.slug = slugify(req.body.title)
    const updateApp = await App.findByIdAndUpdate(pid,req.body, {new: true})
    return res.status(200).json({
        success: updateApp ? true : false,
        appData: updateApp ? updateApp : 'Cannot update App'
    })
})

const deleteApp = asyncHandler(async(req,res)=>{
    const {pid} = req.params
    const deleteApp = await App.findByIdAndDelete(pid)
    return res.status(200).json({
        success: deleteApp ? true : false,
        appData: deleteApp ? deleteApp : 'Cannot delete App'
    })
})

const searchAppByTitle = asyncHandler(async (req, res) => {
  const { query } = req.query; 
  try {
    const apps = await App.find({
      title: { $regex: query, $options: 'i' }, 
    });

    return res.status(200).json({
      appData:  apps 
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
});



module.exports = {
    createApp,
    getApp,
    getApps,
    updateApp,
    deleteApp,
    searchAppByTitle
}