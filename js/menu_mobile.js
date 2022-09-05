var offer_block
var offer_menu_mobile
var offer_image_mobile

function menu_mobile_open() { 
  document.getElementById("offer_block").style.display = 'none';
  document.getElementById("offer_image_mobile").style.display = 'none';
  document.getElementById("offer_menu_mobile").style.display = 'block';
}

function menu_mobile_close(){
	document.getElementById("offer_block").style.display = 'grid';
  	document.getElementById("offer_image_mobile").style.display = 'block';
  	document.getElementById("offer_menu_mobile").style.display = 'none';
}