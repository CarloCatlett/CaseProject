document.getElementById("toughness").onchange=if document.getElementById("toughness").value<=0){
 document.getElementById("status").placeholder ="dead";
}else{
 document.getElementById("status").placeholder= "alive";   
}
