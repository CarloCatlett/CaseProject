/*
i will need to request images, for the time being
these are just placeholders
*/
let images = new Array(6);
let captions = new Array(6);
captions[0]="Placeholder-01";
captions[1]="Placeholder-02";
captions[2]="Placeholder-03";
captions[3]="Placeholder-04";
captions[4]="Placeholder-05";
captions[5]="Placeholder-06";

images[0]='https://picsum.photos/201';
images[1]='https://picsum.photos/202';
images[2]='https://picsum.photos/203';
images[3]='https://picsum.photos/204';
images[4]='https://picsum.photos/205';
images[5]='https://picsum.photos/206';

var htmlCode = "";

for(let i=0; i<6; i++)
{
     htmlCode+="<img src="+images[i]+">";
     htmlCode+="<p>"+captions[i]+"</p>";
}

document.getElementById("gallery").innerHTML = htmlCode;



