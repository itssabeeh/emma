var slides=document.getElementsByClassName("mySlides");
var buttons = document.getElementsByClassName("slide");

var n=0;
var i=0;

var slidechange=function(){
    i=0;
    if(this.id == "plus")
        n++;
    else
        n--;

    for(;i<slides.length;i++){
        slides[i].style.display="none";
    }
    if(n>3)n=0;
    else if(n<0) n=3;
    slides[n].style.display="block";
};

slidechange();

for(var j=0;j<2;j++){
 buttons[j].addEventListener('click',slidechange);
}