//carousel
var nbsecond= 5;
var slideindex = 0;
var elts_ib_js_carousel = document.getElementsByClassName("ib_js_carousel"); // This is one NEED to be after body
function carousel() {
	var i; 
	for (i = 0;i <elts_ib_js_carousel.length; i++) {
    elts_ib_js_carousel[i].style.display = "none";

//elts_ib_js_carousel[i].classList.toggle("carousel_fadein",false);
//		elts_ib_js_carousel[i].classList.toggle("carousel_fadeout",true);

	}
	slideindex++;
	if (slideindex > elts_ib_js_carousel.length)  {slideindex =1 ;} 
  //alert(elts_ib_js_carousel[slideindex]);
      elts_ib_js_carousel[slideindex].style.display = "inline-block";

    //elts_ib_js_carousel[slideindex].classList.toggle("carousel_fadeout",false);
    //elts_ib_js_carousel[slideindex].classList.toggle("carousel_fadein",true);
	setTimeout(carousel, nbsecond*1000); //Change image every 2 seconds

}//Carousel//
if (0 !=elts_ib_js_carousel.length) {// var i; 
 // for (i = 0;i <elts_ib_js_carousel.length; i++) {
   // elts_ib_js_carousel[i].style.display = "none";
    //}//for 
     carousel(); }

//button philo
var elt_ib_js_txtphilo = document.getElementById("ib_js_txtphilo");
var elt_ib_js_btnphilo = document.getElementById("ib_js_btnphilo");
if (null != elt_ib_js_txtphilo){
	elt_ib_js_btnphilo.onclick = function () {
		elt_ib_js_txtphilo.classList.toggle ("ib_showlargeonly") ;

	};

}//if
