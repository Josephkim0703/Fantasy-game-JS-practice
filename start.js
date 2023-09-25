
window.alert("Hello fellow traveler! Welcome to Alexandria");
window.alert("Your Journey begins here. I will ask a serious of questions to get to know you");

let name = prompt("What is your name fellow traveler?");
window.alert("What a fine name " + name + "!");
document.getElementById("name").innerHTML = name;
 
let gender = prompt("What might your gender be, traveler " + "Please type male or female");
window.alert("I see you are a " + gender);
document.getElementById("gender").innerHTML = gender;




let age = prompt("What is your age?");
age = Number(age);
{


if( age <= 18){
 window.alert("You are quite young fellow traveler! You must be quite strong to start at such a young age");

} else{
  window.alert("Splendid! Age is just a number anyone can become an adventurer!");
 
}

}
window.alert("Traveler you will now be given a random race \n Options: \n -Human \n -Dwarf \n -Elf \n -Beastmen \n RARE: Halfling");

let RACE = Math.floor(Math.random() * 5) + 1;
let ageType;

switch (RACE){

case 1 :
    ageType = age;
    window.alert("You are a Human! Goodluck out there Human's have it the hardest, but are the most customizable");
    document.getElementById("race").innerHTML = "Human";
    document.getElementById("ageRace").innerHTML = "Human";
    document.getElementById("raceAge").innerHTML = age;
    document.getElementById("conversion").innerHTML = "No conversion";
    document.getElementById("age").innerHTML = age;
break;

case 2 :
    ageType = age + 5; 
    window.alert("You are a Dwarf! Dwarf's have high crafting and gathering skills");
    document.getElementById("race").innerHTML = "Dwarf";
     document.getElementById("ageRace").innerHTML = "Dwarf";
     document.getElementById("raceAge").innerHTML = ageType;
     document.getElementById("conversion").innerHTML = "age: "+ "("+ age +")"+" + 5 years";
     document.getElementById("age").innerHTML ="Age: "+ age+ "/ Dwarf age: "+ ageType;
break;

case 3 :
    ageType =  age *3;
    window.alert("You are an Elf! Elf's are crazy sharpshooters and are amazing with any projectile weopon");
    document.getElementById("race").innerHTML = "Elf";
     document.getElementById("ageRace").innerHTML = "Elf";
     document.getElementById("raceAge").innerHTML = ageType;
     document.getElementById("conversion").innerHTML ="age: "+ "("+ age +")"+" times 3";
     document.getElementById("age").innerHTML ="Age: "+ age+ "/ Elf age: "+ ageType;
break;

case 4 :
    ageType=   age * 2;
    window.alert("You are a Beastmen! So cool your a beastmen, beastmen have amazing stamina and dexterity");
    document.getElementById("race").innerHTML = "Beastmen";
     document.getElementById("ageRace").innerHTML = "Beastmen";
     document.getElementById("raceAge").innerHTML = ageType;
     document.getElementById("conversion").innerHTML = "age: "+"("+ age +")"+" times 2";
     document.getElementById("age").innerHTML ="Age: "+ age+"/ Beastmen age: "+ ageType;
break;

case 5 :
    ageType=   age * 5;
    window.alert("What your a halfling? thats extremely rare. Half human Half demon! having amazing mana reserves plus being extremely customizable");
    document.getElementById("race").innerHTML = "Halfling";
     document.getElementById("ageRace").innerHTML = "Halfling";
     document.getElementById("raceAge").innerHTML = ageType;
     document.getElementById("conversion").innerHTML = "age: "+ "("+ age +")"+" times 5";
     document.getElementById("age").innerHTML ="Age: "+age+ "/ Halfling age: "+ ageType;
break;

}

window.alert("You will now be given a random class \n Options: \n -Warrior \n -Archer \n -Mage \n -Healer \n -Assassin \n -Barbarian \n -Craftsmen \n RARE: Archetype");

let cL = Math.floor(Math.random() * 8) + 1;

 switch (cL){
   
case 1:
    window.alert("Congradulation you're a Warrior! You are skilled with melee weapons and hand to hand combat but have no mana");
     document.getElementById("cL").innerHTML = "Warrior";
     document.getElementById("cc").innerHTML = "Warrior";
     document.getElementById("classImg").src = "./assets/warrior.png";
break;

case 2:
    window.alert("Congradulation you're an Archer! You are skilled with projectile weapons but lack skills with melee weapons");
    document.getElementById("cL").innerHTML = "Archer";
    document.getElementById("cc").innerHTML = "Archer";
    document.getElementById("classImg").src = "./assets/archer.png";
break;

case 3:
    window.alert("Congradulation you're a Mage! You are skilled at mage craft but lack in stamina and durability");
    document.getElementById("cL").innerHTML = "Mage";
    document.getElementById("cc").innerHTML = "Mage";
    document.getElementById("classImg").src = "./assets/mage.png";
break;

case 4:
    window.alert("Congradulation you're a Healer! You are skilled at healing and self regeneration but lack in fighting skills");
    document.getElementById("cL").innerHTML = "Healer";
    document.getElementById("cc").innerHTML = "Healer";
    document.getElementById("classImg").src = "./assets/healer.png";
break;

case 5:
    window.alert("Congradulation you're a Assassin! You are extremely stealthy and can mimic other classes for a short period of time but lack raw power and durability");
    document.getElementById("cL").innerHTML = "Assassin";
    document.getElementById("cc").innerHTML = "Assassin";
    document.getElementById("classImg").src = "./assets/assassin.png";
break;

case 6:
    window.alert("Oh no your a Barbarian! You have extreme power and dexerity but your stats cap lower then all classes");
    document.getElementById("cL").innerHTML = "Barbarian";
    document.getElementById("cc").innerHTML = "Barbarian";
    document.getElementById("classImg").src = "./assets/barbarian.png";
break;

case 7:
    window.alert("Interesting you are a Craftsmen! You have amazing crafting skills can dabble into all class type skills but lack in stamina and mana");
    document.getElementById("cL").innerHTML = "Craftsmen";
    document.getElementById("cc").innerHTML = "Craftsmen";
    document.getElementById("classImg").src = "./assets/craftsmen.png";
break;

case 8:
    window.alert("Wow this is the Rarest Class an Archetype! You have the capability of maxing out every stat category but your path will be the hardest");
    document.getElementById("cL").innerHTML = "Archetype";
    document.getElementById("cc").innerHTML = "Archetype";
    document.getElementById("classImg").src = "./assets/archetype.png";
break;


}
