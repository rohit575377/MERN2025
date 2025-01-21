require("dotenv").config();
const express = require("express");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).send("Hello World!");
// });

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
  });
})

