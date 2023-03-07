import mongoose from "mongoose"
const ratingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
});


export default mongoose.model('Rating',ratingSchema)