import User from "../models/User.js";
import { createError } from "../utils/error.js";
import Book from "../models/Book.js";
import Issue from "../models/Issue.js";
import Rating from "../models/Rating.js";
export const getMember = async (req,res,next)=>{

  try {

    const users = await User.findById(req.params.id).populate("issue","issueDate returnDate").populate("books","title author ISBN");
    // const user_id = req.user._id;
 
    const user= await User.findById(req.params.id)
    // const userM=user.map(user.issue)
    //   if (userM.issue.returnDate < Date.now()) {
    //     userM.violationFlag = false;
    //     userM.save();
    res.status(200).json(users); 
  } catch (err) {
    next(err);
  }
    }


 
//   if(issues.returnDate<Date.now()){
//     getUser.violationFlag = false;
//     getUser.save();
//     console.log(
//       "warning",
//       "You are flagged for not returning " +
//         issues.book.title +
//         " in time"
//   
  
//  }

  //   if(!users.isStaff){
  //   res.status(200).json(users);}
  //   else{ res.status(200).json('No members found');}
  // } catch (err) {
  //   next(err);
//   // }
// }

// export const isViolated =async (req, res) => {
//   const getUser=await User.findById(req.params.id)
// const issue=await Issue.find({"user._id":req.params.id})
// if(issue.returnDate<Date.now()){
//   issue.user.violationFlag = false;
 
// }
//  res.status(200).json(getUser  )
// }

  export const getMembers=async (req, res, next) => {
        const query ={isStaff:false,isAdmin:false}
        
   
        try {
            const user = await User.find(query).populate("issue","issueDate returnDate").populate("books","title author ISBN");
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


          export const updateMember = async (req, res, next) => {
            const newUser = new User(req.body);
          
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
          };



          export const rateBook = async (req, res, next) => {


            const { user, book, stars } = req.body;
            const newRating = new Rating({ user, book, stars });
            try {
              await newRating.save();
              res.status(200).send('Rating submitted successfully');
            } catch (err) {
              res.status(400).send(err);
            }
          }


   

          export const avgRate=async (req, res) => {
            const { book } = req.query;
            
            try {
              const ratings = await Rating.find({ book }).select('stars');
              if (ratings.length === 0) {
                res.status(404).send({ error: 'No ratings found for this book' });
                return;
              }
              const averageRating = ratings.reduce((acc, cur) => acc + cur.stars, 0) / ratings.length;
              res.status(200).send({ averageRating });
            } catch (err) {
              res.status(400).send(err);
            }
          }
