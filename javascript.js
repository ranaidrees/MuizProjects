function age(){
    // h1.innerText = ""
    var birthYear=prompt("what year were you born...Good friend?");
    var aid=(2018-birthYear)*365;
    var h1=document.createElement("h1");
    var textanwser=document.createTextNode("you are "+ aid +" days old");
    textanwser.remove();
    
    h1.setAttribute("id","goo");
    h1.appendChild(textanwser);
    
    
    document.getElementById("flex-box-result").appendChild(h1);
    
}
function reset(){
document.getElementById("goo").remove();
document.getElementById("goo").innerText = "";
}
// new
function gc () {
    var image =document.createElement("img");
    var div =document.getElementById("cool");
    image.src="https://cdn2.thecatapi.com/images/ahv.jpg";
    div.appendChild(image);
}

function numberToChoice(number){
    return["rock","paper","scissors"][number]
}

// new
function rpsGame(yourChoice){
    
    var humanChoice ,botChoice;
    humanChoice=yourChoice.id;
    console.log("Human choice", humanChoice);
   botChoice= numberToChoice(randomTorpsInt());
 
    console.log("Computer choice" ,botChoice);
   results=decideWinner(humanChoice,botChoice)
   console.log(results)
   message=finalMessage(results)
   console.log(message)
   rpsFrontEnd(yourChoice.id, botChoice, message)
}
function randomTorpsInt(){
    return Math.floor(Math.random() * 3)
}

function decideWinner(yourChoice, computerChoice){
var rpsdatabase= {
    'rock':{"scissors":1, "rock" : 0.5, "paper" : 0},
    'paper' : {"rock":1, "paper":0.5, "scissors" : 0},
    'scissors' : {"paper":1, "scissors":0.5, "rock" : 0}
};

var yourScore=rpsdatabase[yourChoice][computerChoice]
var computerScore=rpsdatabase[computerChoice][yourChoice]
return [yourScore, computerScore]
}
function finalMessage([yourScore, computerScore]){
    if (yourScore ===0){
        return{"message" : "You lost!","color" :"red" }
    }
    else if (yourScore === 0.5) {
            return {"message" : "You Tided!" ,"color" :"yellow" }
    }
    else {
        return {"message" : "You Won!" , "color" : "green"}
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var ImagesDataBase ={
        "rock" : document.getElementById("rock").src,
        "paper" : document.getElementById("paper").src,
        "scissors" : document.getElementById("scissors").src
    }
    // scissors
document.getElementById("rock").remove()
document.getElementById("paper").remove()
document.getElementById("scissors").remove()

var humanDiv =document.createElement("div")
var botDiv =document.createElement("div")
var messageDiv =document.createElement("div")
// ask help from baba!
humanDiv.innerHTML = "<img src='" + ImagesDataBase[humanImageChoice] + "' >"
messageDiv.innerHTML=  "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding: 30px;'>" + finalMessage['message'] +"</h1>"
botDiv.innerHTML = "<img src='" + ImagesDataBase[botImageChoice] + "' >"
document.getElementById("flex-box-rps-div").appendChild(humanDiv)
document.getElementById("flex-box-rps-div").appendChild(messageDiv)
document.getElementById("flex-box-rps-div").appendChild(botDiv)
}
//new   
var all_btn= document.getElementsByTagName("button")

var copyAllBtn=  []
for( let i=0; i<all_btn.length;i++ ){
    copyAllBtn.push(all_btn[i])
}

function btnColorChange(buttonThingy){
console.log(buttonThingy.val)
}