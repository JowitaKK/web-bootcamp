var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Clouds",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFoEwoMopNpozX8pzX5PdzyA4RlSYTHbDSO5FaRUPERjj9x8Y",
        description: " Pikeny teren",
        comments: []
    },
    {
        name: "Przemkow",
        image: "https://c1.hiqcdn.com/customcdn/500x500/blog/sites/default/files/camping-te.jpg",
        description: " Pikeny teren",
        comments: []
    },
    {
        name: "Caninss",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wOVtld5L8I8QW2_tK16V6jyomt5v1vkTEuMGv4qbScEuquRE",
        description: " Pikeny teren",
        comments: []
    }
]

function seedDB() {
    //remove all campgrounds
    Campground.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds");
    });

    //add a few campgrounds
    data.forEach(function (seed) {
        Campground.create(seed, function (err, campground) {
            if (err) {
                console.log(err)
            } else {
                console.log("added a campground", campground);
                //create a comment
                Comment.create(
                    {
                        text: "This was great but no internet",
                        author: "Jov"
                    }, function (err, comment) {
                        if (err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Create new comments");
                        }
                    });
            }
        });
    });


}
module.exports = seedDB;