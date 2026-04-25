import express from "express";
import { createNote, getNotes, updateNote, deleteNote , login , register , verify } from "../controller/nodecontroller.js";
import { auth } from "../middleware/auth.js";


const router = express.Router();

router.get("/notes",  auth , getNotes);
router.post("/notes",  auth, createNote);
router.put("/notes/:id",  auth,  updateNote);
router.delete("/notes/:id", auth ,  deleteNote);
router.post("/login",  login);
router.post("/register",  register);
router.get("/verify" ,  auth , verify);

export default router;