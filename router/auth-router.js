const express = require("express");
// const { home, register } = require("../controllers/auth-controller");
const authController = require("../controllers/auth-controller");
const router = express.Router();

// router.get("/", (req, res) =>{
//   res.status(200).send("Hello world with express router");
// });

// router.route("/").get((req, res) =>{
//   res.status(200).send("Hello world with express router");
// });

router.route("/").get(authController.home);
router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

module.exports = router;