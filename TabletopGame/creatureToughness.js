document.getElementById("toughness").onchange= function(){if document.getElementById("toughness").value<=0){
 document.getElementById("status").placeholder ="dead";
}else{
 document.getElementById("status").placeholder= "alive";   
}
                                                         }
