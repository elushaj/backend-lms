import Book from "../models/Book.js";

export const createBook = async (req, res, next) => {
  const newBook = new Book(req.body);

  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    next(err);
  }
};


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



  // exports.findBooks = async (req, res, next) => {
  //   const filter=req.body.filter;
  //   const value=req.body.searchName

  //   if(value=="")
  //   req.flash("error", "Search field is empty. Please fill the search field in order to get a result");
  //   return res.redirect('back');
  // }
  // const searchObj = {};
  // searchObj[filter] = value;

  // try{
  //   const books=await Book.find(searchObj)

  //  res.render("books",{books:books,filter:filter,value:value,user:req.user})
  // }
  // catch(err){
  //   next(err)
  // }
