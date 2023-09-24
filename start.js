

window.alert("Hello fellow traveler! Welcome to Alexandria");
window.alert("Your Journey begins here. I will ask a serious of questions to get to know you");

let name = prompt("What is your name fellow traveler?");
window.alert("What a fine name " + name + "!");
document.getElementById("name").innerHTML = name;
 
let gender = prompt("What might your gender be, traveler " + "Please type male or female");
window.alert("I see you are a " + gender);
document.getElementById("gender").innerHTML = gender;


/*let name;
 document.getElementById("myButton").onclick = function(){
  
name = document.getElementById("myText").value;
window.alert("What a fine name " + name + "!");
document.getElementById("name").innerHTML = name;
 } */

let age = prompt("What is your age?");
age = Number(age);
{


if( age <= 18){
 window.alert("You are quite young fellow traveler! You must be quite strong to start at such a young age");

} else{
  window.alert("Splendid! Age is just a number anyone can become an adventurer!");
 
}

}

const RACE = prompt("Please select your race \n Options: \n -Human \n -Dwarf \n -Elf \n -Beastmen \n -Halfling \n -Fairy").toLowerCase();
let ageType;

switch (RACE){

case "human":
    ageType = age;
    window.alert("You are a Human! Goodluck out there Human's have it the hardest, but are the most customizable");
    document.getElementById("race").innerHTML = RACE;
    document.getElementById("ageRace").innerHTML = RACE;
    document.getElementById("raceAge").innerHTML = age;
    document.getElementById("conversion").innerHTML = "Your age is your age";
    document.getElementById("age").innerHTML = age;
break;

case "dwarf":
    ageType = age + 5; 
    window.alert("You are a Dwarf! Dwarf's are amazing craftmen");
    document.getElementById("race").innerHTML = RACE;
     document.getElementById("ageRace").innerHTML = RACE;
     document.getElementById("raceAge").innerHTML = ageType;
     document.getElementById("conversion").innerHTML = "age: "+ "("+ age +")"+" + 5 years";
     document.getElementById("age").innerHTML ="real age: "+ age+ "/ Dwarf age: "+ ageType;
break;

case "elf":
    ageType =  age *3;
    window.alert("You are an Elf! Elf's are crazy sharpshooters and are amazing with any projectile weopon");
    document.getElementById("race").innerHTML = RACE;
     document.getElementById("ageRace").innerHTML = RACE;
     document.getElementById("raceAge").innerHTML = ageType;
     document.getElementById("conversion").innerHTML ="age: "+ "("+ age +")"+" times 3";
     document.getElementById("age").innerHTML ="real age: "+ age+ "/ Elf age: "+ ageType;
break;

case "beastmen":
    ageType=   age * 2;
    window.alert("You are a Beastmen! So cool your a beastmen, beastmen have amazing stamina and dexterity");
    document.getElementById("race").innerHTML = RACE;
     document.getElementById("ageRace").innerHTML = RACE;
     document.getElementById("raceAge").innerHTML = ageType;
     document.getElementById("conversion").innerHTML = "age: "+"("+ age +")"+" times 2";
     document.getElementById("age").innerHTML ="real age: "+ age+"/ Beastmen age: "+ ageType;
break;

case "halfling":
    ageType=   age * 5;
    window.alert("What your a halfling? thats extremely rare. Half human Half demon! having amazing mana reserves plus being extremely customizable");
    document.getElementById("race").innerHTML = RACE;
     document.getElementById("ageRace").innerHTML = RACE;
     document.getElementById("raceAge").innerHTML = ageType;
     document.getElementById("conversion").innerHTML = "age: "+ "("+ age +")"+" times 5";
     document.getElementById("age").innerHTML ="real age: "+age+ "/ Halfling age: "+ ageType;
break;

case "fairy":
    ageType=  age * 4;
    window.alert("Wow a fairy! You might be weak in indurance but your mana reserves are out of this world");
     document.getElementById("ageRace").innerHTML = RACE;
      document.getElementById("race").innerHTML = RACE;
      document.getElementById("raceAge").innerHTML = ageType;
      document.getElementById("conversion").innerHTML = "age: "+ "("+ age +")"+" times 4";
      document.getElementById("age").innerHTML ="real age: "+ age+ "/ Fairy age: " +ageType;
break;
}




