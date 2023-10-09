const mongoose = require('mongoose'); 
const slugify = require('slugify');

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
        lowercase: true,
        strict: true
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
    image: {
        type: Array
    },
    downloadLinks:
    {
      name: String,
      url: String,
    },
    description:{
        type:String,
        required:true,
    },
    modFeatures:{
        type:String,
    },
    isAPK:{
        type: Boolean,
        required:true,
    },
    isMod:{
        type: Boolean,
        required:true,
    },
    isEditorsChoice:{
        type: Boolean,
        required:true,
    },
    rating:{
        type: Number,
        required:true,
    },
},{
    timestamps: true
});
gameSchema.pre('validate', function(next) {
    this.slug = slugify(this.title, { lower: true });

    this.slug = this.slug.replace(/[':]/g, ''); 

    next();
});
module.exports = mongoose.model('Games', gameSchema);
