var express = require("express");
var app = express();
var mongoose = require ("mongoose");
var bodyParser = require ("body-parser");
var methodOverride = require("method-override");
var expressSanitizer = require("express-sanitizer");


//app config
mongoose.connect("mongodb://localhost/restful_blog_app",{ useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));  // to edit and update 
app.use(expressSanitizer()); //to prevent dangerouse inputs by users

//Mongoose/model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {                          // remember past simple 
        type: Date, default: Date.now
    }
});
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GVbuGByFE_5IaG9WIbVVWrwNDE4LjHCcOHg_leNtmVFywFfq",
//     body: "Hello this is a blog"
// });

//Restful routes

app.get("/", function(req, res){
    res.redirect("/blogs");

});

//Index Route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err,blogs){
        if(err){
            console.log("Error");
        } else {
            res.render("index", {blogs:blogs});
        }
    });
});

//New route
app.get("/blogs/new", function(req,res){
    res.render("new");
});

//Create Route
app.post("/blogs", function(req, res){
    //create blog
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new"); //if error again new for of blog
        }else {
            res.redirect("/blogs");
        }
    });
});

//Show rout
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

//Edit route
app.get("/blogs/:id/edit", function (req, res){
    Blog.findById(req.params.id, function (err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", foundBlog);
        }
    });
});

//Update route
app.put("/blogs/:id", function (req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){//id, newData, callback
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//Delete route
app.delete("/blogs/:id", function(req, res){
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
        res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });

    //redirect somwhere
});

app.listen(3007, process.env.IP, function(){
    console.log("Server is running");
});
 

  
  
  
  
  
  
