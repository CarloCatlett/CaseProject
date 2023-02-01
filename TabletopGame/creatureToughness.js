getElementById("toughness").onchange= function(status){if (getElementById("toughness").value<=0){
 status=dead;
 return status;
}else{
 status = alive;   
 return status;}
}
