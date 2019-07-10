var express = require ("express");
var app = express();

app.use(express.static("public")); 
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");//instead of home.ejs
})

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar:thing });//instead of love.ejs
});

app.get("/posts", function(req, res){
    var posts = [
        {title :"Post 1", author:" Paul"},
        {title :"Post 2", author:" Jow"},
        {title :"Post 2", author:" Antos"}
    ];
    res.render("post", {posts: posts});// instead of post.ejs
});
app.listen(3002, process.env.IP, function(){
    console.log("Server is listening");

});