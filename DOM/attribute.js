//images, src
//use getArtribute() and setAttribute() to read attributes like 
// src and href 

<a href="www.google.com">I am a link</a>
< img src="logo.png">

var link = document.querySelector("a");
link.getAttribute("href");  ///"www.google.com"
// CHANGE HREF ATTRIBUTE
link.setAttribute("href", "www.dogs.com");

//TO CHANGE IMGE SRC
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");


//samples

var img1 = document.getElementById("img") [0]
//img1.getAttribute("src"); - to show sorce 
//changing
img1.setAttribute("src", "http://www.markflor.pl/wp-content/uploads/2017/03/Fotolia_139829434_Subscription_Monthly_M-800x566.jpg");


//remember first to select image = var img2 


//jesli img nie ma id do wyszukania mozna wtedy tak
//google page changings 

var logo1 = document.getElementByTagName("img")[0]
// wtedy w konsole wpisuje logo1 i jest

