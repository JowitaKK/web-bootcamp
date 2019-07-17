var mongoose = reguire("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);// !!!!!!!!!this name needs to match

//User= email, name

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts:[postSchema]

});

var User = mongoose.model("User", userSchema);// !!!!!!!!!!!

newUser.posts.push({
    title:"How to break my nose",
    content: "Just kidding"

});

var newUser = new userSchema({
    email: "jow@gmail.com",
    name: "Jowi"

});

newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }

});

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var newPost = new Post({   // with this - any name match 
    title: "Reflection",
    content: "They are great"
});

newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }

});

// or retriev user + adding new post 

// User.findOne({name: "Jow"}, function(err, user){
//     if(err) {
//         console.log(err)
//     } else {
//         user.posts.push({
//             title: "3 things I dont like",
//             content: "Valdemore, Cold, Peas"
//         }); 
//         user.save(function(err, user){
//             if(err){
//             console.log(err);
//             } else {
//                 console.log(user);
//             }   

//         });
//     }
//});

