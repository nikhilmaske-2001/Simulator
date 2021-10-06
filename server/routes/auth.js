const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
  try {
    // Generate new Hashed Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save user in db
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    // Verifying email
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    // Verifying password
    const vaildPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !vaildPassword && res.status(400).json("Wrong Password");
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
