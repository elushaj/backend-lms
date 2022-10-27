import User from "../models/User.js";
import { createError } from "../utils/error.js";
import Book from "../models/Book.js";
import Issue from "../models/Issue.js";
export const getMember = async (req,res,next)=>{

  try {
    
    const user = await User.findById(req.params.id);
    if(!user.isStaff){
    res.status(200).json(user);}
    else{ res.status(200).json('No members found');}
  } catch (err) {
    next(err);
  }
}



  export const getMembers=async (req, res, next) => {
        const query ={isStaff:false,isAdmin:false}
        
   
        try {
            const user = await User.find(query);
            res.status(200).json(user);
        }   catch (err) {
            next(err);
          }
        }
  


        export const getCounter=async (req, res, next) => {
          const query ={isStaff:false,isAdmin:false}
          
     
          try {
            
              const userCount = await User.countDocuments(query);
              const bookCount = await Book.countDocuments();
              const issueCount = await Issue.countDocuments();
              res.status(200).json([
            userCount,bookCount,issueCount
            
            ]  );
          }   catch (err) {
              next(err);
            }
          }