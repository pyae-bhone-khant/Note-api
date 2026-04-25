import { prisma } from "../../lib/prisma.js";
import { createUser, getUserByEmail, postNotebyData, updateNoteById } from "../service/nodeservice.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const user = await getUserByEmail(email);
    if (user) {
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
            return res.json({ token, user });
        }
    }
};
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email and password are required" });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await createUser(name, email, hash);
    res.status(201).json(user);
};
export const verify = async (req, res) => {
    const id = res.locals.user.id;
    const user = await prisma.user.findFirst({
        where: { id }
    });
    res.json(user);
};
export const getNotes = async (req, res) => {
    const userId = res.locals.user.id;
    const notes = await prisma.note.findMany({
        where: { userId }
    });
    if (!notes) {
        return res.status(404).json({ message: "No notes found" });
    }
    res.status(200).json(notes);
};
export const createNote = async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required" });
    }
    const userId = res.locals.user.id;
    const noteData = {
        title,
        content,
        userId
    };
    const note = await postNotebyData(noteData);
    res.status(201).json(note);
};
export const updateNote = async (req, res) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const { title, content } = req.body;
    if (!id || !title || !content) {
        return res.status(400).json({ message: "ID, title and content are required" });
    }
    const updatedNote = await updateNoteById(id, title, content);
    res.status(200).json({ message: "Note updated successfully", note: updatedNote });
};
export const deleteNote = async (req, res) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    if (!id) {
        return res.status(400).json({ message: "ID is required" });
    }
    try {
        const deletedNote = await prisma.note.delete({
            where: { id: parseInt(id) }
        });
        res.status(200).json({ message: "Note deleted successfully", note: deletedNote });
    }
    catch (error) {
        res.status(404).json({ message: "Note not found" });
    }
};
