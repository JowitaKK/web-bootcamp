var express = require("express");
var app = express();

// "/" => "Hi there"
app.get("/", function(req,res){  // request respons you can call anyway you want
    res.send("Hi there"); 

});

// "/bye" => "Goodbye"
app.get("/bye", function (req, res){
    res.send("Goodbye");
});
// "/dog" => "Meo"
app.get("/dog", function(req, res){
    res.send("miau");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){//dla pojedynczego element after 'r'
   // console.log(req.params); shows all parameters = like we were seatching puppies 
   var subreddit = req.params.subredditName;
   res.send("welcome to the" + subreddit.toUpperCase() + "Subreddit");
   // res.send("welcom to comments page");
});





app.get("*", function(req, res){  // when road not define or some error page can be here
    res.send("You are a star/ error page ")
});
// tell express to listen for requests (start server)

app.listen(3000, process.env.IP,function(){ //(process.env.PORT)
    console.log ("Server started");
});