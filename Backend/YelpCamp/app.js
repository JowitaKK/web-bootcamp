var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var seedDB = require("./seeds");
var Comment = require("./models/comment");


mongoose.connect("mongodb://localhost/yelpcamp", {useNewUrlParser: true});
seedDB();

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");

Campground.create(
    {
        name: "Salmon Creek", 
        image: "https://www.camping.hr/cmsmedia/katalog/724/140-camp-turist-indian-tents.jpg"
    }, function(err, campground){
        if(err){
            console.log(err);
        } else {
            console.log("Newly created campground");
            console.log(campground);
        }
    });

var campgrounds = [
    {name: "Heya Creek", image:"https://img.freepik.com/free-vector/set-camping-tools-equipment_74855-222.jpg?size=626&ext=jpg" },
    {name: "Salmon Book", image:"https://www.camp-liza.com/wp-content/uploads/2017/10/20170708_093155_HDR-1.jpg" }
]

app.get("/", function(req, res){
    res.render("landing.ejs");
});


// Index- display list of campgrounds
app.get("/campgrounds", function(req, res){
  
    //get all campgrounds from DB
    Camground.find({}, function(arr, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds:campgrounds});
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
   Camground.create(newCampground, function(err, newlyCreated){
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
    Camground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show tamplate with that campground
            res.render("show", {campground: foundCampground});
        }
    });
    
});

//================
//cOMMENTS ROUTES
//================

app.get("/compgrounds?:i/comments/new", function(req, res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});



app.listen(3007, process.env.IP, function(){
    console.log("yelpCamp has started");
});