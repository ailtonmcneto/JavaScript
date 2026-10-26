// ===== Classe =====
class Tarefa {
    constructor(descricao) {
        this.descricao = descricao;
    }

    getDescricao() {
        return this.descricao;
    }

    setDescricao(descricao) {
        this.descricao = descricao;
    }
}

// ===== Dados =====
const tarefas = [];

// ===== Elementos do DOM =====
const inputTarefa = document.getElementById("tarefa");
const btnAdicionar = document.getElementById("btnadicionar");
const mensagem = document.getElementById("mensagem");
const listaTarefas = document.getElementById("listaTarefas");

// ===== Funções =====
function adicionarTarefa() {
    const descricao = inputTarefa.value.trim();

    if (descricao === "") {
        mensagem.textContent = "Digite uma tarefa antes de adicionar.";
        return;
    }

    mensagem.textContent = "";

    const tarefa = new Tarefa(descricao);
    tarefas.push(tarefa);

    exibirTarefa(tarefa);

    inputTarefa.value = "";
    inputTarefa.focus();
}

function exibirTarefa(tarefa) {
    const item = document.createElement("li");
    item.textContent = tarefa.getDescricao();
    listaTarefas.appendChild(item);
}

// ===== Eventos =====
btnAdicionar.addEventListener("click", adicionarTarefa);
