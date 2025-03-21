const recensioni = {
    marco: [
        { autore: "Giulia P.", testo: "Autista molto puntuale e disponibile, ottima esperienza!", stelle: "⭐⭐⭐⭐⭐" },
        { autore: "Luca M.", testo: "Macchina pulita e guida sicura. Consigliato!", stelle: "⭐⭐⭐⭐" },
        { autore: "Elisa T.", testo: "Molto cordiale, viaggio piacevole. Servizio top!", stelle: "⭐⭐⭐⭐⭐" }
    ],
    laura: [
        { autore: "Andrea G.", testo: "Viaggio confortevole, autista molto gentile!", stelle: "⭐⭐⭐⭐" },
        { autore: "Sara L.", testo: "Ottima guida e disponibilità, la sceglierei di nuovo!", stelle: "⭐⭐⭐⭐⭐" },
        { autore: "Francesco D.", testo: "Macchina in perfetto stato, servizio impeccabile!", stelle: "⭐⭐⭐⭐" }
    ]
};

function mostraRecensioni(driver) {
    const container = document.getElementById("recensioni-container");
    const recensioniDiv = document.getElementById("recensioni");
    
    recensioniDiv.innerHTML = ""; // Pulisce il contenuto precedente

    recensioni[driver].forEach(review => {
        const div = document.createElement("div");
        div.classList.add("review");
        div.innerHTML = `<p><strong>${review.autore}</strong>: "${review.testo}"</p><p>${review.stelle}</p>`;
        recensioniDiv.appendChild(div);
    });

    container.style.display = "block"; // Mostra la sezione delle recensioni
}
