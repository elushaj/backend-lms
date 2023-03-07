import Issue from "../models/Issue.js";
import User from "../models/User.js";
import Book from "../models/Book.js";
import Activity from "../models/Activity.js";

export const createIssue = async (req, res, next) => {
  try {
    const issue = new Issue(req.body);
    await issue.save();

    const book = await Book.findById({ _id: issue.book });

    if (book.stock > 0) {
      book.stock -= 1;
      book.issue.push(issue);

      await book.save();
    } else {
      res.status(400).json({ success: false, message: "Stock is empty" });
    }
    const user = await User.findById({ _id: issue.user });
    if(res.headersSent!==true){
    if (user.issue.length < 3) {
      user.issue.push(issue);
await issue.populate("book", "title author ISBN stock")
      await user.save();

      const userBook = await User.findById({ _id: issue.user });
      userBook.books.push(book);
      await userBook.save();
     await issue.populate("user","fullname surname email")

      res.status(200).json({ success: true, data: issue });

      const notification =user.notification
      notification.push(
        
         `Book "${book.title}" "${book.author}" is issued till the date "${issue.returnDate}"`,

      )
// 
    
    } else {
      
      res
        .status(400)
        .json({
          success: false,
          message: "Issued Books has reached the limit",
        });
    }
  } }catch (err) {
    res.status(400).json({ success: false, message: err.message });
 return;
  }
};

export const getIssues = async (req, res, next) => {
  try {
    const issue = await Issue.find().populate('user','fullname surname email issue').populate('book','title author ISBN stock')
    
    res.status(200).json(issue);
  } catch (err) {
    next(err);
  }
};

export const issuePagination = async (req, res) => {
  try {
    let query = Issue.find().populate('user','fullname surname email issue').populate('book','title author ISBN stock');

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * pageSize;
    const total = await Issue.countDocuments();

    const pages = Math.ceil(total / pageSize);

    query = query.skip(skip).limit(pageSize);

    if (page > pages) {
      return res.status(404).json({
        status: "fail",
        message: "No page found",
      });
    }

    const result = await query;

    res.status(200).json({
      status: "success",
      count: result.length,
      page,
      pages,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};



export const deleteIssue = async (req, res, next) => {
  try {
    const issue = await Issue.find()

    await Issue.findByIdAndDelete(req.params.id);
    const book = await Book.find();
 const user = await User.find()
    book.stock += 1;
    delete(user.issue)
    res.status(200).json("Issue is deleted successfully");
  } catch (err) {
    next(err);
  }
};

export const returnBook = async (req, res, next) => {
  try {
    const issue = await Issue.findById(req.params.id);
    const user = await User.findById({ _id: issue.user });

  issue.isReturned==true
 issue.delete(user.issue)
    const book = await Book.findById({ _id: issue.book });
    book.stock += 1;
    if(book.stock>book.total){
        res.status(400).json({ success:false,message:'You have returned more than the total amount of books.' });
    }

    await book.save();
issue.returnDate===Date.now()- 7 * 24 * 60 * 60 * 1000
if(issue.returnDate>=Date.now()){
  user.violationFlag===true
}

    res.status(200).json({ success: true, message: "Book marked as returned" });issue.return==true;
  } catch (err) {
    next(err);
  }
};



export const getSearchIssue = async (req,res,next)=>{
  try {
    
    const searchIssue=await Issue.find({
      "$or":[
        {books:{$regex:req.params.key}},
        {fullname:{$regex:req.params.key}},
    ]
    }
    )
    res.status(200).json(searchIssue)
  }
  catch(err){
    next(err)
  }
  }


  export const getReturned=async (req, res, next) => {
  
    
    try {
   const issue = await Issue.find()

    if(issue.return==true){res.status(200).json(issue);}

        
    }   catch (err) {
        next(err);
      }
    }