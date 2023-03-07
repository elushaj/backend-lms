import express, { request } from "express";
import {  getMembers ,getMember,  getCounter, updateMember, rateBook, avgRate} from "../controllers/memberController.js";
import { verifyToken,verifyUser ,verifyAdmin} from "../utils/verifyToken.js";
const router = express.Router();

router.get('/',verifyAdmin,getMembers)


router.get('/:id',getMember)
router.get('/counter/countType',getCounter)
router.put('/:id',updateMember)
router.post('/ratings',rateBook)
router.get('/ratings/average',avgRate)
export default router