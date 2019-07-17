var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var seedDB = require("./seeds");
var Comment = require("./models/comment");
var passport = require("passport");
var LocalStrategy = require ("passport-local");
var User = require ("./models/user");

var commentRoutes = require("./routes/comments");
var campgroundsRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");



mongoose.connect("mongodb://localhost/yelpcamp", {useNewUrlParser: true});
seedDB();
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+ "/public"));

// console.log(__dirname);

//PASSPORT CONFIGURATION

app.use(require("express-session")({
    secret: "Jowita You are doing quite well",
    resave: false,
    saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.autherticate()));
passport.serializeUser(User.serializeUse());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser=req.user;
    next(); //to move to next middleware 
});

app.use(indexRoutes);
app,use(campgroundsRoutes);
app.use(commentRoutes);

app.listen(3007, process.env.IP, function(){
    console.log("yelpCamp has started");
});