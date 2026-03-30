// Struttura aggiornata con più rami e personaggi
const albero = {
    domanda: "È una donna?",
    si: {
        domanda: "È un'astronauta?",
        si: "Samantha Cristoforetti (Ingegneria/Spazio)",
        no: {
            domanda: "È famosa per gli studi sulla radioattività?",
            si: "Marie Curie (Fisica/Chimica)",
            no: {
                domanda: "È una matematica che ha lavorato alla NASA?",
                si: "Katherine Johnson (Matematica)",
                no: "Ada Lovelace (Informatica)"
            }
        }
    },
    no: {
        domanda: "È vissuto prima del 1900?",
        si: {
            domanda: "Era un genio del Rinascimento (pittura e macchine)?",
            si: "Leonardo da Vinci (Ingegneria/Arte)",
            no: "Isaac Newton (Fisica/Matematica)"
        },
        no: {
            domanda: "È considerato il padre dell'informatica moderna?",
            si: "Alan Turing (Informatica/Logica)",
            no: "Albert Einstein (Fisica Teorica)"
        }
    }
};

// --- Il resto delle funzioni (iniziaGioco, mostraDomanda, rispondi) 
// rimane identico a quello di prima! ---

let nodoCorrente;

function iniziaGioco() {
    nodoCorrente = albero;
    document.getElementById("controlli").style.display = "block";
    document.getElementById("btn-reset").style.display = "none";
    mostraDomanda();
}

function mostraDomanda() {
    if (typeof nodoCorrente === "string") {
        document.getElementById("testo-domanda").innerHTML = "Il personaggio è: <br><b>" + nodoCorrente + "</b>";
        document.getElementById("controlli").style.display = "none";
        document.getElementById("btn-reset").style.display = "inline";
    } else {
        document.getElementById("testo-domanda").innerText = nodoCorrente.domanda;
    }
}

function rispondi(scelta) {
    nodoCorrente = scelta ? nodoCorrente.si : nodoCorrente.no;
    mostraDomanda();
}

iniziaGioco();
