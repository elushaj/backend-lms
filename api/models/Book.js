import mongoose from "mongoose";
import uniqueValidator from"mongoose-unique-validator";
import mongooseDateFormat from "mongoose-date-format";
const { Schema } = mongoose;

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
   
  },

  author: {
    type: String,
    required: [true, "Author is required."],
    validate: {
      validator: function (author) {
        return /^[a-zA-Z]+$/.test(author);
      },
      message: "Author field only alphabetic characters allowed",
    },
  },
  ISBN: {
    type: Number,
  unique: true,
  required: [true, "ISBN Number is required"],
  validate: [
    {
      validator: function (ISBN) {
        return ISBN.toString().length === 10||13;
      },
      message: (idNumber) =>
        `ISBN Number Must Have 10 to 13 Numbers. You entered ${
          ISBN.value
        }, which is ${ISBN.value.toString().length} numbers long.`,
    },
    {
      validator: function (ISBN) {
        return !isNaN(parseFloat(ISBN)) && isFinite(ISBN);
      },
      message: (ISBN) =>
        `ISBN Number Can Only Contain Number Values. You entered ${ISBN.value}.`,
    },
  ],
  },
  description: {
    type: String,
  },
  language: {
    type: String,
    required: true,
  },
  published: {
    type: Date,
    required: true,
  },
  photo: {
    type: [String],
 
  },
  rating: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rating",
  },

  stock: {
    type: Number,
required:true  },
  
  total:{
    type: Number,
    required: true
  },
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],

  category: {
    type: String,
    required: true,
  },
  issue: [{
    type: mongoose.Schema.ObjectId,
    ref: "Issue",
  }],
});
BookSchema.plugin(mongooseDateFormat)
BookSchema.plugin(uniqueValidator, { message: "ISBN Number Already Exists" });

export default mongoose.model("Book", BookSchema);
