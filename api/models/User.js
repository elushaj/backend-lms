import mongoose from "mongoose";
import mongooseDateFormat from "mongoose-date-format";

import uniqueValidator from"mongoose-unique-validator";
const UserSchema = new mongoose.Schema({
  
  fullname: {
    type: String,
    required:[ true,"Name is required"],
    
  },
  surname: {
    type: String,
    required:[ true,"Surname is required"],
   
  },
  username: {
    type: String,
    required:[ true,"Username is required"],
    unique: true,

  },

  email: {
    type: String,
    required:[ true,"Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required:[ true,"Password is required"],
    
  },
  
  telephone_no:{
    type: Number,
    required:[ true,"Telephone number is required"],
},
address: {
  type: String,
  required:[ true,"Address is required"],
},
photo:{
  type: [String],

},
profession: {
  type: String,
 default: "",
},
school: {
  type: String,
  default:""
},


isAdmin: {
  type: Boolean,
  default: false
},

issue: [
  {

        type: mongoose.Schema.Types.ObjectId,
        ref: "Issue",
      },
    
  
],
books:[
  {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Book"
  }
],
notification: {
  type: Array,
  default:""
},
seennotification: {
  type: Array,
  default: [],
},

joined: { type: Date, default: Date.now() },
violationFlag: { type: Boolean, default: false },
},{timestamps: true});
UserSchema.plugin(mongooseDateFormat)
UserSchema.plugin(uniqueValidator)
export default mongoose.model('User',UserSchema)