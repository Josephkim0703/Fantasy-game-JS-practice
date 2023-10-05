function dialog(){

const dialogContent = document.getElementById('dialog-content');
let dialogues = [
    "Hello there traveler!",
    "Welcome to Alexadria.",
    "Are you ready to embark on a journey?",
    "I will ask a serious of questions to get to know you",
"What is your name fellow traveler?", document.getElementById("input").value,
`What a great name ${name}`

];

let currentDialogueIndex = 0;

function showDialogue() {
    if (currentDialogueIndex < dialogues.length) {
        dialogContent.innerHTML = dialogues[currentDialogueIndex];
        currentDialogueIndex++;


    } else {
        // All dialogues have been shown, close the dialog box
            info();
        
    }
}



function openDialogueBox() {
    currentDialogueIndex = 0;
    dialogContent.innerHTML = '';
    showDialogue();
    document.querySelector('.text').style.display = 'block';

}

function closeDialogueBox() {
    document.querySelector('.text').style.display = 'none';

}



// Add event listener for the Enter key
document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        showDialogue();
    }
});

document.addEventListener('click', function(event){
    showDialogue();
})


openDialogueBox();
}




/*
function dialog() {
   //grabs the .text container so it doesnt leave
   let container = document.querySelector(".text");
   //controls the speeds

      //stores all the text lines 
       let speeds = {
           pause: 500, 
           slow: 120,
           normal: 90,
           fast: 40,
           superFast: 10
        };
        
       let textLines = [
           { speed: speeds.normal, string: "Oh, hello there! " },   
           { speed: speeds.normal, string: "Fellow traveler " },
           { speed: speeds.pause, string: "", pause: true },    
           { speed: speeds.fast, string: "Welcome to " },
           { speed: speeds.normal, string: "Alexandria!", classes: ["green"] }
       ];

   


       let characters = [];
   
   //Add a space between lines
    textLines.forEach((line, index) => {
            if (index < textLines.length - 1) {
             line.string += " "; 
          }
       
          line.string.split("").forEach((character) => {
             let span = document.createElement("span");
             span.textContent = character;
             container.appendChild(span);
             characters.push({
                span: span,
                isSpace: character === " " && !line.pause,
                delayAfter: line.speed,
                classes: line.classes || []
             });
          });
       });
       
       //function to reveal one letter at a time
       function revealOneCharacter(list) {
          let next = list.splice(0, 1)[0];
          next.span.classList.add("revealed");
          next.classes.forEach((c) => {
             next.span.classList.add(c);
          });
          let delay = next.isSpace && !next.pause ? 0 : next.delayAfter;
       
          if (list.length > 0) {
             setTimeout(function () {
                revealOneCharacter(list);
             }, delay);
          }
       }
       
       //Kick it off
       setTimeout(() => {
          revealOneCharacter(characters);   
       }, 600)
   }*/