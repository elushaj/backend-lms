import mongoose from "mongoose";

const { Schema } = mongoose;

const IssueSchema = new mongoose.Schema(
    
        {
            book: [{
              type: mongoose.Schema.Types.ObjectId,
              ref:"Book",
              required: true,
            } ] ,
        
        return:{
type:Boolean,default:false
        },
            returnDate: { type: Date, default: Date.now() + 7 * 24 * 60 * 60 * 1000 },
        
            isRenewed: { type: Boolean, default: false },
        
            user: [{
              type: mongoose.Schema.Types.ObjectId,
              ref:"User",
              required: true,
            },
        ],
          },{timestamps:true}
);

export default mongoose.model('Issue',IssueSchema)
