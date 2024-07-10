let questionOne = document.querySelector("#questionOne");
let questionTwo = document.querySelector("#questionTwo");
let startButton = document.querySelector(".startButton");
let notIntro = document.querySelector(".notIntro");
let sectionOne= document.querySelector(".sectionOne");
let sectionTwo= document.querySelector(".sectionTwo");
let sectionThree= document.querySelector(".sectionThree");
let sectionFour= document.querySelector(".sectionFour");
let nickReward = document.querySelector(".nickTriviaReward")
let riddlesReward = document.querySelector(".riddlesReward")
let mathReward = document.querySelector(".mathReward")
let hardReward = document.querySelector(".hardReward")


startButton.addEventListener("click", function (){
    notIntro.style.display = "block";
    nickReward.style.display = "none";
    sectionTwo.style.display = "none";
    sectionThree.style.display = "none";
    sectionFour.style.display = "none";
    riddlesReward.style.display = "none";
    hardReward.style.display = "none";
    mathReward.style.display = "none";
});


let questionOneButton = document.querySelector(".questionOneButton");
let questionOneMessage = document.querySelector(".questionOneMessage");
questionOneButton.addEventListener("click", function() {
    let questionOneInput = document.querySelector(".questionOneInput").value;
    if (questionOneInput === "Nikolas" || questionOneInput === "nikolas") {
        questionOneMessage.innerHTML = "Correct!";
        questionOneMessage.style.color = "green";
    }
    else {
        questionOneMessage.innerHTML = "Wrong!";
        questionOneMessage.style.color = "red";
    }
}); 


let questionTwoButton = document.querySelector(".questionTwoButton");
questionTwoMessage = document.querySelector(".questionTwoMessage");
questionTwoButton.addEventListener("click", function() {
    let questionTwoInput = document.querySelector(".questionTwoInput").value;
    if (questionTwoInput === "Orange" || questionTwoInput === "orange") {
        questionTwoMessage.innerHTML = "Correct!";
        questionTwoMessage.style.color = "green";
    }
    else {
        questionTwoMessage.innerHTML = "Wrong!";
        questionTwoMessage.style.color = "red";
    }
}); 


let questionThreeButton = document.querySelector(".questionThreeButton");
questionThreeMessage = document.querySelector(".questionThreeMessage");
questionThreeButton.addEventListener("click", function() {
    let questionThreeInput = document.querySelector(".questionThreeInput").value;
    if (questionThreeInput === "octopus" || questionThreeInput === "Octopus") {
        questionThreeMessage.innerHTML = "Correct!";
        questionThreeMessage.style.color = "green";
    }
    else {
        questionThreeMessage.innerHTML = "Wrong!";
        questionThreeMessage.style.color = "red";
    }
}); 

let questionFourButton = document.querySelector(".questionFourButton");
questionFourMessage = document.querySelector(".questionFourMessage");
questionFourButton.addEventListener("click", function() {
    let questionFourInput = document.querySelector(".questionFourInput").value;
    if (questionFourInput === "Reagan" || questionFourInput === "reagan") {
        questionFourMessage.innerHTML = "Correct!";
        questionFourMessage.style.color = "green";
    }
    else {
        questionFourMessage.innerHTML = "Wrong!";
        questionFourMessage.style.color = "red";
    }
}); 

let questionFiveButton = document.querySelector(".questionFiveButton");
questionFiveMessage = document.querySelector(".questionFiveMessage");
questionFiveButton.addEventListener("click", function() {
    let questionFiveInput = document.querySelector(".questionFiveInput").value;
    if (questionFiveInput === "Tsutomu" || questionFiveInput === "tsutomu") {
        questionFiveMessage.innerHTML = "Correct!";
        questionFiveMessage.style.color = "green";
        nickReward.style.display = "block";
        sectionTwo.style.display = "block";
    }
    else {
        questionFiveMessage.innerHTML = "Wrong!";
        questionFiveMessage.style.color = "red";
    }
}); 

let questionSixButton = document.querySelector(".questionSixButton");
questionSixMessage = document.querySelector(".questionSixMessage");
questionSixButton.addEventListener("click", function() {
    let questionSixInput = document.querySelector(".questionSixInput").value;
    if (questionSixInput === "Age" || questionSixInput === "age") {
        questionSixMessage.innerHTML = "Correct!";
        questionSixMessage.style.color = "green";
    }
    else {
        questionSixMessage.innerHTML = "Wrong!";
        questionSixMessage.style.color = "red";
    }
}); 

