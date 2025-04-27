document.addEventListener("DOMContentLoaded", function() {
  const tematiche = [
    "Servizi per i Giovani",
    "Servizi per gli anziani",
    "Spazi per i bambini",
    "Trasporti e Mobilità",
    "Servizi per Commercio e Attività produttive",
    "Cultura e Intrattenimento",
    "Cura dell'Ambiente"
  ];
  let indice = 0;

  const scriptURL = "https://script.google.com/macros/s/AKfycbw19ggh6Hbm_mAMrZ6X2BGXAgOHZ_bKU9UlX7KuU5GeaPx9xjChIM2PGngYGC9dPz9Q/exec";

  function vota(voto) {
    const tematicaCorrente = tematiche[indice];

    let valutazioneTestuale = "";
    if (voto === 1) valutazioneTestuale = "Pessimo";
    else if (voto === 2) valutazioneTestuale = "Accettabile";
    else if (voto === 3) valutazioneTestuale = "Ottimo";

    alert("Sto per inviare: " + tematicaCorrente + " - " + valutazioneTestuale);

    fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Città: "Napoli", Tematica: tematicaCorrente, Valutazione: valutazioneTestuale })
    });

    indice++;
    if (indice < tematiche.length) {
      aggiornaEmoji();
    } else {
      document.getElementById("emoji-container").innerHTML = `<p>Grazie per aver completato tutte le tematiche!</p>`;
    }
  }

  function aggiornaEmoji() {
    document.getElementById("emoji-container").innerHTML = `
      <span class="emoji-btn" id="btn1">😡</span>
      <span class="emoji-btn" id="btn2">😐</span>
      <span class="emoji-btn" id="btn3">😊</span>
    `;
    collegaEventi();
  }

  function collegaEventi() {
    document.getElementById("btn1").onclick = () => vota(1);
    document.getElementById("btn2").onclick = () => vota(2);
    document.getElementById("btn3").onclick = () => vota(3);
  }

  aggiornaEmoji();
});
