//Função.
function resolver() {
    //Variáveis locais.
    let peso, altura, pe, alt, cont, virgula, ponto, cont02, virgula02, ponto02;
    peso = "";
    altura = "";
    //Obtenção do valor do campo de entrada para peso e altura.
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    //Divisão de string em substrings e inserção das mesmas numa lista.
    pe = peso.split("");
    alt = altura.split("");
    //Verificação e obtenção de vírgula e ponto.
    for(cont = 0; cont < pe.length; cont++) {
        if(pe[cont] == ",") {
            virgula = pe[cont];            
        } else if(pe[cont] == ".") {
            ponto = pe[cont];
        }
    }
    for(cont02 = 0; cont02 < alt.length; cont02++) {
        if(alt[cont02] == ",") {
            virgula02 = alt[cont02];            
        } else if(alt[cont02] == ".") {
            ponto02 = alt[cont02];
        }
    }
    //Verificação dos valores nos campos de entrada.
    if((peso != "" && altura != "") && (peso != 0 && altura != 0)) {
        //Verificação de vírgula e ponto nos valores.
        if((virgula != "," && virgula02 != ",") && (ponto == "." && ponto02 == ".")) {
            //Conversão em número de ponto flutuante.
            peso = parseFloat(peso);
            altura = parseFloat(altura);
            //Validação de valor numérico.
            if(isNaN(peso) || isNaN(altura)) {
                document.getElementById("resultado").innerHTML = ""
                document.getElementById("resultado-02").innerHTML = "Um campo ou mais não foi preenchido corretamente!";
            } else {
                //Cálculo do imc e fixação do número de casas decimais.
                imc = (peso / (altura * altura)).toFixed(1);
                //Inserção de conteúdo no elemento p e exibição na página web.
                document.getElementById("resultado-02").innerHTML = ""
                document.getElementById("resultado").innerHTML = "O seu IMC é " + imc + ".";
            }
        } else {
            //Inserção de conteúdo no elemento p e exibição na página web.
            document.getElementById("resultado").innerHTML = ""
            document.getElementById("resultado-02").innerHTML = "Um campo ou mais não foi preenchido corretamente!";
        }
    } else {
        //Inserção de conteúdo no elemento p e exibição na página web.
        document.getElementById("resultado").innerHTML = ""
        document.getElementById("resultado-02").innerHTML = "Um campo ou mais está vazio, e/ou não foi preenchido corretamente!";
    }
}