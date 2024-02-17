// répéte en boucle toutes les 1 secondes
setInterval(() => {
  const notesDevoir = document.querySelectorAll('.note-devoir');
  const noteEleve = document.querySelectorAll('.ie-titre-couleur-lowercase');
  const noteLaPlusHaute = document.querySelectorAll('.ie-texte');
  const moyenneMatiere = document.querySelectorAll('.ie-titre-gros');
  const moyenneGenerale = document.querySelectorAll('.flex-contain', 'm-all-xl', 'justify-between');

  notesDevoir.forEach(element => {
    element.textContent = "20,00";
  });

  noteEleve.forEach(element => {
    element.innerHTML = "<span>Note élève : </span><span>20,00</span>";
  });

  noteLaPlusHaute.forEach(element => {
    if (element.innerHTML.includes("<span>Note la plus haute :</span>")) {
      element.innerHTML = "<span>Note la plus haute : </span><span>20,00</span>";
    }
    if (element.innerHTML.includes("<span>Moyenne la plus haute :</span>")) {
      element.innerHTML = "<span>Moyenne la plus haute : </span><span>20,00</span>";
    }
  });
  moyenneMatiere.forEach(element => {
    if (element.parentElement.classList.contains('flex-contain') && !element.parentElement.classList.contains('m-all-xl', 'justify-between')) {
      element.textContent = "20,00";
    }
  });
  moyenneGenerale.forEach(element => {
    element.innerHTML = "<span>Moyenne générale élève : </span><span>20,00</span>";
  })

}, 100);