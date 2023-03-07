import express from "express";
import { createBook, deleteBook, updateBook,getBook,getAllBooks,getSearchBooks, bookPagination} from "../controllers/bookController.js";
import { verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();


//Create

router.post('/createBook',verifyAdmin,createBook)


//Update

router.put('/:id',updateBook)


    //Delete
    router.delete('/:id',verifyAdmin,deleteBook)

    //Get
    router.get('/:id',getBook)

    //Get all 
    router.get('/allBooks/all',getAllBooks)

   router.get('/searchBooks/:key',getSearchBooks)

  router.get('/',bookPagination)

export default router