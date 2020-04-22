var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colors = generateRandomColors(numSquares);
var pickedColor = randomColor;
var displayMessage = document.getElementById("message");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
var h1 = document.querySelector("h1");

var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//var help = document.querySelector("#help");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            displayMessage.textContent = "Correct!";
            changeColors();
            h1.style.backgroundColor = pickedColor;
            resetBtn.textContent = "Play Again?";
        } else {
            displayMessage.textContent = "Try Again!";
            this.style.backgroundColor = "#232323";
        }
    });
}

function pickColor(){
     var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeColors(){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);   
    var g = Math.floor(Math.random() * 256);   
    var b = Math.floor(Math.random() * 256);
    return "rgb("+ r + ", " + g + ", " + b +")";   
    
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

resetBtn.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    displayMessage.textContent = "";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
        for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        displayMessage.textContent = "";
        h1.style.backgroundColor = "steelblue";
});

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
        for(var i = 0; i < squares.length; i++){
            if(colors[i]){
                squares[i].style.backgroundColor = colors[i];
            } else{
                squares[i].style.display = "none";
            }
        }
        displayMessage.textContent = "";
        h1.style.backgroundColor = "steelblue";
});
