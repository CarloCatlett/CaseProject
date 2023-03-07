/*
i will need to request images, for the time being
these are just placeholders
*/

let captions = new Array(6);
captions[0]="https://picsum.photos/200";
captions[1]="https://picsum.photos/200";
captions[2]="https://picsum.photos/200";
captions[3]="https://picsum.photos/200";
captions[4]="https://picsum.photos/200";
captions[5]="https://picsum.photos/200";

var htmlCode = "";

for(let i=0; i<6; i++)
{
     htmlCode+="<p>"+captions[i]+"</p>";
}

document.getElementById("gallery").innerHTML = htmlCode;



