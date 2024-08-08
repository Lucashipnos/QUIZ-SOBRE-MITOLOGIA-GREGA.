const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Mitologia grega é o conjunto de histórias, lendas e mitos que pertenciam ao imaginário da civilização da Grécia Antiga, povoado por deuses, heróis lendários e criaturas fantásticas. Relacionada com a religião, a mitologia grega apresentava, além dos cultuados deuses, explicações para temas fundamentais, como o surgimento do Universo e da vida.",
        alternativas: [
            {
                texto: "prosseguir",
                afirmacao: "respostas:"
            },

        ]
    },
    {
        enunciado: "Quantos são os Deuses do Olimpo?",
        alternativas: [
            {
                texto: "15 deuses sendo eles: jesus, Hera, Poseidon, Buda, Ares, Deméter, Apolo, Ártemis, Hefesto, Afrodite, Hermes, jupiter, esparta, amaterasu e Kratos.",
                afirmacao: "1° errado,"
            },
            {
                texto: "14 Deuses sendo eles: kratos, Hera, Poseidon, perceu, Ares, Deméter, Apolo, dedalo, Hefesto, Afrodite, shiva, tsukuyomi, Hermes e Dionísio.",
                afirmacao: "1° errado,"
            },  
            { 
                texto: "13 Deuses sendo eles: Zeus, Hera, amaterasu, Atena, Ares, Deméter, Apolo, Ártemis, kirito, Afrodite, shiva Hermes e Dionísio.",
                afirmacao: "1° errado,"
            },
            { 
                texto: "12 Deuses sendo eles:Zeus, Hera, Poseidon, Atena, Ares, Deméter, Apolo, Ártemis, Hefesto, Afrodite, Hermes e Dionísio",
                afirmacao: "1° certa,"
            } 
            

        ]
    },
    {
        enunciado: "Quem é o rei dos deuses, governante do Monte Olimpo, deus do céu, raio, trovão?",
        alternativas: [
            {
                texto: "Apolo",
                afirmacao: "2° errado,"
            },
            {
                texto: "Zeus",
                afirmacao: "2° certa,"
            },
            {
                texto: "artemis",
                afirmacao: "2° errado,"
            },
            {
                texto: "perseu",
                afirmacao: "2° errado,"
            }
        ]
    },
    {
        enunciado: "Qual o Titã que, roubou o fogo de Zeus para o dar aos mortais, e para o punir, o deus dos deuses mandou acorrenta-lo a um rochedo e mandou-lhe uma águia para devorar o seu fígado?",
        alternativas: [
            {
                texto: "Cronos.",
                afirmacao: "3° errado,"
            },
            {
                texto: "Gaia",
                afirmacao: "3° errado,"
            },
            {
                texto: "Prometheus",
                afirmacao: "3° certa,"
            },
            {  
                texto: "atlas",
                afirmacao: "3° errado,"
            }
        ]
    },
    {
        enunciado: "Quem foi o Deus que construiu a Caixa de Pandora.",
        alternativas: [
            {
                texto: "Hefesto",
                afirmacao: "4° certa."
            },
            {
                texto: "Thanatos",
                afirmacao: "4° errado."
            },
            {
                texto: "Hércules",
                afirmacao: "4° errado."
            },
            {
                texto: "Perseu",
                afirmacao: "4° errado."
            },
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "desculpe pelos Bugs";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();