/*
//40 different combination types

if(RACE === 1){
let humanHealth = 10;
let humanStrength = 5;
let humanAim = 5;
let humanStamina = 10;
let humanMana = 5;
let humanDexterity = 5;
let humanIntelligence = 10;

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

let health = randomNumber(15, 20); 
let strength = randomNumber(10, 15); 
let aim = randomNumber(10, 15); 
let stamina = randomNumber(15, 20); 
let mana = randomNumber(10, 15);
let dexterity = randomNumber(10, 15);
let intelligence = randomNumber(15, 20);

//dwarfs give +2 dexterity and  intelligence
//dwarf + warrior
if(RACE === 2 && cL === 1){
    health = health;
    strenght = strength + 3;
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
    strenght = strength + 1;
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
    strenght = strength;
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
    strenght = strength - 3;
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
    strenght = strength;
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
    strenght = strength + 5;
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
    strenght = strength - 2;
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
    strenght = strength + 5;
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
    strenght = strength + 3;
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
    strenght = strength + 1;
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
    strenght = strength;
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
    strenght = strength - 3;
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
    strenght = strength;
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
    strenght = strength + 5;
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
    strenght = strength - 2;
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
    strenght = strength + 5;
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
    strenght = strength + 5;
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
    strenght = strength + 3;
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
    strenght = strength + 2;
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
    strenght = strength - 1;
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
    strenght = strength + 2;
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
    strenght = strength + 7;
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
    strenght = strength;
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
    strenght = strength + 7;
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
    strenght = strength + 5;
    aim = 1;
    stamina = stamina + 5;
    mana = 1;
    dexterity = dexterity + 2;
    intelligence = intelligence + 1;

    document.getElementById("description").innerHTML = "Halfling gives +1 all stats and +2 mana and strength";
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
    strenght = strength + 3;
    aim = aim + 7;
    stamina = stamina + 2;
    mana = 1;
    dexterity = dexterity + 1;
    intelligence = intelligence + 6;

    document.getElementById("description").innerHTML = "Halfling gives +1 all stats and +2 mana and strength";
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
    strenght = strength + 2;
    aim = aim + 4;
    stamina = stamina - 1;
    mana = mana + 8;
    dexterity = dexterity + 1;
    intelligence = intelligence + 6;

    document.getElementById("description").innerHTML = "Halfling gives +1 all stats and +2 mana and strength";
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
    strenght = strength - 1;
    aim = aim + 2;
    stamina = stamina - 2;
    mana = mana + 5;
    dexterity = dexterity + 2;
    intelligence = intelligence + 2;

    document.getElementById("description").innerHTML = "Halfling gives +1 all stats and +2 mana and strength";
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
    strenght = strength + 2;
    aim = aim + 1;
    stamina = stamina + 6;
    mana = 2;
    dexterity = dexterity + 7;
    intelligence = intelligence + 7;

    document.getElementById("description").innerHTML = "Halfling gives +1 all stats and +2 mana and strength";
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
    strenght = strength + 7;
    aim = 1;
    stamina = stamina + 7;
    mana = 2;
    dexterity = dexterity + 2;
    intelligence = intelligence -4;

    document.getElementById("description").innerHTML = "Halfling gives +1 all stats and +2 mana and strength";
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
    strenght = strength;
    aim = 1;
    stamina = stamina + 3;
    mana = mana + 4;
    dexterity = dexterity + 8;
    intelligence = intelligence + 6;

    document.getElementById("description").innerHTML = "Halfling gives +1 all stats and +2 mana and strength";
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
    strenght = strength + 7;
    aim = aim + 6;
    stamina = stamina + 11;
    mana = mana + 12;
    dexterity = dexterity + 11;
    intelligence = intelligence + 11;

    document.getElementById("description").innerHTML = "Halfling gives +1 all stats and +2 mana and strength";
    document.getElementById("health").innerHTML = "Health: "+ health;
    document.getElementById("strength").innerHTML = "Strength: "+ strength;
    document.getElementById("aim").innerHTML = "Aim: "+ aim;
    document.getElementById("stamina").innerHTML = "Stamina: "+ stamina;
    document.getElementById("mana").innerHTML = "Mana: " + mana;
    document.getElementById("dexterity").innerHTML = "Dexterity: "+ dexterity;
    document.getElementById("intelligence").innerHTML = "Intelligence: "+ intelligence;
}
}
*/