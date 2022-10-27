import express, { request } from "express";
import {  getMembers ,getMember,  getCounter} from "../controllers/memberController.js";
import { verifyToken,verifyUser ,verifyAdmin,verifyStaff} from "../utils/verifyToken.js";
const router = express.Router();

router.get('/',verifyStaff,getMembers)


router.get('/:id',verifyStaff,getMember)
router.get('/counter/countType',getCounter)


export default router