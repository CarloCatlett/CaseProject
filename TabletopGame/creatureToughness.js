document.getElementById("toughness").onchange=function(){
    if(document.getElementById("toughness").value <=0){document.getElementById("status").placeholder="Dead"}
else{document.getElementById("status").placeholder="Alive"}
}

