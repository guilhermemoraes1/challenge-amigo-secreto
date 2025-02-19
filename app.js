//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = []


const adicionarAmigo = () => {
    let inputNome = document.querySelector('input').value;
    nomeValido(inputNome);
    limparCampoInput();
}

const nomeValido = (nome) => {
    if (nome == '') {
        alert('Por favor, insira um nome válido');
    } else {
        listaDeAmigos.push(nome);
        escreverAmigosNaTela(nome);
    }
}

const escreverAmigosNaTela = (amigo) => {
    let listaAmigosNaTela = document.getElementById('listaAmigos');
    listaAmigosNaTela.innerText += amigo + '\n';   
}

const limparCampoInput = () => {
    let input = document.querySelector('input');
    input.value = '';
}

const sortearAmigo = () => {
    if (listaDeAmigos.length == 0) {
        alert("Adicione amigos.")
    } else {
        let indiceEscolhido = parseInt(Math.random() * listaDeAmigos.length);
        let tagResultado = document.getElementById('resultado');
        limparLista();
        tagResultado.innerText = `O amigo secreto sorteado é: ${listaDeAmigos[indiceEscolhido]}`;
    }

}

const limparLista = () => {
    let tagLista = document.getElementById('listaAmigos');
    tagLista.innerText = '';
}