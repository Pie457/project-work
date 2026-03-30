const albero = {
    domanda: "È una donna?",
    si: {
        domanda: "È famosa per gli studi sulla radioattività?",
        si: "Marie Curie (Fisica/Chimica)",
        no: "Ada Lovelace (Informatica)"
    },
    no: {
        domanda: "È un fisico teorico?",
        si: "Albert Einstein (Fisica)",
        no: "Leonardo da Vinci (Ingegneria/Arte)"
    }
};

let nodoCorrente; // Tiene traccia di dove siamo nell'albero

function iniziaGioco() {
    nodoCorrente = albero;
    mostraDomanda();
    document.getElementById("controlli").style.display = "block";
    document.getElementById("btn-reset").style.display = "none";
}

function mostraDomanda() {
    // Se è una stringa, abbiamo trovato il personaggio
    if (typeof nodoCorrente === "string") {
        document.getElementById("testo-domanda").innerHTML = "Il personaggio è: <b>" + nodoCorrente + "</b>";
        document.getElementById("controlli").style.display = "none";
        document.getElementById("btn-reset").style.display = "inline";
    } else {
        // Altrimenti, mostra la domanda del nodo attuale
        document.getElementById("testo-domanda").innerText = nodoCorrente.domanda;
    }
}

function rispondi(scelta) {
    if (scelta) {
        nodoCorrente = nodoCorrente.si; // Vai al ramo SI
    } else {
        nodoCorrente = nodoCorrente.no; // Vai al ramo NO
    }
    mostraDomanda();
}

// Avvia il gioco al caricamento della pagina
iniziaGioco();
