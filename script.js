let NBAbutton=document.querySelector(".NBABUTTON");
let NFLbutton=document.querySelector(".NFLBUTTON");
let optionOneNBAScreen=document.querySelector(".option-one-NBA-screen");
let storyOpening=document.querySelector(".story-opening");
let optionOneNFLScreen=document.querySelector(".option-one-NFL-screen")
let optionTwoNBAScreen=document.querySelector(".option-two-NBA-screen")





NBAbutton.onclick=function(){
 storyOpening.style.display="none";
  optionOneNBAScreen.style.display="block";
};

NFLbutton.onclick=function(){
 storyOpening.style.display="none";
  optionOneNFLScreen.style.display="block";
};


PassButton.onclick=function(){
 storyOpening.style.display="none";
  optionTwoNBAScreen.style.display="block";
};

