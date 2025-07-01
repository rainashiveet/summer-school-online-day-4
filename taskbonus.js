let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the second number"));

let operator = prompt("Enter operator: +, -, *, /");

switch(operator)
{
    case '+':
        alert(`The result is: ${num1+num2}`);
        break;

    case '-':
        alert(`The result is: ${num1-num2}`);
        break;

    case '*':
        alert(`The result is: ${num1*num2}`);
        break;

    case '/':
        alert(`The result is: ${num1/num2}`);
        break;

    default:
        alert(`Invalid Operator`);
}