var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Tony", "jow", "Kaja", "Marcin"];

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends, friends});//first can be anything, second to array 

});
 app.post("/addfriend", function(req, res){
     var newFriend = req.body.newfriend;
     friends.push(newFriend);
    res.redirect("/friends");
 });
app.listen(3003, process.env.IP, function(){
console.log("Server started");
}); 