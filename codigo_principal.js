
var xMinBotao = 150
var larguraBotao = 200
var xMaxBotao = xMinBotao + larguraBotao
var yMinBotao1 = 200
var alturaBotao = 60
var yMaxBotao1 = yMinBotao1 + alturaBotao

var yMinBotao2 = 280
var yMaxBotao2 = yMinBotao2 + alturaBotao

var yMinBotao3 = 120
var yMaxBotao3 = yMinBotao3 + alturaBotao

var imagemEducador;
var imagemProgramadora;

var tela = 0;
// tela 1: instruções 
// tela 2: creditos 

function menuBotao(texto, yMin, yMax, opcao) {
    // Botão 2 
    if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMin && mouseY < yMax) {
        fill(250);
        if (mouseIsPressed) {
            tela = opcao;
        }
    }
    else {
        noFill();
    }
    rect(xMinBotao, yMin, larguraBotao, alturaBotao, 15);
    textSize(26);
    fill(0);
    text(texto, xMinBotao + 35, yMin + 40);
}

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
    if (tela == 0) {
        background(220);
        textSize(32);
        fill(10);
        text("Desvendando Sequências", 70, 50);

        menuBotao("Jogar", yMinBotao3, yMaxBotao3, 3);

        menuBotao("Instruções", yMinBotao1, yMaxBotao1, 1);

        menuBotao("Créditos", yMinBotao2, yMaxBotao2, 2);

    }
    if (tela == 1) {
        telaInstrucoes();
    }
    if (tela == 2) {
        telaCreditos();
    }
    if (tela == 3) {

        background(220);
        textSize(32);
        fill(10);
        text("Jogando", 70, 50);
    }
}