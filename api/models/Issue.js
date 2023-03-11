import mongoose from "mongoose"
import mongooseDateFormat from "mongoose-date-format";
const { Schema } = mongoose;

const IssueSchema = new mongoose.Schema(
    
        {
            book: [{
              type: mongoose.Schema.Types.ObjectId,
              ref:"Book",
              required: true,
            } ] ,
        
       
            returnDate: { type: Date, default: Date.now() + 14 * 24 * 60 * 60 * 1000 },
         isReturned:{
type:Boolean,default:false},
        isRenewed: { type: Boolean, default: false },
        issueDate:{type:Date, default: Date.now()},
            user: [{
              type: mongoose.Schema.Types.ObjectId,
              ref:"User",
              required: true,
            },
        ],
          },{timestamps:true}
);
IssueSchema.plugin(mongooseDateFormat)
export default mongoose.model('Issue',IssueSchema)
