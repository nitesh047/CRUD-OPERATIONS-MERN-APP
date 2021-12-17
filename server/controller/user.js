import postUser from "../model/user.js";

 

 export const getUsers = async (req,res) =>{
    try {
      const users = await postUser.find();
        res.status(201).json(users);
    } catch (error) {
        console.log(error);
    }
  } 

  export const addUser =async (req,res) =>{
      const user = req.body;
      const newUser = new postUser(user);

      try {
          await newUser.save();
          
          res.status(201).json(newUser);
      } catch (error) {
          console.log(error);
      }
    }

 export const getUserById = async (req,res) =>{
     try {
         const user = await  postUser.findById(req.params.id);
         res.status(200).json(user);
     } catch (error) {
         res.json(error);
     }
 }

 export const updateUser = async (req,res) =>{
     let user = await postUser.findById(req.params.id);
     user = req.body;
     const editUser =new postUser(user);
     try {
         await postUser.updateOne({_id:req.params.id},editUser);
         res.status(201).json(editUser);
     } catch (error) {
         res.json(error);
     }
 }

 export const deleteUser = async (req,res) =>{
     try {
        await postUser.deleteOne({_id:req.params.id});
        res.json("User Deleted Successfully");
     } catch (error) {
         res.json(error);
     }
     
 }