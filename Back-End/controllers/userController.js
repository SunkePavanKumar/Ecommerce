import { userModel } from "../Models/userSchema.js";

export async function signUp(req, res) {
  try {
    console.log(req.body);
    req.body.startTs = new Date().toLocaleDateString();
    const signUpdata = await userModel
      .find({ email: req.body.email })
      .lean()
      .exec();
    if (signUpdata && signUpdata.length > 0) {
      res.send({
        success: false,
        message: "User Already Exits",
        data: signUpdata[0],
      });
    } else {
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
  const userData = await userModel.aggregate([
    {
      $match: { email: req.body.email, password: req.body.password },
    },
  ]);
  console.log(userData);
  if (userData.length > 0) {
    res.send({
      success: true,
      message: "Loged in successfully",
      data: userData[0],
    });
  } else {
    res.send({
      success: false,
      message: "Login Fail",
      data: userData[0],
    });
  }
}
