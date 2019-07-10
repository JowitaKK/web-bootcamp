var express = require ("express");
var app = express();

app.get("/", function (req, res){
    res.send("hi there, my first express")
});

app.get("/speak/:animal", function(req, res){
    
    // var sound = "";
    // if(animal === "pig"){
    //     sound = "oink";
    // }else of (animal === "cow"){
    //     sound = "mooo";
    // }  or
    var sounds = {
        pig : "oik",
        cow : "muu",
        dog : "hau hau",
        cat : "mau"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal]; 
    res.send("The " + animal + " say" + sound);
});

app.get("/repeat/:message/:times", function(req, res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";

    for(var i = 0; i < times; i++){
        result += message + "";
    }
    res.send(result); 

    app.get("*", function(req, res){
        res.send("sorry wrong page."); 
    });

});
 app.listen(3000, process.env.IP, function(){   //process.env.PORT
    console.log("Now serving Your app");
 }); 