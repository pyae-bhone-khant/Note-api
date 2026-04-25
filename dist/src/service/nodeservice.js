import { prisma } from "../../lib/prisma.js";
export const postNotebyData = async (noteData) => {
    const notes = await prisma.note.create({
        data: noteData
    });
    return notes;
};
export const updateNoteById = async (id, title, content) => {
    const updatedNote = await prisma.note.update({
        where: { id: parseInt(id) },
        data: { title, content }
    });
    return updatedNote;
};
export const getUserByEmail = async (email) => {
    return await prisma.user.findFirst({
        where: { email }
    });
};
export const createUser = async (name, email, password) => {
    return await prisma.user.create({
        data: { name, email, password }
    });
};
