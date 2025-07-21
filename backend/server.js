const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      "http://localhost:4000", // for local frontend
      "https://my-portfolio-one-cyan-47.vercel.app/" // replace with actual Vercel frontend URL
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//Routes
const contactRoutes = require("./routes/ContactRoutes");
app.use("/api", contactRoutes);

//connect to MongoDB
connectDB();

//Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
