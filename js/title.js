// Switching Welcome Sentences
let sentences = [ "Hi, my name is Sonny..", "..I'm a Web Developer..", "..Welcome to my Portfolio."];
let textOrder = -1;
let color;
let textShadow;

function welcome(){
  const h1 = document.querySelector("h1");
  textOrder = (textOrder + 1) % sentences.length;

  h1.classList.add("fade-out");

  setTimeout( () => {
    h1.innerText = sentences[textOrder];
    switch(sentences[textOrder]){
      case "Hi, my name is Sonny..":
        color = "#000000";
        textShadow = "-1px 0 rgb(139, 197, 0), 0 1px rgb(139, 197, 0), 1px 0 rgb(139, 197, 0), 0 -1px rgb(139, 197, 0)";
        break;
      case "..I'm a Web Developer..":
        color = "#dddcdc";
        textShadow = "-1px 0 rgb(41, 101, 241), 0 1px rgb(41, 101, 241), 1px 0 rgb(41, 101, 241), 0 -1px rgb(41, 101, 241)";
        break;
      case "..Welcome to my Portfolio.":
        color = "#000000";
        textShadow = "-1px 0 rgb(229, 162, 38), 0 1px rgb(229, 162, 38), 1px 0 rgb(229, 162, 38), 0 -1px rgb(229, 162, 38)";
        break;
    }
    h1.style.color = color;
    h1.style.textShadow = textShadow;

    h1.classList.remove("fade-out");
    h1.classList.add("fade-in");
    setTimeout( () => {
      h1.classList.remove("fade-in");
    }, 1000);
  }, 1000);
}

setInterval(welcome, 3000);