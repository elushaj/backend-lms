import User from "../models/User.js";
import Issue from "../models/Issue.js";
export const updateUser = async (req,res,next)=>{
  try {
   
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}
export const deleteUser = async (req,res,next)=>{
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getUser = async (req,res,next)=>{
  try {
    const user = await User.findById(query,req.params.id);
    if(user.isStaff){res.status(200).json(user);}
    else{res.status(404).json("No user found");}
    const issue=await Issue.find(_id=user.issue)
    if(issue.returnDate>=Date.now()){
user.notifcation.push({
  message:`Please return the issued book `
})
    }
  } catch (err) {
    next(err);
  }
}
export const getAllUsers = async (req,res,next)=>{
  try {
    const users = await User.find(query);
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}


export const getSearchUser = async (req,res,next)=>{
try {
  
  const searchUser=await User.find({
    "$or":[
      {fullname:{$regex:req.params.key}},
      {surname:{$regex:req.params.key}},
      {username:{$regex:req.params.key}},
      {email:{$regex:req.params.key}},
    ]
  }
  )
  res.status(200).json(searchUser)
}
catch(err){
  next(err)
}
}