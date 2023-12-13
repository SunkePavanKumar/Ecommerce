import mongoose from "mongoose";

const { Schema } = mongoose;

const signupSchema = new Schema({
  image: { type: String, required: true },
  fullName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  StartTs: Date,
  endTs: Date,
});

export const userModel = mongoose.model("signUp", signupSchema);
