




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