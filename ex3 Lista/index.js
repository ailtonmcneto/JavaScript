class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }

    getSituacao() {
        if (this.nota >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}

const alunos = [];

const inputNome = document.getElementById("nome");
const inputNota = document.getElementById("nota");
const btnCadastrar = document.getElementById("btncadastrar");
const mensagem = document.getElementById("mensagem");
const listaAlunos = document.getElementById("listaAlunos");

btnCadastrar.addEventListener("click", function () {
    const nome = inputNome.value.trim();
    const notaDigitada = inputNota.value.trim();

    if (nome === "" || notaDigitada === "") {
        mensagem.textContent = "Preencha o nome e a nota.";
        return;
    }

    const nota = Number(notaDigitada);

    if (nota < 0 || nota > 10) {
        mensagem.textContent = "Número inválido. A nota deve estar entre 0 e 10.";
        return;
    }

    mensagem.textContent = "";

    const aluno = new Aluno(nome, nota);
    alunos.push(aluno);

    exibirAlunos();

    inputNome.value = "";
    inputNota.value = "";
});

function exibirAlunos() {
    listaAlunos.innerHTML = "";

    for (const aluno of alunos) {
        const item = document.createElement("li");
        item.textContent = `Nome: ${aluno.nome} | Nota: ${aluno.nota} | Situação: ${aluno.getSituacao()}`;
        listaAlunos.appendChild(item);
    }
}
