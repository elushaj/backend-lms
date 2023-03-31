import express from "express";
import { createBook, deleteBook, updateBook,getBook,getAllBooks
  ,getSearchBooks, bookPagination} from "../controllers/bookController.js";
import { verifyAdmin} from "../utils/verifyToken.js";
const router = express.Router();

//Create
router.post('/createBook',verifyAdmin,createBook)

//Update
router.put('/:id',verifyAdmin,updateBook)

//Delete
router.delete('/:id',verifyAdmin,deleteBook)

//Get
router.get('/:id',getBook)

//Get all 
router.get('/allBooks/all',getAllBooks)

//Search books
router.get('/searchBooks/:key',getSearchBooks)

//Book pagination
router.get('/',bookPagination)

export default router