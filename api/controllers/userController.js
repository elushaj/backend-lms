import User from "../models/User.js";
 const query ={isStaff:true}
export const updateUser = async (req,res,next)=>{
  try {
   
    const updatedUser = await User.findByIdAndUpdate(query,
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