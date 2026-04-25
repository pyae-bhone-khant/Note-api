import jwt from "jsonwebtoken";
export function auth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        res.locals.user = user;
        return next();
    }
    catch (e) {
        return res.status(401).json({ msg: "invalid token" });
    }
}
