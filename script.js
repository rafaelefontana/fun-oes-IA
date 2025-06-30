const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o maior planeta do Sistema Solar?"
    
        alternativas: [
            {
                texto: "Saturno",
                afirmacao: "Genial. "
            },
            {
                texto: "Jupiter",
                afirmacao: "incrivel."
            }
        ]
    },
    {
        enunciado: "Qual o nome da nossa galáxia??",
        alternativas: [
            {
                texto: "Andrômeda",
                afirmacao: "voce é um genio."
            },
            {
                texto: "Via Láctea.",
                afirmacao: "voce sabe oque faz"
            }
        ]
    },
    {
        enunciado: "O que causa as estações do ano na Terra?",
        alternativas: [
            {
                texto: "A distância variável da Terra em relação ao Sol..",
                afirmacao: "genio."
            },
            {
                texto: " A inclinação do eixo de rotação da Terra.",
                afirmacao: "incrivel."
            }
        ]
    },
    {
        enunciado: "O que é um buraco negro?",
        alternativas: [
            {
                texto: "Uma região do espaço com gravidade tão forte que nada, nem mesmo a luz, pode escapar..",
                afirmacao: "voce é incrivel."
            },
            {
                texto: "Uma estrela em processo de explosão. ",
                afirmacao: "genio!!"
            }
        ]
    },
    {
        enunciado: "O que é um eclipse lunar? ",
        alternativas: [
            {
                texto: "Quando a Lua passa entre a Terra e o Sol, bloqueando a luz solar.",
                afirmacao: "genialidade."
            },
            {
                texto: "Quando a Lua entra na sombra da Terra. Quando a Lua entra na sombra da Terra. ",
                afirmacao: "incrivel"
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
    caixaAlternativas.textContent = ;
    mostraAlternativas(a) 

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