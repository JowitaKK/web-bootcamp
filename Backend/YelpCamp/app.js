var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var seedDB = require("./seeds");
var Comment = require("./models/comment");
var passport = require("passport");
var LocalStrategy = require ("passport-local");
const flash = require("connect-flash");
var User = require ("./models/user");



mongoose.connect("mongodb://localhost/yelpcamp", {useNewUrlParser: true});
seedDB();
app.use(flash());
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+ "/public"));

// console.log(__dirname);




// Campground.create(
//     {
//         name: "Salmon Creek", 
//         image: "https://www.camping.hr/cmsmedia/katalog/724/140-camp-turist-indian-tents.jpg"
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Newly created campground");
//             console.log(campground);
//         }
//     });

// var campground= [
//     {name: "Heya Creek",
//      image:"https://img.freepik.com/free-vector/set-camping-tools-equipment_74855-222.jpg?size=626&ext=jpg" },
//     {name: "Salmon Book",
//      image:"https://www.camp-liza.com/wp-content/uploads/2017/10/20170708_093155_HDR-1.jpg" }
// ]

//PASSPORT CONFIGURATION

app.use(require("express-session")({
    secret: "Jowita You are doing quite well",
    resave: false,
    saveUninitialized: false

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser=req.user;
    next(); //to move to next middleware 
});


app.get("/", function(req, res){
    res.render("landing.ejs");
});


// Index- display list of campgrounds
app.get("/campgrounds", function(req, res){
  
    //get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds:allCampgrounds});
      }
    });  
});

//CREATE - add new campground to DB
app.post("/campgrounds", function (req, res){
    //get data from db and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    //create a new campground and save to DB
   // campgrounds.push(newCampground);
   Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campground page
            res.redirect("/campgrounds"); //redirecting back to campgrounds page
        }
   });
    
});

//NEW- shows form to create a new campground 
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");

});

//SHOW by id
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err || !foundCampground){
            console.log(err);
            req.flash('error', 'Sorry, that campground does not exist!');
            return res.redirect('/campgrounds');
        }
        console.log(foundCampground)
        //render show template with that campground
        res.render("show", {campground: foundCampground});
    });
});

//================`
//cOMMENTS ROUTES
//================

app.get("/compgrounds/:id/comments/new", function(req, res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

app.post("/compgrounds/:id/comments", function(req, res){
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            customElements.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
    
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id);
                }
            });

        }

    });

});


//AUTH ROUTES

//show register form
app.get("/register", function(req, res){
    res.render("register");
});

//handler sign up logic
app.post("/register", function(req, res){
    var newuser = new User ({ username: req.body.username});
    User.register(newuser, req.body.passport, function(err){
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
    }),function(req, res){ 

     }                //!!!!!!!!!!!!!!!
);

app.listen(3007, process.env.IP, function(){
    console.log("yelpCamp has started");
});