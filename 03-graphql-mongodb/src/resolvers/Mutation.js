const UserModel = require("../model/user.model");
const { hash } = require("bcrypt");
const PostModel = require("../model/post.model");

module.exports = {
   async createUser(parent, args, ctx, info){
       const {name, email, password, age} = args.data;
       try{
           const hashedPassword = await hash(password, 8)
           const newUser = new UserModel({name, email, password : hashedPassword, age})
           const createdUser = await newUser.save()
           return {
               ...createdUser._doc
           }
       }catch(err){
            throw new Error(err)
       }
   },
   async deleteUser(parent, args, ctx, info){
    try{
        const deletedUser = await UserModel.findByIdAndDelete(args.id)
        return deletedUser
    } catch(err){
        throw new Error(err)
    }
   },
   async updateUser(parent, args, ctx, info){
       const {id, data} = args
       try{
           const updatedUser = await UserModel.findByIdAndUpdate(id, {...data}, {new : true})
           return updatedUser;
       }catch(err){
           throw new Error(err)
       }
   },
   async createPost(parent, args, ctx, info){
        try{
            const { title, body, authorId} = args.data;
            // check in DB - user does exist
            const userFound = await UserModel.findOne({id:authorId})
            if(userFound){
                const newPost = new PostModel({title, body, author: authorId})
                await UserModel.findByIdAndUpdate(authorId, {$push : {posts : newPost._doc._id}})
                const createdPost = await newPost.save()
                return createdPost;
            }else{
                throw new Error("Unable to find User")
            }
        }catch(err){
            throw new Error(err)
        }
   }
}
