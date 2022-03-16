var valor = parseInt(Math.random() * 11);
var i = 3;

function Chutar() {
    var valorChute = parseInt(document.getElementById("valor").value);

    if(valorChute == valor && i > 0){
        document.getElementById("resultado").innerHTML = "Incrível!! Você acertou!!";
        document.getElementById("chancesRestantes").innerHTML = "Se quiser jogar novamente, é só recarregar a página";
        document.getElementById("emoji").src = "img/acertou.png";
    } else if (valorChute > 10 || valorChute < 0 || isNaN(valorChute)){
        if(isNaN(valorChute)){
            document.getElementById("resultado").innerHTML = "Tem que digitar algum número né?";
            document.getElementById("chancesRestantes").innerHTML = "Ainda não sou capaz de ler a sua mente...";
        }else{
            document.getElementById("resultado").innerHTML = "Digite um número entre 0 e 10";
            document.getElementById("chancesRestantes").innerHTML = "Poxa, tava escrito ali em cima isso né?";
        }

        document.getElementById("emoji").src = "img/bravo.png";
    } else if(i > 1){
        i--;

        if(valorChute > valor){
            document.getElementById("resultado").innerHTML = "Errouuuu. O número que você digitou é maior do que o sorteado";
        }  else{
            document.getElementById("resultado").innerHTML = "Errouuuu. O número que você digitou é menor do que o sorteado";
        }
        
        document.getElementById("chancesRestantes").innerHTML = "Mas não desista, você ainda tem " + i + " chance(s)";
        document.getElementById("emoji").src = "img/erro.png";
        console.log(valorChute);
    } else{
        i = 0;
        document.getElementById("resultado").innerHTML = "Suas chances acabaram. A resposta certa era: " + valor;
        document.getElementById("chancesRestantes").innerHTML = "Mas se quiser tentar com outro número é só recarregar a página";
        document.getElementById("emoji").src = "img/fim.png";
    }
}