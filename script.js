var timeLeftSpan = document.querySelector("#time-left");
var startBtn = document.querySelector("#startGame");
var H1content = document.querySelector("#H1");
var H3content = document.querySelector("#H3");
var mainContent = document.querySelector("main");
var footerResult = document.querySelector("#footer");
var initial = document.querySelector(".form-input");
var btnSave = document.querySelector("#save");
var Point = localStorage.getItem("highScore");
var initalName = localStorage.getItem("Name");
var render = document.querySelector("#render");
initial.style.display = "none";
btnSave.style.display = "none";
var button1;
var button2;
var button3;
var button4;
var button1a;
var button2a;
var button3a;
var button4a;
var button1b;
var button2b;
var button3b;
var button4b;
var button1c;
var button2c;
var button3c;
var button4c;
var score;
var countdownTimer;
var timeLeft = 75;

function startGame(){
    timeLeft = 75;
    timeLeftSpan.textContent = timeLeft;
    countdownTimer = setInterval(function(){
        timeLeft--;
        timeLeftSpan.textContent = timeLeft;
        if (timeLeft == 0){
            clearInterval(countdownTimer);
        }
    },1000)
    Question1();
    
}

function Question1(){
    initial.style.display = "none";
    btnSave.style.display = "none"; 
    startBtn.style.display = "none";
    H3content.style.display = "none";
    H1content.style.textAlign = "left";
    H1content.textContent = "Commonly used date types DO NOT Include:";

    button1 = document.createElement("button");
    button1.textContent = "1. string";

    button2 = document.createElement("button");
    button2.textContent = "2. booleans";

    button3 = document.createElement("button");
    button3.textContent = "3. alert";

    button4 = document.createElement("button");
    button4.textContent = "4. number";

    mainContent.append(button1);
    mainContent.append(button2);
    mainContent.append(button3);
    mainContent.append(button4);

    button1.addEventListener("click",function(){
        footerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        timeLeftSpan.textContent = timeLeft;
        clearInterval(countdownTimer);
        countdownTimer = setInterval(function(){
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            if (timeLeft == 0){
                clearInterval(countdownTimer);
            }
        },1000)
        Question2();
    })

    button2.addEventListener("click",function(){
        footerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        timeLeftSpan.textContent = timeLeft;
        clearInterval(countdownTimer);
        countdownTimer = setInterval(function(){
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            if (timeLeft == 0){
                clearInterval(countdownTimer);
            }
        },1000)
        Question2();
    })

    button3.addEventListener("click",function(){
        footerResult.textContent = "Correct!";
        Question2();
    })

    button4.addEventListener("click",function(){
        footerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        timeLeftSpan.textContent = timeLeft;
        clearInterval(countdownTimer);
        countdownTimer = setInterval(function(){
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            if (timeLeft == 0){
                clearInterval(countdownTimer);
            }
        },1000)
        Question2();
    })
    
}
function Question2(){
    initial.style.display = "none";
    btnSave.style.display = "none";
    startBtn.style.display = "none";
    H3content.style.display = "none";
    H1content.style.textAlign = "left";
    H1content.textContent = "The condition in an if/else statement is enclosed with______.";
    button1a = document.createElement("button");
    button1a.textContent = "1. square bracket";

    button2a = document.createElement("button");
    button2a.textContent = "1. quotes";

    button3a = document.createElement("button");
    button3a.textContent = "2. curly brackets";

    button4a = document.createElement("button");
    button4a.textContent = "3. parenthesis";

    mainContent.append(button1a);
    mainContent.append(button2a);
    mainContent.append(button3a);
    mainContent.append(button4a);
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button1a.addEventListener("click",function(){
        footerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        timeLeftSpan.textContent = timeLeft;
        clearInterval(countdownTimer);
        countdownTimer = setInterval(function(){
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            if (timeLeft == 0){
                clearInterval(countdownTimer);
            }
        },1000)
        Question3();
    })
    button2a.addEventListener("click",function(){
        footerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        timeLeftSpan.textContent = timeLeft;
        clearInterval(countdownTimer);
        countdownTimer = setInterval(function(){
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            if (timeLeft == 0){
                clearInterval(countdownTimer);
            }
        },1000)
        Question3();
    })
    button3a.addEventListener("click",function(){
        footerResult.textContent = "Correct!";
        Question3();
    })
    button4a.addEventListener("click",function(){
        footerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        timeLeftSpan.textContent = timeLeft;
        clearInterval(countdownTimer);
        countdownTimer = setInterval(function(){
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            if (timeLeft == 0){
                clearInterval(countdownTimer);
            }
        },1000)
        Question3();
    })
}   
function Question3(){
    startBtn.style.display = "none";
    H3content.style.display = "none";
    initial.style.display = "none";
    btnSave.style.display = "none";
    H1content.style.textAlign = "left";
    H1content.textContent = "Arrays in JavaScript can be used to store";
    button1b = document.createElement("button");
    button1b.textContent = "1. number and strings";

    button2b = document.createElement("button");
    button2b.textContent = "2. other arrays";

    button3b = document.createElement("button");
    button3b.textContent = "3. booleans";

    button4b = document.createElement("button");
    button4b.textContent = "4. all of the above";

    mainContent.append(button1b);
    mainContent.append(button2b);
    mainContent.append(button3b);
    mainContent.append(button4b);

    button1a.style.display = "none";
    button2a.style.display = "none";
    button3a.style.display = "none";
    button4a.style.display = "none";

    button1b.addEventListener("click",function(){
        footerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        timeLeftSpan.textContent = timeLeft;
        clearInterval(countdownTimer);
        countdownTimer = setInterval(function(){
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            if (timeLeft == 0){
                clearInterval(countdownTimer);
            }
        },1000)
        Question4();
    })
    button2b.addEventListener("click",function(){
        footerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        timeLeftSpan.textContent = timeLeft;
        clearInterval(countdownTimer);
        countdownTimer = setInterval(function(){
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            if (timeLeft == 0){
                clearInterval(countdownTimer);
            }
        },1000)
        Question4();
    })
    button3b.addEventListener("click",function(){
        footerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        timeLeftSpan.textContent = timeLeft;
        clearInterval(countdownTimer);
        countdownTimer = setInterval(function(){
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            if (timeLeft == 0){
                clearInterval(countdownTimer);
            }
        },1000)
        Question4();
    })
    button4b.addEventListener("click",function(){
        footerResult.textContent = "Correct!";
        Question4();
    })
}
startBtn.addEventListener("click",startGame);

