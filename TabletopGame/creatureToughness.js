document.getElementById("toughness").onchange= function(){var life; if document.getElementById("toughness").value<=0){
 life=document.getElementById("status").placeholder ="dead";
}else{
 life = document.getElementById("status").placeholder= "alive";   
}
                           return life;                   }
