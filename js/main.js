var myImage = Array.from(document.querySelectorAll(".item img"));
var overLay = document.querySelector(".overlay");

for(var i = 0; i < myImage.length; i++) {
    myImage[i].addEventListener("click", clickImg);
}
function clickImg (e) {
    var imgSrc = e.target.src;
    overLay.style.display = "flex";
    overLay.firstElementChild.style.backgroundImage = "url("+imgSrc+")";
}



