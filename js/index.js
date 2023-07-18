// Switching Welcome Sentences
let sentences = [ "Hi, my name is Sonny..", "..I'm Web Developer..", "..Welcome to my Portfolio."];
let textOrder = -1;
let color;

function welcome(){
  const h1 = document.querySelector("h1");
  textOrder = (textOrder + 1) % sentences.length;

  h1.classList.add("fade-out");

  setTimeout( () => {
    h1.innerText = sentences[textOrder];
    switch(sentences[textOrder]){
      case "Hi, my name is Sonny..": color = "#000000"; break;
      case "..I'm Web Developer..": color = "#dddcdc"; break;
      case "..Welcome to my Portfolio.": color = "#000000"; break;
    }
    h1.style.color = color;

    h1.classList.remove("fade-out");
    h1.classList.add("fade-in");
    setTimeout( () => {
      h1.classList.remove("fade-in");
    }, 1000);
  }, 1000);
}

setInterval(welcome, 3000);