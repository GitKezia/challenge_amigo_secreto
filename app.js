//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nomesAmigos = document.getElementById('amigo'); // Obtém o input
    let nome = nomesAmigos.value.trim(); // Obtém o valor e remove espaços extras

    if (nome !== '' && !amigos.includes(nome)) { // Verifica se não está vazio ou duplicado
        amigos.push(nome); // Adiciona o nome no array
        atualizarLista(); // Atualiza a lista na tela
        nomesAmigos.value =''; // Limpa o campo input
    } else {
        alert('Por favor, insira um nome válido.')
    }

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista de atualizar

    amigos.forEach((amigo) => {
        let li = document.createElement('li'); // Cria um <li>
        li.textContent = amigo; // Define o nome do amigo
        lista.appendChild(li); // Adiciona à lista
    });
 }

}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) { // Verifica se há amigos na lista
        alert('A lista de amigos está vazia! Por favor, adicione os nome.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome correspondente ao índice

    document.getElementById('resultado').innerHTML = `Amigo Sorteado: <strong>${amigoSorteado}<strong>`; // Exibe o resultado

}

