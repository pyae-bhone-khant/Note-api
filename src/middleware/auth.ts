import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function auth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    } 
    try {
		const user = jwt.verify(token, process.env.JWT_SECRET as string) as {
			id: number;
		};

        res.locals.user = user;
        return next();
	} catch (e) {
		return res.status(401).json({ msg: "invalid token" });
	}
}