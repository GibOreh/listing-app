const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var appSchema = new mongoose.Schema({
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
    modFeatures:{
        type:String,
    },
    category:{
        type: String,
        enum: [
            'Vehicles', 
            'Entertainment', 
            'Education', 
            'Emulator', 
            'Photography', 'Communication', 'Personalization', 'Music and Sound', 'Video Players and Edittors', 'Productivity', 'Automobiles and Vehicles', 'Art and Design', 'Travel and Local', 'Social', 'Life Styles', 'Other', 'New Genre'],
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
module.exports = mongoose.model('Apps', appSchema);