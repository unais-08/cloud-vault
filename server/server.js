import express from "express";
import { authRouter } from "./routes/index.js";
import { connectDB } from "./config/index.js";
import { configureMiddlewares, errorHandler } from "./middlewares/index.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();
configureMiddlewares(app);
connectDB();

app.use("/api/auth", authRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
