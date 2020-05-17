function printDesc(weather){

var humidity ={


};
var temp = {



};
var age = 60;


var humidityLocal = localStorage.getItem("vOneLocalStorage");
var description;
var result;
var percent = 23;

humidity.value = weather.humidity;
temp.value = weather.temperature.value;

if(humidity.value< 33)
    humidity.prop = "low";
else if(humidity.value<66)
    humidity.prop = "med";
else
    humidity.prop = "high";


//Check if immunocompromised
if(document.getElementById('immuno').checked){
    console.log("comprimoseided");
} else 
    console.log("not compriomsieied");


humidity.result= " The humidity is ";
 humidity.prop + ". It is " + humidity.value;

 var humidityFactor = 35;
 var tempFactor = 15;
 var windFactor = 10;
var ageFactor = 40;

 var tempTemp = weather.temperature.value;

 var tempWind = weather.wind;

 if(weather.wind>30)
    tempWind = 30;
    

 if(weather.temperature.value <0)
 tempTemp = 0;
 else if(weather.temperature.value >30)
 tempTemp = 30;


let ageInfo = document.getElementById("cityAgeField").value;

var ageTemp = ageInfo;

 if(ageInfo<=19)
 ageTemp = 1.5;
 else if(ageInfo<=44)
 ageTemp = 6.5;
 else if(ageInfo<=54)
 ageTemp = 10.3;
 else if(ageInfo<=64)
 ageTemp = 10.1;
 else if(ageInfo<=74)
 ageTemp = 13.4;
 else if(ageInfo<=84)
 ageTemp = 13.6;
 else 
 ageTemp = 22;
    



if (humidity.value< 35){
  document.getElementById("suggestion").innerHTML += "Due to the drastically low humidity levels, ";
} else if (humidity.value<=55){
    document.getElementById("suggestion").innerHTML += "The humidity levels are at a moderately safe level. ";
}else {
    document.getElementById("suggestion").innerHTML += "Due to the drastically high humidity levels, ";
}

if (ageInfo === ""){
  window.alert("Please enter an age!");
}else if (ageInfo >= 80){
    document.getElementById("suggestion").innerHTML += "Please try to avoid going out to public places unless it is an emergency.";
}else if (ageInfo>=60){
      document.getElementById("suggestion").innerHTML += "Please try to avoid going out to public places unless absolutely necessary.";
}else if (ageInfo < 60 && humidity.prop.localeCompare("med")){
      document.getElementById("suggestion").innerHTML += "Please try to avoid going out to public places when possible. Remember to wear personal protective equipment such as face masks and gloves.";
}else {
      document.getElementById("suggestion").innerHTML += "Please try to avoid going out to public places when possible and you are more at risk to the current weather conditions. Remember to wear personal protective equipment such as face masks and gloves.";
}

 percent = humidityFactor*( 1- humidity.value/100) + tempFactor*(1-tempTemp/30 )
  + windFactor*(tempWind/30) + ageFactor*(ageTemp/22);


//description = "The weather is " + weather.description + humidity.result;

document.getElementById("humidityF").innerHTML = "<b>Humidity:</b> "+ Math.ceil(humidityFactor*(1-humidity.value/100)) + "% / "+ humidityFactor+"%" + " | " + "<b>"+ humidity.value + "%</b>";
document.getElementById("temper").innerHTML = "<b>Temperature:</b> "+ Math.ceil(tempFactor*(1-tempTemp/30 )) + "% / "+ tempFactor+"%" + " | " + "<b>"+weather.temperature.value + "°C" + "</b>";
document.getElementById("windF").innerHTML = "<b>Wind:</b> "+ Math.ceil(windFactor*(tempWind/30)) + "% / "+ windFactor+"%" + " | " + "<b>" + weather.wind +" km/h</b>";

document.getElementById("percent").innerHTML = "Covid-19 Risk: " + Math.ceil(percent) +"%";
document.getElementById("ageF").innerHTML ="<b>Age Factor out of 22.0:</b> "
+ ageTemp +", contributing "+"<b>" + Math.ceil(ageFactor*(ageTemp/22))  +"%"   + " / " + ageFactor+ "%</b>";
if(weather.temperature.value<5)
document.getElementById("thermImg").src = "cold.png";
else if(weather.temperature.value<15)
document.getElementById("thermImg").src = "green.png";
else
document.getElementById("thermImg").src = "hot.png";
}
