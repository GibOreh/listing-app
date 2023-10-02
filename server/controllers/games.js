const Game = require('../models/games')
const asyncHandler = require('express-async-handler')
const slugify = require('slugify')


const createGame = asyncHandler(async(req,res)=>{
    if(Object.keys(req.body).length===0) throw new Error("Missing inputs")
    if(req.body && req.body.title) req.body.slug = slugify(req.body.title)
    const newGame = await Game.create(req.body)
    return res.status(200).json({
        success: newGame ? true : false,
        createGame: newGame ? newGame : 'Cannot create new game'
    })
})

const getGames = asyncHandler(async (req, res) => {
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

  const games = await Game.find(filter)
    .sort(sortOptions)
    .skip(skip)
    .limit(pageSize);

  res.status(200).json({
    success: true,
    games,
  });
});


const getGame = asyncHandler(async (req, res) => {
    const { pid } = req.params
    const game = await Game.findById(pid)
    return res.status(200).json({
        success: game ? true : false,
        gameData: game ? game : 'Cannot get game'
    })
})


const updateGame = asyncHandler(async(req,res)=>{
    const {pid} = req.params
    if (req.body && req.body.title) req.body.slug = slugify(req.body.title)
    const updateGame = await Game.findByIdAndUpdate(pid,req.body, {new: true})
    return res.status(200).json({
        success: updateGame ? true : false,
        gameData: updateGame ? updateGame : 'Cannot update game'
    })
})

const deleteGame = asyncHandler(async(req,res)=>{
    const {pid} = req.params
    const deleteGame = await Game.findByIdAndDelete(pid)
    return res.status(200).json({
        success: deleteGame ? true : false,
        gameData: deleteGame ? deleteGame : 'Cannot delete game'
    })
})

const searchGameByTitle = asyncHandler(async (req, res) => {
  const { query } = req.query; 
  try {
    const games = await Game.find({
      title: { $regex: query, $options: 'i' }, 
    });

    return res.status(200).json({
      gameData:  games 
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
    createGame,
    getGame,
    getGames,
    updateGame,
    deleteGame,
    searchGameByTitle
}