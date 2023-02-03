var bluecar = document.getElementById("bluecar");
var mycar = document.getElementById("mycar");
var result = document.getElementById("result");
const score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;

//bluecar move

bluecar.addEventListener("animationiteration",function(){
    var random=((Math.floor(Math.random() *3))*130)
    bluecar.style.left = random + "px";
    counter++
})

//mycar move
window.addEventListener("keydown", function(e){
   if(e. keyCode =="39") var mycarLeft = parseInt(window.getComputedStyle(mycar).getPropertyValue("left"))
if(mycarLeft < 260) mycar.style.left = (mycarLeft + 130) + "px";



if (e.keyCode =="37"){
    var mycarLeft = parseInt(window.getComputedStyle(mycar).getPropertyValue("left"))
if(mycarLeft > 0) mycar.style.left = (mycarLeft - 130) + "px"

}

})

//game over

setInterval (function gameover (){

    var bluecarTop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"))
    var bluecarLeft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"))
    var mycarLeft = parseInt(window.getComputedStyle(mycar).getPropertyValue("left"))
    
    if((bluecarLeft === mycarLeft ) && (bluecarTop > 200) && (bluecarTop < 450) ){

        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${counter} `;
        counter = 0;
    }
    


}, 10)