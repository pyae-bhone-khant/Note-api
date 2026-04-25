import express from "express";
const PORT = 5001;
const app = express();
app.get("/api/notes", (req, res) => {
    res.status(200).json({ message: "You have 5 notes" });
});
app.post("/api/notes", (req, res) => {
    res.status(201).json({ message: "Note created" });
});
app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({ message: "Note updated" });
});
app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({ message: "Note deleted" });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
