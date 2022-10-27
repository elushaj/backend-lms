import express from "express";
import { createBook, deleteBook, updateBook,getBook,getAllBooks,getSearchBooks} from "../controllers/bookController.js";
import { verifyAdmin, verifyStaff} from "../utils/verifyToken.js";

const router = express.Router();


//Create

router.post('/',verifyStaff,createBook)


//Update

router.put('/:id',verifyStaff,updateBook)


    //Delete
    router.delete('/:id',verifyStaff,deleteBook)

    //Get
    router.get('getBook/:id',getBook)

    //Get all 
    router.get('/',getAllBooks)

   router.get('/searchBooks/:key',getSearchBooks)

  
export default router