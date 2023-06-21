//Core Learning 1: Temperature Convertor

let celsius = 30;
let fahrenheit=Math.round((celsius*9)/5)+32;
console.log('The temperature of ' + celsius + ' degrees of Celsius is equal to ' + fahrenheit + ' degrees of Fahrenheit.' ) // Output: The temperature of 30 degrees of Celsius is equal to 86 degrees of Fahrenheit.

//If I wanted to create a function, would it be correct?
//function tempConvertorFahr(Celsius) {
//   var fahrenheit=((Celsius*9)/5)+32;
//    return Math.round(fahrenheit);
//}

//tempConvertorFahr(30);


//Portfolio task 1: Temperature Convertor

var measure = prompt ("Enter F if you want to convert F to Celsius and K if you want to convert K to Celsius");
if (measure == "F") {
var F = prompt("Enter the temperature in Fahrenheit");
    var C =((F-32)*5/9);
    var a = prompt ("How many decimal places should be displayed?");
    C=C.toFixed(a);
    console.log(F + " degrees of Fahrenheit equals to " + C + " degrees of Celsius."); // Sample output: 60 degrees of Fahrenheit equals to 15.56 degrees of Celsius.
}
else if (measure== "K") {
var K = prompt("Enter the temperature in Kelvin");
    var c = (K-273.15);
    var b = prompt ("How many decimal places should be displayed?");
    c=c.toFixed(b);
    console.log(K + " degrees of Kelvin equals to " + c + " degrees of Celsius."); // Sample output: 100 degrees of Kelvin equals to -173 degrees of Celsius.
}
else {
    console.log ("Error"); // Output: Error
 }
