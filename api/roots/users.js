import express from "express";
import { deleteUser, updateUser,getUser,getAllUsers,getSearchUser } from "../controllers/userController.js";
import { verifyToken,verifyUser ,verifyAdmin} from "../utils/verifyToken.js";
const router = express.Router();



router.get('/checkauthentication',verifyToken ,(req, res,next) => {
    res.send("Welcome")
})

router.get('/checkuser/:id',verifyUser ,(req, res,next) => {
    res.send("You are logged in and you are authorized to delete your account")
})


router.get('/checkadmin/:id',verifyAdmin ,(req, res,next) => {
    res.send("You are logged in as an administrator. You are authorized to delete all accounts")
})

//Update

router.put('/:id',verifyAdmin,updateUser)


    //Delete
    router.delete('/:id',verifyAdmin,deleteUser)

    //Get
    router.get('/:id ',verifyAdmin,getUser)
    
    //Get all 
    router.get('/',verifyAdmin,getAllUsers)
  

router.get("/searchUser/:key",getSearchUser)

export default router