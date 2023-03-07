import express from "express";
import { createIssue,returnBook, getIssues, issuePagination, getSearchIssue,deleteIssue, getReturned } from "../controllers/issueController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router= express.Router()

//Create a new issue

router.post('/newIssue', createIssue)
router.get('/', verifyAdmin,getIssues)
router.post('/returnBook/:id',returnBook)
router.get('/paginationIssues',issuePagination)
router.get('/searchIssue/:key',getSearchIssue)
router.delete('/:id',deleteIssue)
router.get('/returned',getReturned)
export default router