let randomNumber=Math.floor(Math.random()*6)+1;
const randomNumberimage="dice"+randomNumber+".png";
const randomImageSource="images/"+randomNumberimage;
const img1=document.querySelectorAll('img')[0];
img1.setAttribute("src",randomImageSource);



let randomNumber1=Math.floor(Math.random()*6)+1;
const randomNumberimage1="dice"+randomNumber1+".png";
const randomImageSource1="images/"+randomNumberimage1;
const img2=document.querySelectorAll('img')[1];
img2.setAttribute("src",randomImageSource1);

if(randomNumber>randomNumber1)
{
    document.querySelector("h1").innerHTML=" player 1 winner👍👍";
}
else if(randomNumber1>randomNumber){
    document.querySelector("h1").innerHTML="player 2 winner👍👍";
}
else{
    document.querySelector("h1").innerHTML="draw ha lsan😜";
    
}