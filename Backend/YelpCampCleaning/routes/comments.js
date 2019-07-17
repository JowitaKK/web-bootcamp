var express = require("express");
var router = express.Router();
var Campground = require("../models/comment");

//================
//cOMMENTS ROUTES
//================

router.app.get("/compgrounds/:id/comments/new", function(req, res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

router.app.post("/compgrounds/:id/comments", isLoggedIn, function(req, res){
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
