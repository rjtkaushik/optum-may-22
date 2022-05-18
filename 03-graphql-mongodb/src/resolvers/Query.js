const UserModel = require("../model/user.model");
const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
   async users(parent, args, ctx, info){
      try{
         const allUsers = await UserModel.find()
         const duplicateUser = allUsers.map(user => {
            return {...user._doc, password : null}
         })
         return duplicateUser;
      }catch(err){
         throw new Error(err)
      }
   },
   async login(parent, args, ctx, info){
      try{
         const {email, password} = args.data;
         const foundUser = await UserModel.findOne({email})
         if(foundUser){
            const isPasswordMatch = await compare(password, foundUser.password)
            if(isPasswordMatch){
               // Authenicated User
               const token = sign({id: foundUser._doc._id}, "SECRET_KEY")
               return {
                  token : token,
                  user: foundUser
               };
            }else{
               throw new Error("Bad Credentials")
            }
         }else{
            throw new Error("Unable to find user")
         }
      }catch(err){
         throw new Error(err)
      }
   }


}