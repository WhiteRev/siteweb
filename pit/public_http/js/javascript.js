//carousel
var nbsecond= 5;
var slideindex = 0;
var elts_ib_js_carousel = document.getElementsByClassName("ib_js_carousel");// This is one NEED to be after body
function carousel() {
  var i; 
  for (i = 0;i <elts_ib_js_carousel.length; i++) {
    elts_ib_js_carousel[i].style.display = "none";
  }
  slideindex++;
  if (slideindex > elts_ib_js_carousel.length)  {slideindex =1 ;}
  elts_ib_js_carousel[slideindex-1].style.display = "inline-block";
  setTimeout(carousel, nbsecond*1000); //Change image every 2 seconds

}//Carousel//
if (0 !=elts_ib_js_carousel.length) {carousel(); }

//button philo
var elt_ib_js_txtphilo = document.getElementById("ib_js_txtphilo");
var elt_ib_js_btnphilo = document.getElementById("ib_js_btnphilo");
if (null != elt_ib_js_txtphilo){
  elt_ib_js_btnphilo.onclick = function () {
    elt_ib_js_txtphilo.classList.toggle ("ib_showlargeonly") ;

  };

}//if



// 

// ----------------------------------------------------------------------- //
//  ----  partie formule :  display only 1 on 4 formule  ----  //
// ----------------------------------------------------------------------- //
//
//  3 arrays ordered with elts 0,1,2,3 as conseils_content_a, b, c, d
var current_pit_formule_content = 3 ;
var elts_pit_formule_content = [] ;
var elts_pit_formule_link = [] ;

function switch_formule_displayed (p) {
  if ( -1 == p ) return ;
  if ( current_pit_formule_content == p ) return; 
  else { //else hide current displayed and display p
	elts_pit_formule_content[current_pit_formule_content].classList.toggle ("ib_hide", true) ;
	elts_pit_formule_content[p].classList.toggle ("ib_hide", false) ;
    current_pit_formule_content = p ;
  }//else
}//switch_conseils_displayed()

//  execute this code iff we are on the right page
elts_pit_formule_content[0] = document.getElementById("pit_formule_design") ;
if ( null != elts_pit_formule_content[0]) {
  elts_pit_formule_content[1] = document.getElementById("pit_formule_media") ;
  elts_pit_formule_content[2] = document.getElementById("pit_formule_ref") ;
  elts_pit_formule_content[3] = document.getElementById("pit_formule_coaching") ;
  elts_pit_formule_link[0] = document.getElementById("pit_formule_design_link") ;
  elts_pit_formule_link[1] = document.getElementById("pit_formule_media_link") ;
  elts_pit_formule_link[2] = document.getElementById("pit_formule_ref_link") ;
  elts_pit_formule_link[3] = document.getElementById("pit_formule_coaching_link") ;
  elts_pit_formule_link[0].onclick = function () { switch_formule_displayed(0) } ;
  elts_pit_formule_link[1].onclick = function () { switch_formule_displayed(1) } ;
  elts_pit_formule_link[2].onclick = function () { switch_formule_displayed(2) } ;
  elts_pit_formule_link[3].onclick = function () { switch_formule_displayed(3) } ;

}//if current page is formule GOOD



$(document).ready(function(){
    // au clic sur un lien
    $('a[href^="#"]').on('click', function(evt){
       // bloquer le comportement par défaut: on ne rechargera pas la page
       evt.preventDefault(); 
       // enregistre la valeur de l'attribut  href dans la variable target
  var target = $(this).attr('href');
       /* le sélecteur $(html, body) permet de corriger un bug sur chrome 
       et safari (webkit) */
  $('html, body')
       // on arrête toutes les animations en cours 
       .stop()
       /* on fait maintenant l'animation vers le haut (scrollTop) vers 
        notre ancre target */
       .animate({scrollTop: $(target).offset().top}, 1000 );
    });
});