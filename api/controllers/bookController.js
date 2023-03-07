import Book from "../models/Book.js";
import { currentUser } from "../utils/verifyToken.js";
export const createBook = async (req, res, next) => {
  // const newBook = new Book(req.body);

  try {
    const bookData = {
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
    };

    const book = await Book.create(bookData);

    return res
      .status(200)
      .json({success:true,  book, message: "Data Added Successfully" });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};

      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
shum 
      console.log(errors)
      return res.status(401).send(errors);

    }
    else if(Object.keys(error)===null){
      return res.status(401).send({message:"Please fill the required fields"});
    }


  }
};
export const updateBook = async (req, res, next) => {
  const newBook = new Book(req.body);

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    next(err);
  }
};
export const deleteBook = async (req, res, next) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json("Book is deleted successfully");
  } catch (err) {
    next(err);
  }
};

export const getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

export const getSearchBooks = async (req, res, next) => {
  try {
    const book = await Book.find({
      $or: [
        { title: { $regex: req.params.key } },
        { author: { $regex: req.params.key } },
        { category: { $regex: req.params.key } },
      ],
    });
    res.status(200).json(book);
//     const { q } = req.query;
// const book = await Book.find()
//     const keys = ["title", "author", "category"];
//     let query = Book.find();

//     const page = parseInt(req.query.page) || 1;
//     const pageSize = parseInt(req.query.limit) || 8;
//     const skip = (page - 1) * pageSize;
//     const total = await Book.countDocuments();

//     const pages = Math.ceil(total / pageSize);

//     query = query.skip(skip).limit(pageSize);

    // if (page > pages) {
    //   return res.status(404).json({
    //     status: "fail",
    //     message: "No page found",
    //   });
    // }

    // const result = await query;

    // const search = (data) => {
    //   return data.filter((item) =>
    //     keys.some((key) => item[key].toLowerCase().includes(q))
    //   );
    // };
  
    // q ? res.json(search(book)) : res.status(200).json({
    //   status: "success",
    //   count: result.length,
    //   page,
    //   pages,
    //   data: result,
    // })
   } catch (err) {
    next(err);
  }
};

export const getCountBooks = async (req, res, next) => {
  try {
    const booksCount = await Book.countDocuments();

    res.status(200).json(booksCount);
  } catch (err) {
    next(err);
  }
};

export const bookPagination = async (req, res) => {
  try {
    
    let query = Book.find();

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * pageSize;
    const total = await Book.countDocuments();

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

// export const bookPagination = async (req, res, next) => {
//   try {
//     const PAGE_SIZE = 6;
//     const page = parseInt(req.query.page || "0");
//     const total = await Book.countDocuments();

//     const books = await Book.find()
//       .limit(PAGE_SIZE)
//       .skip(PAGE_SIZE * page);
//     const totalPages = Math.ceil(total / PAGE_SIZE);
//     res.status(200).json([totalPages, books]);
//   } catch (err) {
//     next(err);
//   }
// };
