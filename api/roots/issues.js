import express from "express";
import { createIssue,returnBook, getIssues } from "../controllers/issueController.js";
import { verifyStaff } from "../utils/verifyToken.js";
const router= express.Router()

//Create a new issue

router.post('/', createIssue)
router.get('/getIssues', verifyStaff,getIssues)
router.post('/returnBook/:id',returnBook)

export default router