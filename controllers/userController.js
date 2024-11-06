import User from '../models/User.js';

export const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Admin",
    });

    const savedUser = await user.save();

    res.status(201).json({user:savedUser, message: "Admin created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const createAlumni = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Alumni",
    });

    const savedUser = await user.save();

    res.status(201).json({user:savedUser, message: "Alumni created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const createStudent = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Student",
    });

    const savedUser = await user.save();

    res.status(201).json({user:savedUser, message: "Student created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); //task to find one
    res.json({
      users,
    });
  } catch (error) {
    return res.status(400).json({
      error: "error while fetching post",
    });
  }
};
