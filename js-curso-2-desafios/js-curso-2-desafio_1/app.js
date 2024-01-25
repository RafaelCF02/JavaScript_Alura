let Titulo = document.querySelector('h1');
Titulo.innerHTML = 'Hora do Desafio';

function verificarBotao(){
    console.log('O botão foi clicado');
}

function mensagemAlert(){
    alert('Eu amo JS');
}

function promptCidade(){
    let cidade = prompt('Fale o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de voce`);
}

function soma(){
    let num_1 = parseInt(prompt('Digite um numero: '))
    let num_2 = parseInt(prompt('Digite outro numero: '))
    alert(`A soma de ${num_1} + ${num_2} = ${num_1+num_2}`)
}