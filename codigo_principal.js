
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

function acabouJogo() {
    background(220);
    textSize(28);
    fill(10);
    textAlign(LEFT);
    text("Game Over!!", 20, 50);
}

function mouseClicked() {
    if (tela == 3 && nivel == 1) {
        if (escolhaFase == 1 || escolhaFase == 2) {
            tela = 4;
        }
        if (escolhaFase == 3) {
            nivel = 2;
        }
    }
    else {
        if (tela == 3 && nivel == 2) {
            if (escolhaFase == 2 || escolhaFase == 3) {
                tela = 4;
            }
            if (escolhaFase == 1) {
                nivel = 3;
            }
        }
    }

}

function opcaoBotao(xMin, yMin, largura, altura, opcao) {
    // Botão 2 
    yMax = yMin + altura
    xMax = xMin + largura
    if (mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax) {
        fill(250);
        escolhaFase = opcao;
        /*if (mouseIsPressed) {
            escolhaFase = opcao;
            console.log("Escolha: ", escolhaFase)
        }*/
    }
    else {
        noFill();
    }
    stroke(corDasBordas);
    rect(xMin, yMin, largura, altura, 15);
    textSize(26);
    fill(0);

}

function triangulo(x, y, largura, altura, cor, posicaoNormal = true) {
    //var alturaTriangulo = 50;
    //var larguraTriangulo = 50;
    //var xTriangulo = 40;
    //var yTriangulo = 100;
    noStroke();
    fill(cor)
    if (posicaoNormal) {
        triangle(x, y + altura, x + largura / 2, y, x + largura, y + altura)
    }
    else {
        triangle(x, y, x + largura / 2, y + altura, x + largura, y)
    }

}

function fase3() {
    background(220);
    textSize(28);
    fill(10);
    textAlign(LEFT);
    text("Fase 3", 20, 50);


}

function fase2() {
    background(220);
    textSize(28);
    fill(10);
    textAlign(LEFT);
    text("Qual o próximo número?", 20, 50);

    textSize(44);
    fill(50);
    text('30', 40, 150);

    text('27', 140, 150);

    text('24', 240, 150);

    text('?', 340, 150);

    escolhaFase = 0;
    opcaoBotao(100, 250, 80, 80, 1);
    textSize(44);
    text('21', 115, 305);

    opcaoBotao(200, 250, 80, 80, 2);
    textSize(44);
    text('19', 215, 305);

    opcaoBotao(300, 250, 80, 80, 3);
    textSize(44);
    text('17', 315, 305);

}



function fase1() {
    background(220);
    textSize(28);
    fill(10);
    textAlign(LEFT);
    text("Qual o próximo elemento?", 20, 50);

    var alturaTriangulo = 50;
    var larguraTriangulo = 50;
    var xTriangulo = 40;
    var yTriangulo = 100;
    var corVerde = '#0A0'
    var corVermelha = '#C00'
    var corAmarela = '#FA0'
    noStroke();
    fill(corVerde)
    triangle(xTriangulo, yTriangulo, xTriangulo + larguraTriangulo / 2, yTriangulo + alturaTriangulo, xTriangulo + larguraTriangulo, yTriangulo)
    fill(corAmarela)
    ellipse(yTriangulo + 35, 125, 50, 50)
    var xTriangulo2 = yTriangulo + 80;
    fill(10);
    triangle(xTriangulo2, yTriangulo + alturaTriangulo, xTriangulo2 + larguraTriangulo / 2, yTriangulo, xTriangulo2 + larguraTriangulo, yTriangulo + alturaTriangulo)
    fill(corVermelha)
    ellipse(xTriangulo + 230, 125, 50, 50)

    xTriangulo = 40;
    yTriangulo = 100;

    triangulo(310, yTriangulo, larguraTriangulo, alturaTriangulo, '#0A0', false)

    fill(10);
    escolhaFase = 0;
    opcaoBotao(100, 250, 80, 80, 1)
    triangulo(115, 265, larguraTriangulo, alturaTriangulo, 10)

    opcaoBotao(200, 250, 80, 80, 2)
    fill(corVermelha)
    ellipse(240, 290, 50, 50)

    opcaoBotao(300, 250, 80, 80, 3)
    fill(corAmarela)
    ellipse(340, 290, 50, 50)


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
    text("Use o mouse para selecionar as opções. ", 20, 120, 460)
    text("O objetivo do jogo é acerta qual é o próximo elemento da sequência apresentada. ", 20, 150, 460)
    textSize(14);
    text("Este jogo é baseado na Habilidade EF02MA11 da BNCC. Esta habilidade trata da identificação de regularidades em sequências, observação e determinação de elementos ausentes na sequência (numéricas e figurativas; recursivas ou repetitivas). ", 20, 220, 460)

}


function telaCreditos() {
    background(220);
    textSize(36);
    textAlign(LEFT);
    fill(corDaFonte);
    text("Créditos", 160, 70);
    textSize(20);
    text("RENATO RODRIGUES", 200, 120);
    text("JÚLIA MAFRA", 240, 350);
    textSize(16);
    text("Função: Educador", 230, 140);
    text("Função: Programadora", 230, 370);
    textSize(14);
    fill(80);
    text("Licenciado em Matemática pela Universidade Federal do Rio Grande do Norte, Especialista em Educação Matemática para o Ensino Fundamental e Medio pelo Instituto de Educação Superior Presidente Kennedy. Mestre em Ensino de Ciências Naturais e Matemática pelo Programa de Pós-Graduação em Ensino de Ciências e Matemática - PPGECNM - UFRN.", 180, 165, 300)
    text("Estudante do Bacharelado em Ciências e Tecnologia na UFRN.", 180, 395, 300)
    image(imagemEducador, 20, 110);
    image(imagemProgramadora, 20, 330);
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
        if (nivel == 2) {
            fase2();
        }
        if (nivel == 3) {
            fase3();
        }
    }
    if (tela == 4) {
        acabouJogo()
    }
}