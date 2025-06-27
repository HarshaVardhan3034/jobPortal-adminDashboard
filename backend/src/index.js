import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './utils/db.js';
import routes from './routes/jobs.routes.js'
import path from "path";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();
app.use(cors());
app.use(express.json());
app.use("/api",routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
    connectDB();
});