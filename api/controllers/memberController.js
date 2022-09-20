import User from "../models/User.js";
import { createError } from "../utils/error.js";

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
  