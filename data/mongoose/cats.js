
var mongoose = required("mongoose");
mongoose.connect("mongobd://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number, 
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to DB

var george = new Cat({
    name: "george",
    age: 11,
    temperament: "grouchy"
});

george.save(function(err, cat){
    if(err){
        console.log("Something went wrong")
    } else {
        console.log("we just save cat");
        console.log(cat);

    }

});
//second option of creating and saving

Cat.create({
    name: "Snow white",
    age: 15,
    temperament: "Bland"

}, function(err, cat){
    if(err){
         console.log(err);
    } else {
        console.log(cat);
    }

}),

//retrieving all cats from DB

Cat.find({}, function(err, cats){
    if(err){
        console.log("error");
        console.log(err);

    }else {
        console.log("All the cats");
        console.log(cats);
    }

});
