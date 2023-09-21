const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var gameSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim: true
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase: true
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type: String,
        enum: [
            'Action', 
            'Arcade', 
            'Shooting', 
            'Idle', 
            'Puzzle', 
            'Educational', 
            'Card Games', 
            'Classic Games', 
            'Horror', 
            'Survival Games', 
            'Adventure Games', 
            'Table Games', 
            'MOBA', 
            'Music Games', 
            'NSFW Games', 
            'RPG Games', 
            'Simulation Games', 
            'Sports', 
            'Strategy Games', 
            'Racing Games', 
            'New Genre',
            'Other'],
    },
    platform:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    version:{
        type:String,
        required:true,
    },
    releaseDate:{
        type:String,
        required:true,
    },
    image: {
        type: Array
    },
    downloadLinks:
    {
      name: String,
      url: String,
    },
   
    
},{
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Games', gameSchema);