function Question4(){
    initial.style.display = "none";
    btnSave.style.display = "none";
    startBtn.style.display = "none";
    H3content.style.display = "none";
    H1content.style.textAlign = "left";
    H1content.textContent = "String values must be enclosed within ______ when being assigned to variable";
    button1c = document.createElement("button");
    button1c.textContent = "1. commas";

    button2c = document.createElement("button");
    button2c.textContent = "2. curly brackets";

    button3c = document.createElement("button");
    button3c.textContent = "3. quotes";

    button4c = document.createElement("button");
    button4c.textContent = "4. parenthesis";

    mainContent.append(button1c);
    mainContent.append(button2c);
    mainContent.append(button3c);
    mainContent.append(button4c);

    button1b.style.display = "none";
    button2b.style.display = "none";
    button3b.style.display = "none";
    button4b.style.display = "none";

    button1c.addEventListener("click",function(){
        footerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        timeLeftSpan.textContent = timeLeft;
        clearInterval(countdownTimer);
        countdownTimer = setInterval(function(){
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            if (timeLeft == 0){
                clearInterval(countdownTimer);
            }
        },1000)
        finalScore();
    })
    button2c.addEventListener("click",function(){
        footerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        timeLeftSpan.textContent = timeLeft;
        clearInterval(countdownTimer);
        countdownTimer = setInterval(function(){
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            if (timeLeft == 0){
                clearInterval(countdownTimer);
            }
        },1000)
        finalScore();
    })
    button3c.addEventListener("click",function(){
        footerResult.textContent = "Correct!";
        finalScore();
    })
    button4c.addEventListener("click",function(){
        footerResult.textContent = "Wrong!";
        timeLeft = timeLeft - 10;
        timeLeftSpan.textContent = timeLeft;
        clearInterval(countdownTimer);
        countdownTimer = setInterval(function(){
            timeLeft--;
            timeLeftSpan.textContent = timeLeft;
            if (timeLeft == 0){
                clearInterval(countdownTimer);
            }
        },1000)
        finalScore();
    })
} 
function finalScore(){
    clearInterval(countdownTimer);
    score = timeLeft;

    button1c.style.display = "none";
    button2c.style.display = "none";
    button3c.style.display = "none";
    button4c.style.display = "none";
    footerResult.style.display = "none";

    console.log(score);
    H1content.style.textAlign = "center";
    H1content.textContent = "All done!";
    H3content.style.display = "block";
    H3content.style.textAlign = "center";
    H3content.textContent = "Your final score is: " + score;
    initial.style.display = "block";
    btnSave.style.display = "block";
    

}
btnSave.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("highScore",JSON.stringify (score));
    localStorage.setItem("Name", JSON.stringify(initial.value));
    renderMessage();
})

function renderMessage(){
    initial.style.display = "none";
    btnSave.style.display = "none";
    startBtn.style.display = "none";
    H3content.textContent = "1. " + initalName + Point;
    H1content.textContent = "High Score";

}