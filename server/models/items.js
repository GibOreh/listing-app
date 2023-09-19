const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var itemSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'GameCategories'
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
module.exports = mongoose.model('Items', itemSchema);