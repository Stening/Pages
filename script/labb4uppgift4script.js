var uppgift4Knapp = document.getElementById("uppgift4button");



function menu() {
    var menuloop = false;
    var inputChoice = prompt("Type one the following options:\n0 : Exit menu\n1 : Farenheit to Celsius\n2 : Celsius to Farenheit\n3 : Guess the number");
    while (menuloop === false) {
        if (inputChoice === "0") {
            menuloop = true;
        }
        else if (inputChoice === "1") {
            farenHeitToCelsius();
            menuloop = true;
        }
        else if (inputChoice === "2") {
            celciusToFarenheit();
            menuloop = true;
        }
        else if (inputChoice === "3") {
            guessingGame();
            menuloop = true;
        }
        else {
            alert("Please enter a number between 0 and 3");
            menuloop = true;
        }
    }
}

uppgift4Knapp.onclick = menu;

function celciusToFarenheit() {
    var celciusToConvert = prompt("enter the number of degrees you want to convert to Farenheit");
    if (((isNaN(celciusToConvert) === false) && (celciusToConvert !== ""))) {
        var farenHeitResult = Math.floor(((celciusToConvert * 9) / 5) + 32);
        alert(celciusToConvert + " Celsius is " + farenHeitResult + " Farenheit");
    }
    else {
        alert("Please enter a number");
    }
}


function farenHeitToCelsius() {
    var farenHeitToConvert = prompt("enter the number of degrees you want to convert to Farenheit");
    if (((isNaN(farenHeitToConvert) === false) && (farenHeitToConvert !== ""))) {
        var celciusResult = Math.floor(((farenHeitToConvert - 32) * 5) / 9);
        alert(farenHeitToConvert + " Farenheit is " + celciusResult + " Celsius");
    }
    else {
        alert("Please enter a number");
    }
}
