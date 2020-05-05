// Fonction de base

function multiply(number1, number2, number3)
{
    return number1*number2*number3; // Separer ce qu'il ce passe dans le corp de ma fonction du reste du code, si je déclare une variable dans la fonction elle restera enfermé dans les scopes et ne pourra pas etre utilisé ailleurs.
}

var x = 5;
var y = 7;

var result = multiply(x,y,x);
console.log(result);
