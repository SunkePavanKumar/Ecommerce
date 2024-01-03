import { userModel } from "../Models/userSchema.js";
import bcrypt from "bcrypt";

export async function signUp(req, res) {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    req.body.startTs = new Date().toLocaleDateString();
    const signUpdata = await userModel.find({ email: email }).lean().exec();
    if (signUpdata && signUpdata.length > 0) {
      res.send({
        success: false,
        message: "User Already Exits",
        data: signUpdata[0],
      });
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      req.body.password = hashedPassword;
      req.body.confirmPassword = hashedPassword;
      await userModel.create(req.body);
      const message = {
        success: true,
        message: "posted successfully to the Db",
        data: req.body,
      };
      res.send(message);
    }
  } catch (error) {
    console.log(`Error in signUpController,method : singUp,  Error : ${error}`);
    res.send({
      success: false,
      message: error,
    });
  }
}

export async function login(req, res) {
  console.log(req.body);
  let { email, password } = req.body;
  const userData = await userModel.aggregate([
    {
      $match: { email: email },
    },
  ]);

  console.log(userData);

  if (!bcrypt.compareSync(password, userData[0].password) || !userData) {
    res.send({
      success: false,
      message: "Login Fail",
      data: userData[0],
    });
  } else {
    res.send({
      success: true,
      message: "Loged in successfully",
      data: userData[0],
    });
  }
}
