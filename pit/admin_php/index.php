<?php
if ( isset ($_POST['form']) ) {
  switch ($_POST['form']) {
    case "form_contact" :
      include ("form_contact.php") ; 
      break ;
    default : 
      break ;
  }//switch
}//if
unset ($_POST) ;
?>
