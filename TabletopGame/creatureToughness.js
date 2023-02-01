getElementById("toughness").onchange= function(){if (getElementById("toughness").value<=0){
 getElementById("status").placeholder ="dead";
}else{
 getElementById("status").placeholder= "alive";   
}
