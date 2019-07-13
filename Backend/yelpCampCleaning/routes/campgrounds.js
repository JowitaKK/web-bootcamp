var express = require("express");
var router = express.Router();

// INDEX- display list of campgrounds
router.app.get("/campgrounds", function(req, res){
  
    //get all campgrounds from DB
    Camground.find({}, function(arr, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds:alCampgrounds});
      }
    });  
});

//CREATE - add new campground to DB
router.app.post("/campgrounds", function (req, res){
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
router.app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");

});

//SHOW by id
router.app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show tamplate with that campground
            res.render("show", {campground: foundCampground});
        }
    });
    
});

module.export = router;