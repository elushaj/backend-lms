import mongoose from "mongoose";
const { Schema } = mongoose;

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },
  ISBN: {
  type:Number,
  unique: true,
  required: true,
  },
  description: {
    type: String,
  },
  language: { 
    type: String, 
    required: true 
},
  published: {
    type: Date,
    required: true 
    },
  photo: { 
    type: [String], 
    required: true 
},
  rating: { 
    type: Number, 
    min: 0, 
    max: 10 
},
stock: { 
    type: Number, 
    required: true,
},

category: {
    type: String,
    required: true,
    },

});

export default mongoose.model('Book',BookSchema)
