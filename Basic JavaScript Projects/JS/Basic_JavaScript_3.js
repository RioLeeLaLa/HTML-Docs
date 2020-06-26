window.alert(Math.random());

//++ --
var X = 5;
X++;
document.write(X);

var X = 5.25;
X--;
document.write(X);

// +, - , *
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math1").innerHTML = "1 plus 2, multiplied by 10, divided in half then subtracted by 5 equals" + simple_Math;
}

//%
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math2").innerHTML = "When you divide 25 by 6 you have a remainder of " + simple_Math;
}