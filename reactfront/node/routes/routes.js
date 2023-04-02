import express from "express";
import { createBlog, deleteBlog, getAllblogs, getBlog, updateBlog } from "../controllers/Blogcontroller.js";

const router = express.Router()

router.get('/', getAllblogs)
router.get('/:id', getBlog)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)

export default router