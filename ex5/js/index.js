const telefone = document.getElementById('telefone');
const nome = document.getElementById('nome');
const btnAdicionar = document.getElementById('btnadicionar');
const btnExibir = document.getElementById('btnexibir');
const mensagem = document.getElementById('mensagem');
let timer;
//const contatos = [{ nome: '', telefone: '' }];


const contato = {
    nome: '',
    telefone: '',

    getnome() {return this.nome;},
    gettelefone() {return this.telefone;},   
    setnome(nome) {this.nome = nome;},
    settelefone(telefone) {this.telefone = telefone;}
}

btnAdicionar.addEventListener('click', () => {
    contato.setnome(nome.value);
    contato.settelefone(telefone.value);

    mensagem.textContent = 'Contato salvo';
    clearTimeout(timer);
    timer = setTimeout(() => {
        mensagem.textContent = '';
    }, 5000);
});

btnExibir.addEventListener('click', () => {
    const linha = document.createElement('tr');
    linha.innerHTML = `<td>${contato.getnome()}</td><td>${contato.gettelefone()}</td>`;
    document.querySelector('tbody').appendChild(linha);
});