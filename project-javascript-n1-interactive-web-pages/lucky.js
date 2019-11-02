/* Generate random number between 1 to 10*/
function randomNumber(){
    const luckyNumber = Math.floor(Math.random()*10)+1;
    console.log(luckyNumber);
    alert(`Your lucky number is ${luckyNumber}`);
}

/* Display Banner */
function div_show() {
    document.getElementById('abc').style.display = "block";
}

/* Lucky Guess */
function guessNumber() {
    const randomNum = Math.floor(Math.random()*10)+1;
    console.log(randomNum);
    const userInput = prompt("Enter a number between 1 to 10.");
    console.log(userInput);
        if (userInput === "") {
            alert(`Enter a number between 1 to 10.`);
        }else if (userInput < 1 || userInput > 10 ){
              alert('Number entered is outside the range.')
        }else if(userInput == randomNum){
              alert(`You Won!`);
        }else{
             alert(`You Lost!`);
             }
    setTimeout(div_show(),10000);
}

/* Hide Banner */
function div_hide(){
    document.getElementById('abc').style.display = "none";
}

