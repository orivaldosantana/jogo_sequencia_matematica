
var nivel = 1;
var escolhaFase = 0;
var pontos = 0;

var corDaFonte = '#E11584';
var corDasBordas = '#9E4244'

var deslocamentoBotaoMenu = 90
var xMinBotao = 150
var larguraBotao = 200
var xMaxBotao = xMinBotao + larguraBotao
var alturaBotao = 60

var yMinBotao3 = 160
var yMaxBotao3 = yMinBotao3 + alturaBotao

var yMinBotao1 = yMinBotao3 + deslocamentoBotaoMenu
var yMaxBotao1 = yMinBotao1 + alturaBotao

var yMinBotao2 = yMinBotao3 + 2 * deslocamentoBotaoMenu
var yMaxBotao2 = yMinBotao2 + alturaBotao


var imagemEducador;
var imagemProgramadora;

var fundoMenu;

var fontChango;

var tela = 0;
// tela 1: instruções 
// tela 2: creditos 

function opcaoBotao(xMin, xMax, yMin, yMax, largura, altura, opcao) {
    // Botão 2 
    if (mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax) {
        fill(250);
        if (mouseIsPressed) {
            escolhaFase = opcao;
            console.log("Escolha: ", escolhaFase)
        }
    }
    else {
        noFill();
    }
    rect(xMin, yMin, largura, altura, 15);
    textSize(26);
    fill(0);

}

function fase1() {
    background(220);
    textSize(28);
    fill(corDaFonte);
    textAlign(LEFT);
    text("Qual o próximo elemento?", 20, 50);

    var alturaTriangulo = 60;
    var larguraTriangulo = 60;
    var xTriangulo = 50;
    var yTriangulo = 100;
    fill(0, 255, 0)
    triangle(xTriangulo, yTriangulo, xTriangulo + larguraTriangulo / 2, yTriangulo + alturaTriangulo, xTriangulo + larguraTriangulo, yTriangulo)
    fill(255, 255, 0)
    ellipse(160, 125, 60, 60)
    var xTriangulo2 = 220;
    fill(10);
    triangle(xTriangulo2, yTriangulo + alturaTriangulo, xTriangulo2 + larguraTriangulo / 2, yTriangulo, xTriangulo2 + larguraTriangulo, yTriangulo + alturaTriangulo)

    fill(10);
    escolhaFase = 0;
    opcaoBotao(100, 200, 250, 300, 70, 50, 1)

    opcaoBotao(250, 350, 250, 300, 70, 50, 2)


}

function menuBotao(texto, yMin, yMax, opcao) {

    if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMin && mouseY < yMax) {
        fill('#fff0f3');
        if (mouseIsPressed) {
            tela = opcao;
        }
    }
    else {
        fill('#FEC5E5');
    }
    stroke(corDasBordas);
    rect(xMinBotao, yMin, larguraBotao, alturaBotao, 15);
    noStroke();
    textSize(26);
    fill(corDaFonte);
    text(texto, xMinBotao, yMin + 20, larguraBotao);
}

function telaMenu() {
    background(220);

    textSize(32);
    fill(corDaFonte);
    textFont(fontChango)
    textAlign(CENTER);
    text("Desvendando Sequências", 100, 50, 300);

    textFont('cursive');
    menuBotao("Jogar", yMinBotao3, yMaxBotao3, 3);
    menuBotao("Instruções", yMinBotao1, yMaxBotao1, 1);
    menuBotao("Créditos", yMinBotao2, yMaxBotao2, 2);
}

function telaInstrucoes() {
    background(220);
    textSize(36);
    textAlign(CENTER);
    fill(corDaFonte)
    text("Instruções", width / 2, 70);
    textSize(16);
    fill(80);
    textAlign(LEFT);
    text("Primeira instrução: use o mouse para selecionar as opções. ", 20, 120, 460)
}


function telaCreditos() {
    background(220);
    textSize(36);
    textAlign(LEFT);
    fill(corDaFonte);
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
    fontChango = loadFont("./font/Chango-Regular.ttf")
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    if (tela == 0) {
        telaMenu();
    }
    if (tela == 1) {
        telaInstrucoes();
    }
    if (tela == 2) {
        telaCreditos();
    }
    if (tela == 3) {
        if (nivel == 1) {
            fase1();
        }

    }
}