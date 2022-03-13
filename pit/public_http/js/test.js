var current_pit_science_content = 4 ;
var elts_pit_science_content = [] ;
var elts_pit_science_link = [] ;

function switch_science_displayed (p) {
  if ( -1 == p ) return ;
  if ( current_pit_science_content == p ) return; 
  else { //else hide current displayed and display p
  elts_pit_science_content[current_pit_science_content].classList.toggle ("ib_hide", true) ;
  elts_pit_science_content[p].classList.toggle ("ib_hide", false) ;
    current_pit_science_content = p ;
  }//else
}//switch_conseils_displayed()

//  execute this code iff we are on the right page
elts_pit_formule_content[0] = document.getElementById("pit_science_pythagore") ;
if ( null != elts_pit_formule_content[0]) {
  elts_pit_science_content[1] = document.getElementById("pit_science_galilee") ;
  elts_pit_science_content[2] = document.getElementById("pit_science_einstein") ;
  elts_pit_science_content[3] = document.getElementById("pit_science_newton") ;
  elts_pit_science_content[4] = document.getElementById("pit_science_marie") ;
  elts_pit_science_link[0] = document.getElementById("pit_science_pythagore_link") ;
  elts_pit_science_link[1] = document.getElementById("pit_science_galilee_link") ;
  elts_pit_science_link[2] = document.getElementById("pit_science_einstein_link") ;
  elts_pit_science_link[3] = document.getElementById("pit_science_newton_link") ;
  elts_pit_science_link[4] = document.getElementById("pit_science_marie_link") ;


  elts_pit_science_link[0].onmouseover = function () { switch_science_displayed(0) } ;
  elts_pit_science_link[1].onmouseover = function () { switch_science_displayed(1) } ;
  elts_pit_science_link[2].onmouseover = function () { switch_science_displayed(2) } ;
  elts_pit_science_link[3].onmouseover = function () { switch_science_displayed(3) } ;

}//if current page is formule GOOD