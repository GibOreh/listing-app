const mongoose = require('mongoose'); 
const slugify = require('slugify');

var articleSchema = new mongoose.Schema({
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
    description:{
        type:String,
        required:true,
    },
    image: {
        type: Array
    },
},{
    timestamps: true
});
articleSchema.pre('validate', function(next) {
    this.slug = slugify(this.title, { lower: true });

    this.slug = this.slug.replace(/[':&]/g, ''); 

    next();
});
module.exports = mongoose.model('Articles', articleSchema);
