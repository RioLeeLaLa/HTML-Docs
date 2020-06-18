var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
}

function weather_pics() {
    var Weather_Picture = [];
    Weather_Picture[1] = "Hail";
    Weather_Picture[2] = "Flood";
    Weather_Picture[3] = "Tornado";
    Weather_Picture[4] = "Lightning";
    Weather_Picture[5] = "Rain";
    document.getElementById("Weather").innerHTML = "In this picture, the weather is " +
        Weather_Picture[3] + ".";
}

//* Unable to get this section to work

function constant_function () {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"} ;
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>"+ X);

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();

// While loop

function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
        document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
