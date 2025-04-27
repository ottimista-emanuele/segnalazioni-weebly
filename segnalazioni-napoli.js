document.addEventListener('DOMContentLoaded', function() {
  const faccine = document.querySelectorAll('.faccina');

  faccine.forEach(faccina => {
    faccina.addEventListener('click', function() {
      const valutazione = this.getAttribute('data-value');

      const data = {
        Città: 'Napoli',
        Tematica: 'Servizi per i Giovani',
        Valutazione: valutazione,
        EmailSegnalazione: '' // Lasciamo vuoto per ora
      };

      fetch('https://script.google.com/macros/s/AKfycbyKHI1f6Lw5pqZwvx0OhJykFAQ46YI71Vkp_pp3Hn9dqy0CUny1G5w14HEGtNYfTkpx/exec', {
        method: 'POST',
        mode: 'no-cors', // <<< ECCO LA NOVITÀ IMPORTANTE
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(() => {
        // Non possiamo leggere la risposta (no-cors), ma possiamo reindirizzare!
        window.location.href = 'segnalazioni-inviate.html';
      })
      .catch(error => {
        console.error('Errore nell\'invio della segnalazione:', error);
      });
    });
  });
});
