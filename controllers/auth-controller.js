const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = (req, res) => {
  try {
    res.status(200).send("Home controller");
  } catch (error) {
    console.log(error);
  }
}

const register = async (req, res) => {
  try {
    // console.log(req.body)

    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "User already exist" });
    }

    // const saltRound = 10;
    // const hashPassword = await bcrypt.hash(password, saltRound);

    // const userCreated = await User.create({
    //   username,
    //   email,
    //   phone,
    //   password: hashPassword
    // });

    const userCreated = await User.create({
      username,
      email,
      phone,
      password
    });

    res.status(201).json({
      msg: "Registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString()
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message || "Internal server error" });
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Email valid or not
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }
    
    // const isMatched = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    res.status(200).json({
      msg: "Login successful",
      token: await userExist.generateToken(),
      userId: userExist._id.toString()
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message || "Internal server error" });
  }
}

module.exports = { home, register, login };