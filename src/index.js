import dotenv from "dotenv";
import connectDB from "./db/index.js";  // ✅ Added .js extension

dotenv.config({
  path: ".env", 
});

connectDB();
