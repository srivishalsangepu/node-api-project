import mongoose from "mongoose";
import { UserSchema } from "../models/testModel";

const User = mongoose.model("users", UserSchema);

export const addNewUser = async (req, res) => {
  let newUser = new User(req.body);

  const user = await newUser.save({user});
    res.json(user);
};

export const getUser = async (req,res)=>{
  const user = await User.find({});
   res.json(user);
};

export const getUserById = async (req,res)=>{
  const user = await User.findById(req.params.id);
  res.json(user);
};

export const updateUser = async (req,res)=>{
  const user = await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
  res.json(user);
};

export const deleteUser = async (req,res)=>{
  const user = await User.deleteOne({_id:req.params.id});
  res.json(user);
}
