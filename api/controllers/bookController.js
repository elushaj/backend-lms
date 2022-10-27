import Book from "../models/Book.js";
import { currentUser } from "../utils/verifyToken.js";
export const createBook = async (req, res, next) => {

  // const newBook = new Book(req.body);


  try {

    const bookData={
      title: req.body.title,
      author: req.body.author,
      ISBN: req.body.ISBN,
      desc: req.body.description,
      language: req.body.language,
      published: req.body.published,
      photo: req.body.photo,
      stock: req.body.stock,
      total: req.body.total,
      category: req.body.category,
  
    }
 
    const book = await Book.create(bookData)
   


 
    res.status(200).json({success:true,book});
  } catch (err) {
    next(err);
  }
}

  export const updateBook = async (req, res, next) => {
    const newBook = new Book(req.body);
  
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
      res.status(200).json(updatedBook);
    } catch (err) {
      next(err);
    }
  };
export const deleteBook = async (req, res, next) => {
    
  
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json('Book is deleted successfully');
     
    } catch (err) {
      next(err);
    }
  };


  export const getBook = async (req, res, next) => {
    
  
    try {
      const book = await BookfindById(req.params.id);
      res.status(200).json(book);
    } catch (err) {
      next(err);
    }
  };
  

  export const getAllBooks= async (req, res, next) => {
    
  
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (err) {
      next(err);
    }
  };

  export const getSearchBooks= async (req, res, next) => {
    try{
      const book=await Book.find({
        "$or":[
          {title:{$regex:req.params.key}},
          {author:{$regex:req.params.key}},
          {category:{$regex:req.params.key}},
        ]
      })
      res.status(200).json(book)
    }
    catch (err) {next(err)}
  }


  export const getCountBooks=async (req, res, next) => {
   
    

    try {
      
        const booksCount = await Book.countDocuments();
       
        res.status(200).json(
    booksCount
      
        );
    }   catch (err) {
        next(err);
      }
    }

