// =====
// SETUP

var express = require('express'),
	app = express (),
	mongoose = require ("mongoose"),
	logger = require ('morgan'),
	bodyParser = require ('body-parser')

app.set ('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true}));

//========
//DATABASE STUFF

mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/dog_demo_app");
var dogSchema = new mongoose.Schema ({
			name: String,
			breed : String
});
var Dog = mongoose.model("Dog", dogSchema);

//=======
// ROUTEs
app.get("/", function(req,res){
	res.render("home")

});

app.get("/dogs", function (req, res){
	Dog.find({}, function(err, dog){
		res.render("dogs", {dogs: dogs});
	});

});

app.post("/createDog", function (req, res){
	Dog.create({
		name: req.body.name,
		breed: req.body.breed
	}, function(err, dog){
		res.redirect("/dogs");
	
	});
});

app.listen(3000, function(){
	console.log("serching dog demon on portal 3000")
});