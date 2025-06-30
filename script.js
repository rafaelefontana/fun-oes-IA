const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual organela celular é responsável pela produção de energia na célula?",
        alternativas: [
            {
                texto: "Ribossomo",
                afirmacao: "genio. "
            },
            {
                texto: "Mitocôndria",
                afirmacao: "voce é um genio."
            }
        ]
    },
    {
        enunciado: "Qual molécula carrega a informação genética dos seres vivos?",
        alternativas: [
            {
                texto: "DNA .",
                afirmacao: "voce é incrivel."
            },
            {
                texto: "Glicose",
                afirmacao: "mamao com açucar"
            }
        ]
    },
    {
        enunciado: "Qual desses seres vivos realiza fotossíntese?",
        alternativas: [
            {
                texto: "Planta ",
                afirmacao: "parabens."
            },
            {
                texto: "Fungo.",
                afirmacao: "voce é incrivel."
            }
        ]
    },
    {
        enunciado: "A seleção natural é um conceito proposto por",
        alternativas: [
            {
                texto: "Charles Darwin .",
                afirmacao: "esperto."
            },
            {
                texto: "Isaac Newton.",
                afirmacao: "voce é muito bom"
            }
        ]
    },
    {
        enunciado: " No sistema circulatório humano, qual órgão bombeia o sangue para o corpo? ",
        alternativas: [
            {
                texto: "Coração ",
                afirmacao: "genio."
            },
            {
                texto: "Pulmão",
                afirmacao: " voce sabe oque faz. "
            }
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();