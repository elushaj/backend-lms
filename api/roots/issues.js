import express from "express";
import { createIssue,returnBook, getIssues, issuePagination,getReturnedIssue, getSearchIssue,deleteIssue, getReturned, checkOverdue, getIssue } from "../controllers/issueController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router= express.Router()

router.post('/newIssue', createIssue)
router.get('/',getIssues)
router.post('/returnBook/:id',returnBook)
router.get('/paginationIssues',issuePagination)
router.get('/searchIssue/:key',getSearchIssue)
router.delete('/:id',verifyAdmin,deleteIssue)
router.get('/returned',getReturned)
router.get('/overDue/:id',checkOverdue)
router.get('/issue/:id',getIssue)
router.get('/returnedissue/:id',getReturnedIssue)
export default router