let questionSevenButton = document.querySelector(".questionSevenButton");
questionSevenMessage = document.querySelector(".questionSevenMessage");
questionSevenButton.addEventListener("click", function() {
    let questionSevenInput = document.querySelector(".questionSevenInput").value;
    if (questionSevenInput === "silence" || questionSevenInput === "Silence") {
        questionSevenMessage.innerHTML = "Correct!";
        questionSevenMessage.style.color = "green";
    }
    else {
        questionSevenMessage.innerHTML = "Wrong!";
        questionSevenMessage.style.color = "red";
    }
}); 

let questionEightButton = document.querySelector(".questionEightButton");
questionEightMessage = document.querySelector(".questionEightMessage");
questionEightButton.addEventListener("click", function() {
    let questionEightInput = document.querySelector(".questionEightInput").value;
    if (questionEightInput === "Automobile" || questionEightInput === "automobile") {
        questionEightMessage.innerHTML = "Correct!";
        questionEightMessage.style.color = "green";
    }
    else {
        questionEightMessage.innerHTML = "Wrong!";
        questionEightMessage.style.color = "red";
    }
}); 

let questionNineButton = document.querySelector(".questionNineButton");
questionNineMessage = document.querySelector(".questionNineMessage");
questionNineButton.addEventListener("click", function() {
    let questionNineInput = document.querySelector(".questionNineInput").value;
    if (questionNineInput === "Queue" || questionNineInput === "queue") {
        questionNineMessage.innerHTML = "Correct!";
        questionNineMessage.style.color = "green";
    }
    else {
        questionNineMessage.innerHTML = "Wrong!";
        questionNineMessage.style.color = "red";
    }
}); 

let questionTenButton = document.querySelector(".questionTenButton");
questionTenMessage = document.querySelector(".questionTenMessage");
questionTenButton.addEventListener("click", function() {
    let questionTenInput = document.querySelector(".questionTenInput").value;
    if (questionTenInput === "wedding ring" || questionTenInput === "wedding rings" ||questionTenInput === "ring" ||questionTenInput === "Ring"||questionTenInput === "rings"||questionTenInput === "Rings"||questionTenInput === "Wedding Ring"||questionTenInput === "Wedding Rings"||questionTenInput === "A Wedding Ring"||questionTenInput === "a wedding ring") {
        questionTenMessage.innerHTML = "Correct! 💋❤️💋❤️💋❤️💋❤️";
        questionTenMessage.style.color = "green";
        riddlesReward.style.display = "block";
        sectionThree.style.display = "block";
    }
    else {
        questionTenMessage.innerHTML = "Wrong!";
        questionTenMessage.style.color = "red";
    }
}); 

