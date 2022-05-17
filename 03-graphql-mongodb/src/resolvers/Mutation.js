const UserModel = require("../model/user.model");

module.exports = {
   async createUser(parent, args, ctx, info){
       const {name, email, password, age} = args.data;
       try{
           const newUser = new UserModel({name, email, password, age})
           const createdUser = await newUser.save()
           return {
               ...createdUser._doc
           }
       }catch(err){
            throw new Error(err)
       }
   }
}
