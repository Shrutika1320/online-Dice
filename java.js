

var randomNumber1=Math.floor(Math.random() * 6 )+1;

var randomDiceImage = "dice" + randomNumber1+".png";

var randomImageSoure="images/" + randomDiceImage;

var images1 = document.querySelectorAll("img")[0];

images1.setAttribute("src",randomImageSoure);


randomNumber2=Math.floor(Math.random() * 6 )+1;

var randomDiceImage = "dice" + randomNumber2+".png";

var randomImageSoure="images/" + randomDiceImage;

var images2= document.querySelectorAll("img")[1];

images2.setAttribute("src",randomImageSoure);

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins!";
}

else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}

else
{
    document.querySelector("h1").innerHTML="Draw!";
  
}