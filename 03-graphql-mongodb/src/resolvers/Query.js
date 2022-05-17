const UserModel = require("../model/user.model");

module.exports = {
   async users(parent, args, ctx, info){
      try{
         const allUsers = await UserModel.find()
         return allUsers;
      }catch(err){
         throw new Error(err)
      }
   }
}