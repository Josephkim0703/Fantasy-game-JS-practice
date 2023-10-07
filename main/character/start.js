
document.querySelector('.answers').style.display = "none";
document.querySelector(".fade").style.opacity = 1;
//Name uppercases the first letter
let RACE;
let cL;
let gender;
let age;
let name;
let dialogues;
let currentDialogueIndex;

let humanHealth;
let humanStrength;
let humanAim;
let humanStamina;
let humanMana;
let humanDexterity;
let humanIntelligence;

let health; 
let strength;
let aim ;
let stamina ;
let mana;
let dexterity;
let intelligence;

let dialogContent = document.getElementById('dialog-content');
      
    dialogues = [
        "Hello there traveler!",
        "Welcome to Alexadria!",
        "Are you ready to embark on your journey?",
        "I will ask a serious of questions to get to know you",
        "What is your name fellow traveler?",
    ];

    currentDialogueIndex = 0;
  
    function showDialogue() {
        if(currentDialogueIndex < dialogues.length) {
            dialogContent.innerHTML = dialogues[currentDialogueIndex];
            currentDialogueIndex++;
            console.log(currentDialogueIndex);
           
        if(currentDialogueIndex >= 5) {
            nameMaker()
        } 

        if(currentDialogueIndex >= 6) {
            document.querySelector('.answers').style.display = "none";
            document.getElementById('text-input').value = "";
            dialogues.push(`What is your gender? Male or Female`);

            if(currentDialogueIndex >= 7) {
                dialogues.pop();
                genderMaker();  
            }
        } 
           
        if(currentDialogueIndex >= 8) {
            document.querySelector('.answers').style.display = "none";
            document.getElementById('text-input').value = "";
            dialogues.push(`Now what might you age be ${name}?`);

            if(currentDialogueIndex >= 9) {
                dialogues.pop()
                ageMaker();  
            }
        }

        if(currentDialogueIndex >= 10) {
            document.querySelector('.answers').style.display = "none";
            dialogues.push("Traveler you will now be given a random race!")
        }
        
        if(currentDialogueIndex >= 11) {
            dialogues.pop()
            dialogues.push("The Options are: Human / Dwarf / Elf / Beastmen / RARE: Halfling");
        }

        if(currentDialogueIndex >= 12) {
            dialogues.pop()
            raceMaker();
                 
            if(RACE == 1){                       
                dialogues.push("You are a Human! Goodluck out there Human's have it the hardest\nHumans start out with 5 less stats in every category then other races");
            }else if(RACE == 2){                     
                dialogues.push("You are a Dwarf! Dwarf's give +2 dexterity and  intelligence");
            }else if(RACE == 3){                     
                    dialogues.push("You are an Elf! Elf's give +2 aim and stamina");
            }else if(RACE == 4){                     
                    dialogues.push("You are a Beastmen! Beastmen give +2 stamina and strength");
            }else if(RACE == 5){
                    dialogues.push("What your a halfling? Thats extremely rare, Half human Half demon!\nHalfling gives +1 everything and +2 mana and strength");
            }
        }

        if(currentDialogueIndex >= 13) {
            dialogues.pop()
        }
    }
}


    document.addEventListener('keydown', function(event) {
        if (event.key === "1") {
            showDialogue();
        }
    });

    showDialogue();
    
