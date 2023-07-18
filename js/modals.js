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