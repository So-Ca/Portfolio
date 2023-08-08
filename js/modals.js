// Open Contacts Modal
function contactMod(){
  const openMod = document.getElementById("open-mod-contact");
  const closeMod = document.getElementById("close-mod-contact");
  const modal = document.getElementById("modal-contact");

  openMod.addEventListener("click", openModal);
  closeMod.addEventListener("click", closeModal);

  function openModal(){
    modal.classList.remove("hidden");
  }
  
  function closeModal(){
    const modal = document.getElementById("modal-contact");
    const computedStyle = window.getComputedStyle(modal);
    const currentTransform = computedStyle.transform;
  
    modal.style.transform = currentTransform; // Imposta il valore corrente della trasformazione
    modal.style.animation = "slide-out 1.5s forwards"; // Avvia l'animazione di uscita
    setTimeout(function() {
      modal.classList.add("hidden");
      modal.style.transform = ""; // Reimposta la trasformazione dopo la chiusura
      modal.style.animation = ""; // Rimuovi l'animazione dopo la chiusura
    }, 1500); // Attendi 1,5 secondi prima di nascondere il modale
  }
}
contactMod();

// Open Project Modal
function projectMod(){
  const openMod = document.getElementById("open-mod-project");
  const closeMod = document.getElementById("close-mod-project");
  const modal = document.getElementById("modal-project");

  openMod.addEventListener("click", openModal);
  closeMod.addEventListener("click", closeModal);

  function openModal(){
    modal.classList.remove("hidden");
  }
  
  function closeModal(){
    const modal = document.getElementById("modal-project");
    const computedStyle = window.getComputedStyle(modal);
    const currentTransform = computedStyle.transform;
  
    modal.style.transform = currentTransform;
    modal.style.animation = "slide-out 1.5s forwards";
    setTimeout(function() {
      modal.classList.add("hidden");
      modal.style.transform = "";
      modal.style.animation = "";
    }, 1500);
  }
}
projectMod();

// Open About Modal
function aboutMod(){
  const openMod = document.getElementById("open-mod-about");
  const closeMod = document.getElementById("close-mod-about");
  const modal = document.getElementById("modal-about");
  const progressBar = document.querySelectorAll(".progress-bar");

  openMod.addEventListener("click", openModal);
  closeMod.addEventListener("click", closeModal);

  function openModal(){
    modal.classList.remove("hidden");
    fillBar();
  }

  function fillBar(){
    progressBar.forEach( bar => {
      const width = bar.getAttribute("data-value");
      animationBar(bar, width);
    });
  }

  function animationBar(bar, width){ // bar è la barra, width è la lunghezza
    let currentWidth = 0;
    const maxWidth = parseFloat(width); // lunghezza massima della barra. Uso parsefloat per estrarre i numeri ed ignorare le parole
    const duration = 2000; // durata animazione 2 secondi
    const increment = maxWidth / (duration / 10); // aumento della barra ad ongi iterazione dell'animazione. Divide maxWidth per il numero di iterazioni
    const interval = setInterval( () => { // in un intervallo di tempo di 0,01 secondi (10 millisecondi)
      currentWidth += increment; // viene incrementato il valore di currentWidth aggiungendo increment ad ongi iterazione
      bar.style.width = currentWidth + "%"; // aggiorna la lunghezza della barra usando come unità di misura la percentuale (si possono usare anche altre unità come ad esempio px)

      if(currentWidth >= maxWidth){ // se currentWidth raggiunge o supera maxWidth viene fermata l'iterazione
        clearInterval(interval);
      }
    }, 10) // l'animazione viene eseguita ogni 10 millisecondi
  }
  
  function closeModal(){
    const modal = document.getElementById("modal-about");
    const computedStyle = window.getComputedStyle(modal);
    const currentTransform = computedStyle.transform;
  
    modal.style.transform = currentTransform;
    modal.style.animation = "slide-out 1.5s forwards";
    setTimeout( () => {
      modal.classList.add("hidden");
      modal.style.transform = "";
      modal.style.animation = "";
      resetBar();
    }, 1500);
  }

  function resetBar(){
    progressBar.forEach( bar => {
      bar.style.width = "0";
    });
  }
}
aboutMod();