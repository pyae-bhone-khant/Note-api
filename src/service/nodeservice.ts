import { prisma } from "../../lib/prisma.js";

 export const postNotebyData = async (noteData: any) => {
    const notes = await prisma.note.create({
        data: noteData
    });
    return notes;
};

export const updateNoteById = async (id : any , title : string , content : string) => {
    const updatedNote = await prisma.note.update({
        where: { id: parseInt(id) },
        data: { title, content }
    });
    return updatedNote;
}

export const getUserByEmail = async (email: string) => {
 return await prisma.user.findFirst({
        where: { email }
    });
}

export const createUser = async (name: string, email: string, password: string) => {
 return await prisma.user.create({
        data: { name, email, password }
    });
}
