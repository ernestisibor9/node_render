const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./routes/userRoute");

// Connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

// deployement config
const path = require("path");
__dirname = path.resolve();

// render depolyment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
}

// Middleware
app.use(express.json());
app.use("/api/users", userRouter);

let PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
