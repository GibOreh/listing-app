const mongoose = require('mongoose'); 
const slugify = require('slugify');

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
        lowercase: true,
        strict: true
    },

    category:{
        type: String,
        enum: [
            'Vehicles', 
            'Entertainment', 
            'Education', 
            'Emulator', 
            'Photography', 
            'Communication', 
            'Personalization', 
            'Music and Sound', 
            'Video Players and Edittors', 
            'Productivity', 
            'Automobiles and Vehicles', 
            'Art and Design', 
            'Travel and Local', 
            'Social', 
            'Life Styles', 
            'Other', 
            'New Genre'],
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
appSchema.pre('validate', function(next) {
    this.slug = slugify(this.title, { lower: true });

    this.slug = this.slug.replace(/[':]/g, ''); 

    next();
});
module.exports = mongoose.model('Apps', appSchema);

