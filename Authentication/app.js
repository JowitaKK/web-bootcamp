var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    User = require("./models/user");

mongoose.connect("mongodb://localhost/secret_aut_app", { useNewUrlParser: true });
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); // needed for a sign up username and body

app.use(require("express-session")({   //!!!!!!!!!!!!!!!!!!!!!!!!!!
    secret: "Antos is the best in the world", //can choose any sentence 
    resave: false,  
     saveUninitialized: false
}));

app.use(passport.initialize());//!!!!!!!!!!!!!!!!!!!!!!!!
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); //!!!!!!!!!!!!!!!!!!!!!!!!
passport.deserializeUser(User.deserializeUser());//!!!!!!!!!!!!!!!!!!!!

//==========
//ROUTES
//==========

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/secret", isLoggedIn, function (req, res) {//!!!!!!!!!!!!!!!!!
    console.log('/secret')
    res.render("secret");
});

//Auth Routes
app.get("/register", function (req, res) {
    res.render("register");
});

//handle user sing up   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.post("/register", function (req, res) {
    User.register(new User({ username: req.body.username}), req.body.password, function (err, user) {
        if (err) {
            console.log('error creating user', err);
            return res.render("register");
        } 
        passport.authenticate("local")(req, res, function(){
            console.log('succesfully auth user');
            res.redirect("/secret")
        });
    });
});


//LOGIN ROUTES
app.get("/login", function (req, res) {
    res.render("login");
});

//login logic
//middleware
app.post("/login", passport.authenticate("local", {  //checkes credentials to allow to login
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){

});

//logout
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {//to check if he is logged in to let to see secret
    console.log("check if user is authenticated");
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.listen(3008, process.env.IP, function () {//(process.evn.PORT)
    console.log("Server started...");
});