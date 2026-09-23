import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/Contact.js";
dotenv.config();
const app = express();
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
