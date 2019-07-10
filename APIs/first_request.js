var request = require ('request');
request('http://www.google.com',  function(error, response, body){
    if(error){
        console.log("something went wrong");
        console.log(error);
    } else {
        if(response.statusCode == 200){
            //thng worked
            console.log(body);
        }
    }
});