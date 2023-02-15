/*
i will need to request images, for the time being
these are just placeholders
*/

let captions = mew Array(6);
captions[0]="PLACEHOLDER-1";
captions[1]="PLACEHOLDER-2";
captions[2]="PLACEHOLDER-3";
captions[3]="PLACEHOLDER-4";
captions[4]="PLACEHOLDER-5";
captions[5]="PLACEHOLDER-6";

var htmlCode = "";

for(let i=0; i<=6; i++)
{
     htmlCode+='<p>'+captions[i]+'</p>';
}

document.getElementById("gallery").innerHTML = htmlCode;



