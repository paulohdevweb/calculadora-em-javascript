let novoCalculo = false; // Variável para controlar o reinício do cálculo

function insert(num) {
    const resultado = document.getElementById('resultado');

    // Se for uma nova operação, reinicia o display com o novo número
    if (novoCalculo) {
        resultado.innerHTML = num;
        novoCalculo = false;
    } else {
        // Adiciona o número ao conteúdo existente
        resultado.innerHTML += num;
    }
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
    novoCalculo = false; // Redefine para novo cálculo
}

function back() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = resultado.innerHTML.slice(0, -1);
}

function calcular() {
    const resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        try {
            // Avalia a expressão e exibe o resultado
            document.getElementById('resultado').innerHTML = eval(resultado.replace(/x/g, '*'));
            novoCalculo = true; // Ativa o modo para nova operação
        } catch (error) {
            document.getElementById('resultado').innerHTML = "Erro";
            novoCalculo = true;
        }
    }
}
