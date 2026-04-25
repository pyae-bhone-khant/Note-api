import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import nodeRouter from "./route/note.js"
import  type { Request, Response, NextFunction } from "express";
// import { connect } from "node:http2";
// import { connectDB } from "./config/db.js";

// Load environment variables
dotenv.config();

const PORT = 5001;
const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// connectDB()

app.use('/api' , nodeRouter)
// Global error handler
app.use((err : any, req : Request, res : Response, next : NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  });
});
 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map

// HnIRIrE6V9SPjzj0 
// mongodb+srv://nextgen234345_db_user:HnIRIrE6V9SPjzj0@cluster0.2x4lumo.mongodb.net/?appName=Cluster0