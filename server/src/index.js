import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

// Declare back-end framework: express to create our API
const app = express();

// Setup the display on launch to test the App
app.get("/", (req, res) => {
  // Display default message onto the index page
  res.send("<h2>NodeJS App launched OK</h2>");
});

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

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("MongoDB Connection successful");
});

// Start the server and display a message when running
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
