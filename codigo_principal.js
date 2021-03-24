var imagemEducador;
var imagemProgramadora;

var tela = 1;
// tela 1: instruções 
// tela 2: creditos 

function telaInstrucoes() {
    background(220);
    textSize(36);
    fill(10);
    text("Instruções", 150, 70);
    textSize(16);
    text("Primeira instrução: use o mouse para selecionar as opções. ", 20, 120, 460)
}


function telaCreditos() {
    background(220);
    textSize(36);
    fill(10);
    text("Créditos", 160, 70);
    textSize(20);
    text("RENATO RODRIGUES", 200, 120);
    text("JÚLIA MAFRA", 240, 300);
    textSize(16);
    text("Função: Educador", 230, 140);
    text("Função: Programadora", 230, 320);
    textSize(14);
    fill(80);
    text("Licenciado em Matemática pela Universidade Federal do Rio Grande do Norte, Especialista em Educação ...", 180, 165, 300)
    text("Estudante do Bacharelado em Ciências e  Tecnologia na UFRN.", 180, 345, 300)
    image(imagemEducador, 20, 110);
    image(imagemProgramadora, 20, 280);
}

function preload() {
    imagemEducador = loadImage("./imagens/foto_educador.png")
    imagemProgramadora = loadImage("./imagens/foto_programadora.png");
}

function setup() {

    createCanvas(500, 500);
}

function draw() {

    if (tela == 1) {
        telaInstrucoes();
    }
    if (tela == 2) {
        telaCreditos();
    }
}