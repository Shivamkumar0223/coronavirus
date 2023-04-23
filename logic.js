var coronavirus = document.getElementById("coronavirus");
var san = document.getElementById("san"); 
var result = document.getElementById("result");
const score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;

//coronavirus move

coronavirus.addEventListener("animationiteration",function(){
    var random=((Math.floor(Math.random() *3))*130)
    coronavirus.style.left = random + "px";
    counter++
})

//san 
window.addEventListener("keydown", function(e){
   if(e. keyCode =="39") var sanLeft = parseInt(window.getComputedStyle(san).getPropertyValue("left"))
if(sanLeft < 260) san.style.left = (sanLeft + 130) + "px";




if (e.keyCode =="37"){
    var sanLeft = parseInt(window.getComputedStyle(san).getPropertyValue("left"))
if(sanLeft > 0) san.style.left = (sanLeft - 130) + "px"


}

})

//game over

setInterval (function gameover (){

    var coronavirusTop = parseInt(window.getComputedStyle(coronavirus).getPropertyValue("top"))
    var coronavirusLeft = parseInt(window.getComputedStyle(coronavirus).getPropertyValue("left"))
    var sanLeft = parseInt(window.getComputedStyle(san).getPropertyValue("left"))
    
    if((coronavirusLeft === sanLeft ) && (coronavirusTop > 200) && (coronavirusTop < 450) ){

        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${counter} `;
        counter = 0;
    }
    


}, 10)