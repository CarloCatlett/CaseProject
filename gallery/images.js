/*
i will need to request images, for the time being
these are just placeholders
*/

let captions = mew Array(6);
captions[0]="PLACEHOLDER";
captions[1]="PLACEHOLDER";
captions[2]="PLACEHOLDER";
captions[3]="PLACEHOLDER";
captions[4]="PLACEHOLDER";
captions[5]="PLACEHOLDER";

var htmlCode = "";

for(let i=0; i<=13; i++)
{
     htmlCode+="<figure> <img alt=''src ='image"+i+".jpg' /> <figcaption>"+captions[i]+"</figcaption> </figure>";
}

document.getElementById("gallery").innerHTML = htmlCode;



