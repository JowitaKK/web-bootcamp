var express = require("express");
var router = express.Router();
//AUTH ROUTES

//show register form
app.get("/register", function(req, res){
    res.render("register");
});

//handler sign up logic
app.post("/register", function(req, res){
    var newuser = new User ({ username: req.body.username});
    User.register(newUser, req.body.passport, function(err, user){
        if(err){
            console.log(err);
            return res.render("register")
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/campgrounds");
        });
    });
});

//show login form
app.get("/login", function(req, res){
    res.render("login");
});
//handling login logic
app.post("/login", passport.authenticate("local", 
    {
         successRedirect: "/campgrounds",   //!!!!!!!!!!!!! here user exist already thanks to registration
         failureRedirect: "/logic"          //!!!!!!!!!!!!
    }),function(req, res){                  //!!!!!!!!!!!!!!!
});