function nameMaker() {
do{
    document.querySelector('.answers').style.display = "block";
    document.getElementById("aButton").onclick = function() {
    name = document.getElementById("text-input").value; 
    name = name.toLowerCase();
    let firstLetter = name.slice(0, 1);
    firstLetter = firstLetter.toUpperCase();
    name = firstLetter + name.slice(1); 
if(name){
    dialogues.push(`What a fine name ${name}!`);
    document.getElementById("name").innerHTML = name;
    document.querySelector('.answers').style.display = "none";
}else{
    window.alert("ERROR! Please input a Valid name!");
}
}
}while(name == "");
}
//Gender loop for when someone types something other then male or female
function genderMaker() {  
do{
    document.querySelector('.answers').style.display = "block";
    document.getElementById("aButton").onclick = function() {
    gender =  document.getElementById("text-input").value; 
    gender = gender.toLowerCase();
if (gender === "male" || gender === "female") {
    document.querySelector('.answers').style.display = "none";
    dialogues.push(`I see you are a ${gender}`);
    document.getElementById("gender").innerHTML = gender;
}else{
    window.alert("INVALID ENTRY!");
}
}
}while( gender == "");
}
//Age loop if someone doesnt type a number
function ageMaker() {
do{
    document.querySelector('.answers').style.display = "block";
    document.getElementById("aButton").onclick = function() {
    age =  document.getElementById("text-input").value; 
    age = Number(age);
if(age > 0 && age <= 100){
    document.querySelector('.answers').style.display = "none";
if( age <= 18){
    dialogues.push("Starting your journey young I see! You must be quite strong to start at such a young age");
}else{
    dialogues.push("Splendid! What a great age to start!"); 
}
}else{
    window.alert("ERROR! Must be a Valid Age!");
}
 }
}while(age == "");

}
//Race generator
function raceMaker(){
RACE = Math.floor(Math.random() * 5) + 1;

let ageType;
 
switch (RACE){

case 1 :
    ageType = age;
    
    document.getElementById("race").innerHTML = "Human";
    document.getElementById("ageRace").innerHTML = "Human";
    document.getElementById("raceAge").innerHTML = age;
    document.getElementById("conversion").innerHTML = "No conversion";
    document.getElementById("age").innerHTML = age;
break;

case 2 :
    ageType = age + 5; 
 
    document.getElementById("race").innerHTML = "Dwarf";
     document.getElementById("ageRace").innerHTML = "Dwarf";
     document.getElementById("raceAge").innerHTML = ageType;
     document.getElementById("conversion").innerHTML = "age: "+ "("+ age +")"+" + 5 years";
     document.getElementById("age").innerHTML ="Age: "+ age+ "/ Dwarf age: "+ ageType;
break;

case 3 :
    ageType =  age *3;
   
    document.getElementById("race").innerHTML = "Elf";
     document.getElementById("ageRace").innerHTML = "Elf";
     document.getElementById("raceAge").innerHTML = ageType;
     document.getElementById("conversion").innerHTML ="age: "+ "("+ age +")"+" times 3";
     document.getElementById("age").innerHTML ="Age: "+ age+ "/ Elf age: "+ ageType;
break;

case 4 :
    ageType=   age * 2;
 
    document.getElementById("race").innerHTML = "Beastmen";
     document.getElementById("ageRace").innerHTML = "Beastmen";
     document.getElementById("raceAge").innerHTML = ageType;
     document.getElementById("conversion").innerHTML = "age: "+"("+ age +")"+" times 2";
     document.getElementById("age").innerHTML ="Age: "+ age+"/ Beastmen age: "+ ageType;
break;

case 5 :
    ageType=   age * 5;
   
    document.getElementById("race").innerHTML = "Halfling";
     document.getElementById("ageRace").innerHTML = "Halfling";
     document.getElementById("raceAge").innerHTML = ageType;
     document.getElementById("conversion").innerHTML = "age: "+ "("+ age +")"+" times 5";
     document.getElementById("age").innerHTML ="Age: "+age+ "/ Halfling age: "+ ageType;
break;
}
}
/*
function classMaker(){
//Class generator
window.alert("You will now be given a random class \n Options: \n -Warrior \n -Archer \n -Mage \n -Healer \n -Assassin \n -Barbarian \n -Craftsmen \n RARE: Archetype");
const cL = Math.floor(Math.random() * 8) + 1;

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
    window.alert("Oh no your a Barbarian! You have extreme power and dexerity but you lack intelligence");
    document.getElementById("cL").innerHTML = "Barbarian";
    document.getElementById("cc").innerHTML = "Barbarian";
    document.getElementById("classImg").src = "./assets/barbarian.png";
break;

case 7:
    window.alert("Interesting you are a Craftsmen! You have amazing crafting skills but lack in stamina and mana");
    document.getElementById("cL").innerHTML = "Craftsmen";
    document.getElementById("cc").innerHTML = "Craftsmen";
    document.getElementById("classImg").src = "./assets/craftsmen.png";
break;

case 8:
    window.alert("Wow this is the Rarest Class an Archetype! \nYou are given +5 in health, strength and aim and +10 in stamina, mana, dexterity, and intelligence");
    document.getElementById("cL").innerHTML = "Archetype";
    document.getElementById("cc").innerHTML = "Archetype";
    document.getElementById("classImg").src = "./assets/archetype.png";
break;
    }
}

//Stat generator takes race and class type and generates stats based on that combination
//40 different combination types
function statMaker(){

if(RACE === 1){
    humanHealth = 10;
    humanStrength = 5;
    humanAim = 5;
    humanStamina = 10;
    humanMana = 5;
    humanDexterity = 5;
    humanIntelligence = 10;
    
    //human + warrior
    if(RACE === 1 && cL === 1){
        humanStrength = humanStrength + 3;
        humanAim = 0;
        humanStamina = humanStamina + 3;
        humanMana = 0;
        humanDexterity = humanDexterity + 1;
        humanIntelligence = humanIntelligence;
    
      document.getElementById("health").innerHTML = "Health: "+ humanHealth;
      document.getElementById("strength").innerHTML = "Strength: "+ humanStrength;
      document.getElementById("aim").innerHTML = "Aim: " + humanAim;
      document.getElementById("stamina").innerHTML = "Stamina: "+ humanStamina;
      document.getElementById("mana").innerHTML = "Mana: " + humanMana;
      document.getElementById("dexterity").innerHTML = "Dexterity: "+ humanDexterity;
      document.getElementById("intelligence").innerHTML = "Intelligence: "+ humanIntelligence;
    
    }
    
    //human + archer
    else if(RACE === 1 && cL === 2){
        humanStrength = humanStrength + 1;
        humanAim = humanAim + 6;
        humanStamina = humanStamina + 1;
        humanMana = 0;
        humanDexterity = humanDexterity;
        humanIntelligence = humanIntelligence + 5;
    
        document.getElementById("health").innerHTML = "Health: "+ humanHealth;
        document.getElementById("strength").innerHTML = "Strength: "+ humanStrength;
        document.getElementById("aim").innerHTML = "Aim: "+ humanAim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ humanStamina;
        document.getElementById("mana").innerHTML = "Mana: "+ humanMana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ humanDexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ humanIntelligence; 
    }
    
    //human + mage
    else if(RACE === 1 && cL === 3){
        humanStrength = humanStrength;
        humanAim = humanAim + 3;
        humanStamina = humanStamina - 2;
        humanMana = humanMana + 6;
        humanDexterity = humanDexterity + 1;
        humanIntelligence = humanIntelligence + 5;
    
        document.getElementById("health").innerHTML = "Health: "+ humanHealth;
        document.getElementById("strength").innerHTML = "Strength: "+ humanStrength;
        document.getElementById("aim").innerHTML = "Aim: "+ humanAim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ humanStamina;
        document.getElementById("mana").innerHTML = "Mana: "+ humanMana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ humanDexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ humanIntelligence; 
    }
    
    //human + healer
    else if(RACE === 1 && cL === 4){
        humanStrength = humanStrength - 3;
        humanAim = humanAim + 1;
        humanStamina = humanStamina - 3;
        humanMana = humanMana + 3;
        humanDexterity = humanDexterity;
        humanIntelligence = humanIntelligence + 5;
    
        document.getElementById("health").innerHTML = "Health: "+ humanHealth;
        document.getElementById("strength").innerHTML = "Strength: "+ humanStrength;
        document.getElementById("aim").innerHTML = "Aim: "+ humanAim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ humanStamina;
        document.getElementById("mana").innerHTML = "Mana: "+ humanMana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ humanDexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ humanIntelligence;
    }
    
    //human + assassin
    else if(RACE === 1 && cL === 5){
        humanStrength = humanStrength;
        humanAim = humanAim + 2;
        humanStamina = humanStamina + 5;
        humanMana = 0;
        humanDexterity = humanDexterity + 6;
        humanIntelligence = humanIntelligence + 6;
    
        document.getElementById("health").innerHTML = "Health: "+ humanHealth;
        document.getElementById("strength").innerHTML = "Strength: "+ humanStrength;
        document.getElementById("aim").innerHTML = "Aim: "+ humanAim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ humanStamina;
        document.getElementById("mana").innerHTML = "Mana: "+ humanMana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ humanDexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ humanIntelligence; 
    }
    
    //human + barbarian
    else if(RACE === 1 && cL === 6){
        humanStrength = humanStrength + 5;
        humanAim = 0;
        humanStamina = humanStamina + 6;
        humanMana = 0;
        humanDexterity = humanDexterity + 1;
        humanIntelligence = humanIntelligence - 5;
    
        document.getElementById("health").innerHTML = "Health: "+ humanHealth;
        document.getElementById("strength").innerHTML = "Strength: "+ humanStrength;
        document.getElementById("aim").innerHTML = "Aim: " + humanAim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ humanStamina;
        document.getElementById("mana").innerHTML = "Mana: " + humanMana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ humanDexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ humanIntelligence;
    }
    
    //human + craftsmen
    else if(RACE === 1 && cL === 7){
        humanStrength = humanStrength - 2;
        humanAim = 0;
        humanStamina = humanStamina + 2;
        humanMana = humanMana + 2;
        humanDexterity = humanDexterity + 7;
        humanIntelligence = humanIntelligence + 5;
    
        document.getElementById("health").innerHTML = "Health: "+ humanHealth;
        document.getElementById("strength").innerHTML = "Strength: "+ humanStrength;
        document.getElementById("aim").innerHTML = "Aim: "+ humanAim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ humanStamina;
        document.getElementById("mana").innerHTML = "Mana: "+ humanMana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ humanDexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ humanIntelligence;
    }
    
    //human + archetype
    else if(RACE === 1 && cL === 8){
        humanHealth = humanHealth + 5;
        humanStrength = humanStrength + 5;
        humanAim = humanAim + 5;
        humanStamina = humanStamina + 10;
        humanMana = humanMana + 10;
        humanDexterity = humanDexterity + 10;
        humanIntelligence = humanIntelligence + 10;
    
        document.getElementById("health").innerHTML = "Health: "+ humanHealth;
        document.getElementById("strength").innerHTML = "Strength: "+ humanStrength;
        document.getElementById("aim").innerHTML = "Aim: "+ humanAim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ humanStamina;
        document.getElementById("mana").innerHTML = "Mana: "+ humanMana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ humanDexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ humanIntelligence;
    }
    
    }else{
    //stat randomizer takes race + class and creates basic stats for dwarf, elf, beastmen, halfling
    
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    health = randomNumber(15, 20); 
    strength = randomNumber(10, 15); 
    aim = randomNumber(10, 15); 
    stamina = randomNumber(15, 20); 
    mana = randomNumber(10, 15);
    dexterity = randomNumber(10, 15);
    intelligence = randomNumber(15, 20);
    
    //dwarfs give +2 dexterity and  intelligence
    //dwarf + warrior
    if(RACE === 2 && cL === 1){
        health = health;
        strength = strength + 3;
        aim = 0;
        stamina = stamina + 3;
        mana = 0;
        dexterity = dexterity + 3;
        intelligence = intelligence + 2;
    
        document.getElementById("description").innerHTML = "Dwarfs give +2 dexterity and intelligence";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //dwarf + archer
    else if(RACE === 2 && cL === 2){
        health = health;
        strength = strength + 1;
        aim = aim + 6;
        stamina = stamina + 1;
        mana = 0;
        dexterity = dexterity + 2;
        intelligence = intelligence + 7;
    
        document.getElementById("description").innerHTML = "Dwarfs give +2 dexterity and intelligence";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //dwarf + mage
    else if(RACE === 2 && cL === 3){
        health = health;
        strength = strength;
        aim = aim + 3;
        stamina = stamina - 2;
        mana = mana + 6;
        dexterity = dexterity + 2;
        intelligence = intelligence + 7;
    
        document.getElementById("description").innerHTML = "Dwarfs give +2 dexterity and intelligence";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;    
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //dwarf + healer
    else if(RACE === 2 && cL === 4){
        health = health;
        strength = strength - 3;
        aim = aim + 1;
        stamina = stamina - 3;
        mana = mana + 3;
        dexterity = dexterity + 3;
        intelligence = intelligence + 3;
    
        document.getElementById("description").innerHTML = "Dwarfs give +2 dexterity and intelligence";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //dwarf + assassin
    else if(RACE === 2 && cL === 5){
        health = health;
        strength = strength;
        aim = aim + 2;
        stamina = stamina + 5;
        mana = 0;
        dexterity = dexterity + 8;
        intelligence = intelligence + 8;
    
        document.getElementById("description").innerHTML = "Dwarfs give +2 dexterity and intelligence";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //dwarf + barbarian
    else if(RACE === 2 && cL === 6){
        health = health;
        strength = strength + 5;
        aim = 0;
        stamina = stamina + 6;
        mana = 0;
        dexterity = dexterity + 3;
        intelligence = intelligence -3;
    
        document.getElementById("description").innerHTML = "Dwarfs give +2 dexterity and intelligence";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //dwarf + craftsmen
    else if(RACE === 2 && cL === 7){
        health = health;
        strength = strength - 2;
        aim = 0;
        stamina = stamina + 2;
        mana = mana + 2;
        dexterity = dexterity + 9;
        intelligence = intelligence + 7;
    
        document.getElementById("description").innerHTML = "Dwarfs give +2 dexterity and intelligence";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //dwarf + archetype
    else if(RACE === 2 && cL === 8){
        health = health + 5;
        strength = strength + 5;
        aim = aim + 5;
        stamina = stamina + 10;
        mana = mana + 10;
        dexterity = dexterity + 12;
        intelligence = intelligence + 12;
    
        document.getElementById("description").innerHTML = "Dwarfs give +2 dexterity and intelligence";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //elfs give +2 aim and stamina
    //elf + warrior
    else if(RACE === 3 && cL === 1){
        health = health;
        strength = strength + 3;
        aim =  2;
        stamina = stamina + 5;
        mana = 0;
        dexterity = dexterity + 1;
        intelligence = intelligence;
    
        document.getElementById("description").innerHTML = "Elfs give +2 aim and stamina";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //elf + archer
    else if(RACE === 3 && cL === 2){
        health = health;
        strength = strength + 1;
        aim = aim + 8;
        stamina = stamina + 3;
        mana = 0;
        dexterity = dexterity;
        intelligence = intelligence + 5;
    
        document.getElementById("description").innerHTML = "Elfs give +2 aim and stamina";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //elf + mage
    else if(RACE === 3 && cL === 3){
        health = health;
        strength = strength;
        aim = aim + 5;
        stamina = stamina;
        mana = mana + 6;
        dexterity = dexterity;
        intelligence = intelligence + 5;
    
        document.getElementById("description").innerHTML = "Elfs give +2 aim and stamina";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //elf + healer
    else if(RACE === 3 && cL === 4){
        health = health;
        strength = strength - 3;
        aim = aim + 3;
        stamina = stamina - 1;
        mana = mana + 3;
        dexterity = dexterity + 1;
        intelligence = intelligence + 1;
    
        document.getElementById("description").innerHTML = "Elfs give +2 aim and stamina";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //elf + assassin
    else if(RACE === 3 && cL === 5){
        health = health;
        strength = strength;
        aim = aim + 4;
        stamina = stamina + 7;
        mana = 0;
        dexterity = dexterity + 6;
        intelligence = intelligence + 6;
    
        document.getElementById("description").innerHTML = "Elfs give +2 aim and stamina";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //elf + barbarian
    else if(RACE === 3 && cL === 6){
        health = health;
        strength = strength + 5;
        aim = 2;
        stamina = stamina + 8;
        mana = 0;
        dexterity = dexterity + 1;
        intelligence = intelligence -5;
    
        document.getElementById("description").innerHTML = "Elfs give +2 aim and stamina";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //elf + craftsmen
    else if(RACE === 3 && cL === 7){
        health = health;
        strength = strength - 2;
        aim = 2;
        stamina = stamina + 4;
        mana = mana + 2;
        dexterity = dexterity + 7;
        intelligence = intelligence + 5;
    
        document.getElementById("description").innerHTML = "Elfs give +2 aim and stamina";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //elf + archetype
    else if(RACE === 3 && cL === 8){
        health = health + 5;
        strength = strength + 5;
        aim = aim + 7;
        stamina = stamina + 12;
        mana = mana + 10;
        dexterity = dexterity + 10;
        intelligence = intelligence + 10;
    
        document.getElementById("description").innerHTML = "Elfs give +2 aim and stamina";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //beastmen give +2 stamina and strength
    //beastmen + warrior
    else if(RACE === 4 && cL === 1){
        health = health;
        strength = strength + 5;
        aim = 0;
        stamina = stamina + 5;
        mana = 0;
        dexterity = dexterity + 1;
        intelligence = intelligence;
    
        document.getElementById("description").innerHTML = "Beastmen give +2 stamina and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //beastmen + archer
    else if(RACE === 4 && cL === 2){
        health = health;
        strength = strength + 3;
        aim = aim + 6;
        stamina = stamina + 3;
        mana = 0;
        dexterity = dexterity;
        intelligence = intelligence + 5;
    
        document.getElementById("description").innerHTML = "Beastmen give +2 stamina and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //beastmen + mage
    else if(RACE === 4 && cL === 3){
        health = health;
        strength = strength + 2;
        aim = aim + 3;
        stamina = stamina;
        mana = mana + 6;
        dexterity = dexterity;
        intelligence = intelligence + 5;
    
        document.getElementById("description").innerHTML = "Beastmen give +2 stamina and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity; 
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //beastmen + healer
    else if(RACE === 4 && cL === 4){
        health = health;
        strength = strength - 1;
        aim = aim + 1;
        stamina = stamina - 1;
        mana = mana + 3;
        dexterity = dexterity + 1;
        intelligence = intelligence + 1;
    
        document.getElementById("description").innerHTML = "Beastmen give +2 stamina and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //beastmen + assassin
    else if(RACE === 4 && cL === 5){
        health = health;
        strength = strength + 2;
        aim = aim + 2;
        stamina = stamina + 7;
        mana = 0;
        dexterity = dexterity + 6;
        intelligence = intelligence + 6;
    
        document.getElementById("description").innerHTML = "Beastmen give +2 stamina and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //beastmen + barbarian
    else if(RACE === 4 && cL === 6){
        health = health;
        strength = strength + 7;
        aim = 0;
        stamina = stamina + 8;
        mana = 0;
        dexterity = dexterity + 1;
        intelligence = intelligence -5;
    
        document.getElementById("description").innerHTML = "Beastmen give +2 stamina and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //beastmen + craftsmen
    else if(RACE === 4 && cL === 7){
        health = health;
        strength = strength;
        aim = 0;
        stamina = stamina + 4;
        mana = mana + 2;
        dexterity = dexterity + 7;
        intelligence = intelligence + 5;
    
        document.getElementById("description").innerHTML = "Beastmen give +2 stamina and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //beastmen + archetype
    else if(RACE === 4 && cL === 8){
        health = health + 5;
        strength = strength + 7;
        aim = aim + 5;
        stamina = stamina + 12;
        mana = mana + 10;
        dexterity = dexterity + 10;
        intelligence = intelligence + 10;
    
        document.getElementById("description").innerHTML = "Beastmen give +2 stamina and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //Halfling gives +1 everything and +2 mana and strength
    //Halfling + warrior
    else if(RACE === 5 && cL === 1){
        health = health + 1;
        strength = strength + 5;
        aim = 1;
        stamina = stamina + 5;
        mana = 1;
        dexterity = dexterity + 2;
        intelligence = intelligence + 1;
    
        document.getElementById("description").innerHTML = "Halfling gives +1 all & +2 mana and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //Halfling + archer
    else if(RACE === 5 && cL === 2){
        health = health + 1;
        strength = strength + 3;
        aim = aim + 7;
        stamina = stamina + 2;
        mana = 1;
        dexterity = dexterity + 1;
        intelligence = intelligence + 6;
    
        document.getElementById("description").innerHTML = "Halfling gives +1 all & +2 mana and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //Halfling + mage
    else if(RACE === 5 && cL === 3){
        health = health + 1;
        strength = strength + 2;
        aim = aim + 4;
        stamina = stamina - 1;
        mana = mana + 8;
        dexterity = dexterity + 1;
        intelligence = intelligence + 6;
    
        document.getElementById("description").innerHTML = "Halfling gives +1 all & +2 mana and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity; 
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //Halfling + healer
    else if(RACE === 5 && cL === 4){
        health = health + 1;
        strength = strength - 1;
        aim = aim + 2;
        stamina = stamina - 2;
        mana = mana + 5;
        dexterity = dexterity + 2;
        intelligence = intelligence + 2;
    
        document.getElementById("description").innerHTML = "Halfling gives +1 all & +2 mana and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //Halfling + assassin
    else if(RACE === 5 && cL === 5){
        health = health + 1;
        strength = strength + 2;
        aim = aim + 1;
        stamina = stamina + 6;
        mana = 2;
        dexterity = dexterity + 7;
        intelligence = intelligence + 7;
    
        document.getElementById("description").innerHTML = "Halfling gives +1 all & +2 mana and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //Halfling + barbarian
    else if(RACE === 5 && cL === 6){
        health = health + 1;
        strength = strength + 7;
        aim = 1;
        stamina = stamina + 7;
        mana = 2;
        dexterity = dexterity + 2;
        intelligence = intelligence -4;
    
        document.getElementById("description").innerHTML = "Halfling gives +1 all & +2 mana and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //Halfling + craftsmen
    else if(RACE === 5 && cL === 7){
        health = health + 1;
        strength = strength;
        aim = 1;
        stamina = stamina + 3;
        mana = mana + 4;
        dexterity = dexterity + 8;
        intelligence = intelligence + 6;
    
        document.getElementById("description").innerHTML = "Halfling gives +1 all & +2 mana and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
    
    //Halfling + archetype
    else if(RACE === 5 && cL === 8){
        health = health + 6;
        strength = strength + 7;
        aim = aim + 6;
        stamina = stamina + 11;
        mana = mana + 12;
        dexterity = dexterity + 11;
        intelligence = intelligence + 11;
    
        document.getElementById("description").innerHTML = "Halfling gives +1 all & +2 mana and strength";
        document.getElementById("health").innerHTML = "Health: "+ health;
        document.getElementById("strength").innerHTML = "Strength: "+ strength;
        document.getElementById("aim").innerHTML = "Aim: "+ aim;
        document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
        document.getElementById("mana").innerHTML = "Mana: " + mana;
        document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
        document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
    }
  }
}
/*
window.alert("Statistics are randomly generated from a combination of your race and class")

setTimeout(reRoll, 1500);

function reRoll(){
    
    let answer;
    do{
    answer = prompt("Would you like to use your 1 re-roll for your race and class \n!THIS WILL GIVE YOU DIFFERENT STATS!\nEnter yes or no");
    answer = answer.toLowerCase();
    if(answer === "yes"){
        for(let attempt = 0; attempt <= 0 ; attempt += 1){
        window.alert("You rolled again!");
        characterMaker();
        }
    }else if(answer === "no"){
    break;
    }else{
        window.alert("Please enter yes or no");
    } 
    }while(answer!== "yes" && answer!== "no");
}
*/





