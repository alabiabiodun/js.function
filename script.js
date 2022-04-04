var operator = prompt("Plesese, enter the operation to perform (e.g. +, -, *, /): ");

if (operator === '+'){
    var firstNumber = Number(prompt("Enter the first number: "));
    var secondNumber = Number(prompt("Enter the second number: "));
    alert("The sum of the two numbers is: " + add(firstNumber,secondNumber));
}else if (operator === '-'){
    var firstNumber = Number(prompt("Enter the first number: "));
    var secondNumber = Number(prompt("Enter the second number: "));
    alert("The absolute difference between the two numbers is: " + subtract(firstNumber,secondNumber));
}else if (operator === '*'){
    var firstNumber = Number(prompt("Enter the first number: "));
    var secondNumber = Number(prompt("Enter the second number: "));
    alert("The product of the two numbers is: " + multiply(firstNumber,secondNumber));
}else if (operator === '/'){
    var firstNumber = Number(prompt("Enter the first number: "));
    var secondNumber = Number(prompt("Enter the second number: "));
    alert("The quotient of the two numbers is: " + divide(firstNumber,secondNumber));
}else if (operator !== '+' || operator !== '-' || operator !== '*' || operator !== '/'){
    alert("Invalid Input");    
}else{
    alert("Invalid Input");
}


function add(firstNumber,secondNumber){
    var sum = firstNumber + secondNumber;
    return sum;
}


function subtract(firstNumber,secondNumber){
    var diff = Math.abs(secondNumber - firstNumber);
    return diff;
}


function multiply(firstNumber,secondNumber){
    var prod = firstNumber * secondNumber ;
    return prod;
}


function divide(firstNumber,secondNumber){
    var div = firstNumber / secondNumber ;
    return div;
}