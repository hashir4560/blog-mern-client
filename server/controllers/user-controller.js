import User from "../model/user.js";
export const signupUser = async (req, res) => {
  try {
    const user = req.body;

    const newUser = new User(user);
    await newUser.save();
    return res.status(200).json({ msg: "Signup Successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Error While Signup The User" });
  }
};
