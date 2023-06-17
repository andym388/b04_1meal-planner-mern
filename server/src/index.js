import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

// Declare back-end framework: express to create our API
const app = express();

// Set up Connection String to Database and the Connection Port
dotenv.config();
const connection = process.env.MONGODB_URL;
const port = process.env.PORT || 5001;

// Setup useful middleware: express and cors
app.use(express.json());
app.use(cors());

// Serve static pages from the public directory, it will act as the root directory
app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

// Connect to MongoDB
mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the server and display a message when running
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});