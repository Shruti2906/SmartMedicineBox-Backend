const connection = require("../utils/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/constants");

exports.getUsers = (req, res, next) => {
  res.status(200).json({
    message: "Users",
  });
};

module.exports.registerUser = async (req, res) => {
  const { name, username, password, city, state } = req.body;

  const type = "Single User";

  try {
    // Check if the username already exists
    const [rows] = await (
      await connection
    ).execute("SELECT * FROM `users` WHERE `username` = ?", [username]);

    const existingUsers = rows;

    if (existingUsers.length > 0) {
      return res.status(400).send("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert the new user into the database
    const result = await (
      await connection
    ).execute(
      "INSERT INTO `users` (name,username, password,type,city,state) VALUES (?,?,?,?,?, ?)",
      [name, username, hashedPassword, type, city, state]
    );

    console.log("User registered:", result);
    res.status(200).send("Registration successful");
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).send("Registration failed");
  }
};

module.exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await (
      await connection
    ).execute("SELECT * FROM `users` WHERE `username` = ?", [username]);

    const [dbPassword] = await (
      await connection
    ).execute("SELECT password FROM `users` WHERE `username` = ?", [username]);

    const result = rows;

    console.log(rows);
    console.log(result);
    console.log(dbPassword);
    if (result.length > 0) {
      // Compare the entered password with the hashed password from the database
      const passwordMatch = await bcrypt.compare(
        password,
        dbPassword[0].password
      );
      console.log(passwordMatch);
      if (passwordMatch) {
        // Generate and send a JWT token upon successful login
        console.log(result);
        console.log(result[0]);
        console.log(result[0].userId);
        const token = jwt.sign(
          { userId: result[0].userId, username: result[0].username },
          JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.status(200).json({ token });
      } else {
        console.log("Invalid password");
        res.status(401).send("Invalid password");
      }
    } else {
      console.log("User not found");
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Login failed");
  }
};

module.exports.addMachineCodeOfUser = async (req, res) => {
  const machineCode = req.body.machineCode;
  const userId = req.userId;

  console.log(machineCode);
  console.log(userId);
  try {
    const result = await (
      await connection
    ).execute("update `users` set machineCode = ? where userId = ?", [
      machineCode,
      userId,
    ]);

    console.log("Machine Code Added successfully", result);
    res.status(200).send("Machine Code Added successfully");
  } catch (error) {
    console.error("Error while adding Machine Code : ", error);
    res.status(500).send("Unable to add Machine Code");
  }
};
