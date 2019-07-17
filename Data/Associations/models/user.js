var mongoose = reguire("mongoose");

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts:[
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"

        }
    ]
});

model.exports = mongoose.model("User", userSchema);// !!!!!!!!!!!