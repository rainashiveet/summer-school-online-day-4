let fullName = prompt("Enter the name");
let age = prompt("Enter the age");

if(age<18)
{
    alert(`Hey ${fullName}, you're a teen!`);
}
else if(age>=18 && age<60)
{
    alert(`Welcome ${fullName}, you're an adult!`);
}
else
{
    alert(`Hello ${fullName}, you're a senior citizen!`);
}