function show(){
  var name=prompt("Enter your name");
var car=prompt("What car do you prefer to drive between a subaru and a toyota?");
 var pet=prompt("What pet do you have between a cat and a dog ");
 var home=prompt("Where do you live between nairobi and mombasa");
 var cars=car.toLowerCase();
 var pets=pet.toLowerCase();
 var homes=home.toLowerCase();
 if(cars==="subaru" && pets==="cat" && homes==="nairobi"){
   alert(name+" "+"You are rich");
 }else if(cars==="toyota" && pets==="dog" && homes==="mombasa"){
   alert(name+" "+"Your middle class");
 }
}