let questionElevenButton = document.querySelector(".questionElevenButton");
questionElevenMessage = document.querySelector(".questionElevenMessage");
questionElevenButton.addEventListener("click", function() {
    let questionElevenInput = document.querySelector(".questionElevenInput").value;
    if (questionElevenInput === "14444") {
        questionElevenMessage.innerHTML = "Correct!";
        questionElevenMessage.style.color = "green";
    }
    else {
        questionElevenMessage.innerHTML = "Wrong!";
        questionElevenMessage.style.color = "red";
    }
}); 
let questionTwelveButton = document.querySelector(".questionTwelveButton");
questionTwelveMessage = document.querySelector(".questionTwelveMessage");
questionTwelveButton.addEventListener("click", function() {
    let questionTwelveInput = document.querySelector(".questionTwelveInput").value;
    if (questionTwelveInput === "3x^2 + 3" || questionTwelveInput === "3x^2+3") {
        questionTwelveMessage.innerHTML = "Correct!";
        questionTwelveMessage.style.color = "green";
    }
    else {
        questionTwelveMessage.innerHTML = "Wrong!";
        questionTwelveMessage.style.color = "red";
    }
}); 
let questionThirteenButton = document.querySelector(".questionThirteenButton");
questionThirteenMessage = document.querySelector(".questionThirteenMessage");
questionThirteenButton.addEventListener("click", function() {
    let questionThirteenInput = document.querySelector(".questionThirteenInput").value;
    if (questionThirteenInput === "Isosceles" || questionThirteenInput === "isosceles") {
        questionThirteenMessage.innerHTML = "Correct!";
        questionThirteenMessage.style.color = "green";
    }
    else {
        questionThirteenMessage.innerHTML = "Wrong!";
        questionThirteenMessage.style.color = "red";
    }
}); 
let questionFourteenButton = document.querySelector(".questionFourteenButton");
questionFourteenMessage = document.querySelector(".questionFourteenMessage");
questionFourteenButton.addEventListener("click", function() {
    let questionFourteenInput = document.querySelector(".questionFourteenInput").value;
    if (questionFourteenInput === "forty" || questionFourteenInput === "Forty") {
        questionFourteenMessage.innerHTML = "Correct!";
        questionFourteenMessage.style.color = "green";
    }
    else {
        questionFourteenMessage.innerHTML = "Wrong!";
        questionFourteenMessage.style.color = "red";
    }
}); 
let questionFifteenButton = document.querySelector(".questionFifteenButton");
questionFifteenMessage = document.querySelector(".questionFifteenMessage");
questionFifteenButton.addEventListener("click", function() {
    let questionFifteenInput = document.querySelector(".questionFifteenInput").value;
    if (questionFifteenInput === "345x^4y^2+2921x^4y^4-45x^3y^2-381x^3y^4-135y^2-1143y^4" || questionFifteenInput === "345x^4y^2 + 2921x^4y^4 - 45x^3y^2 - 381x^3y^4 - 135y^2 - 1143y^4") {
        questionFifteenMessage.innerHTML = "Correct!";
        questionFifteenMessage.style.color = "green";
        mathReward.style.display = "block";
        sectionFour.style.display = "block";
    }
    else {
        questionFifteenMessage.innerHTML = "Wrong!";
        questionFifteenMessage.style.color = "red";
    }
}); 
let questionSixteenButton = document.querySelector(".questionSixteenButton");
questionSixteenMessage = document.querySelector(".questionSixteenMessage");
questionSixteenButton.addEventListener("click", function() {
    let questionSixteenInput = document.querySelector(".questionSixteenInput").value;
    if (questionSixteenInput === "Muhammad" || questionSixteenInput === "muhammad" || questionSixteenInput === "muhammid" || questionSixteenInput === "Muhammid") {
        questionSixteenMessage.innerHTML = "Correct!";
        questionSixteenMessage.style.color = "green";
    }
    else {
        questionSixteenMessage.innerHTML = "Wrong!";
        questionSixteenMessage.style.color = "red";
    }
}); 
let questionSeventeenButton = document.querySelector(".questionSeventeenButton");
questionSeventeenMessage = document.querySelector(".questionSeventeenMessage");
questionSeventeenButton.addEventListener("click", function() {
    let questionSeventeenInput = document.querySelector(".questionSeventeenInput").value;
    if (questionSeventeenInput === "Ponyo" || questionSeventeenInput === "ponyo") {
        questionSeventeenMessage.innerHTML = "Correct!";
        questionSeventeenMessage.style.color = "green";
    }
    else {
        questionSeventeenMessage.innerHTML = "Wrong!";
        questionSeventeenMessage.style.color = "red";
    }
}); 
let questionEighteenButton = document.querySelector(".questionEighteenButton");
questionEighteenMessage = document.querySelector(".questionEighteenMessage");
questionEighteenButton.addEventListener("click", function() {
    let questionEighteenInput = document.querySelector(".questionEighteenInput").value;
    if (questionEighteenInput === "bomber" || questionEighteenInput === "Bomber"|| questionEighteenInput === "The Bomber"|| questionEighteenInput === "The bomber"|| questionEighteenInput === "the bomber"|| questionEighteenInput === "the Bomber") {
        questionEighteenMessage.innerHTML = "Correct!";
        questionEighteenMessage.style.color = "green";
    }
    else {
        questionEighteenMessage.innerHTML = "Wrong!";
        questionEighteenMessage.style.color = "red";
    }
}); 
let questionNineteenButton = document.querySelector(".questionNineteenButton");
questionNineteenMessage = document.querySelector(".questionNineteenMessage");
questionNineteenButton.addEventListener("click", function() {
    let questionNineteenInput = document.querySelector(".questionNineteenInput").value;
    if (questionNineteenInput === "Bagels" || questionNineteenInput === "bagels") {
        questionNineteenMessage.innerHTML = "Correct!";
        questionNineteenMessage.style.color = "green";
    }
    else {
        questionNineteenMessage.innerHTML = "Wrong!";
        questionNineteenMessage.style.color = "red";
    }
}); 
let questionTwentyButton = document.querySelector(".questionTwentyButton");
questionTwentyMessage = document.querySelector(".questionTwentyMessage");
questionTwentyButton.addEventListener("click", function() {
    let questionTwentyInput = document.querySelector(".questionTwentyInput").value;
    if (questionTwentyInput === "Thomas Jefferson" || questionTwentyInput === "thomas jefferson") {
        questionTwentyMessage.innerHTML = "Correct!";
        questionTwentyMessage.style.color = "green";
        hardReward.style.display = "block";
    }
    else {
        questionTwentyMessage.innerHTML = "Wrong!";
        questionTwentyMessage.style.color = "red";
    }
}); 

