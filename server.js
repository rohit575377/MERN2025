require("dotenv").config();
const express = require("express");
const router = require("./router/auth-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).send("Hello World!");
// });

app.use("/api/auth", router);

app.use(errorMiddleware);

const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
  });
})

