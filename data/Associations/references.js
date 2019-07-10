var mongoose = reguire("mongoose");
mongoose.connect("mongode://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");

// //POST - title, content  move it to models/post.js
// var postSchema = new mongoose.Schema({
//     title: String,
//     content: String
// });

// var Post = mongoose.model("Post", postSchema);// !!!!!!!!!this name needs to match

//User= email, name



//Moving to models/user.js

// var User = mongoose.model("User", userSchema);// !!!!!!!!!!!

Post.create({
    title: "How to cook chicken",
    content: "grill it the best option"

}, function(err, post){
    User.findOne({email: "Jow@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log (data);
                }

            });
        }

    });
});
