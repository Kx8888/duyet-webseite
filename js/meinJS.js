
  // Newsletter-Formular Verarbeitung
document.addEventListener("DOMContentLoaded", function(){
  const form = document.querySelector(".footer-newsletter form");
  if(form){
    form.addEventListener("submit", function(event){
      event.preventDefault();
      const email = form.querySelector("input[type=email]").value;
      if(email.trim() === ""){
        alert("Bitte gib eine E-Mail-Adresse ein.");
      } else {
        alert("Danke für Deine Anmeldung, " + email + "!");
        form.reset();
      }
    });
  }
});


  