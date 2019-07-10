.big {
	font-size: 100px;
	color: orange;
	border: 5px solid red;

}
p.classList.add("big");


// textContent
//select the <p> tag:
var tag = document.querySelector("p");

// retrieve text tectContent
tag.textContent

//alter rge textConetent
tag.textConetent = "bla bla bla";

//ALE JESLI CHCESZ ZACHOWAC STYL W TEKSCIIE ZMIANIAJAC JEDYNUE SLOWA

//LIKE KEEP <STRONG> </STRONG>
var tag = document.querySelector("p");

tag.innerHTML // strong style stays than
