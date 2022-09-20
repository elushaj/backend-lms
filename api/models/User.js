import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
  
  fullname: {
    type: String,
    required: true,
    
  },
  surname: {
    type: String,
    required: true,
   
  },
  username: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    
  },
  
  telephone_no:{
    type: Number,
    required: true,
},
address: {
  type: String,
  required: true,
},
photo:{
  type: String,

},
profession: {
  type: String,
 
},
school: {
  type: String,
},
isStaff: {
    type: Boolean,
    default: false
  },

isAdmin: {
  type: Boolean,
  default: false
},
bookIssueInfo: [
  {
    book_info: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issue",
      },
    },
  },
],

joined: { type: Date, default: Date.now() },
violationFlag: { type: Boolean, default: false },
},{timestamps: true});

export default mongoose.model('User',UserSchema)