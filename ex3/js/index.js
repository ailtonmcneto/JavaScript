// ==========================================================
// CRUD Simples - Create, Read, Update, Delete
// Codigo em nivel iniciante, explicado passo a passo.
// ==========================================================

// ----------------------------------------------------------
// 1) Pegando os elementos do HTML pelos ids
//    document.getElementById("...") busca um elemento pelo id.
//    Guardamos cada um em uma variavel para reutilizar depois.
// ----------------------------------------------------------
const form = document.getElementById("form-crud");        // o formulario
const inputId = document.getElementById("input-id");      // campo oculto (id do item)
const inputNome = document.getElementById("input-nome");  // campo do nome
const btnLimpar = document.getElementById("btn-limpar");  // botao limpar
const lista = document.getElementById("lista-registros"); // corpo da tabela (tbody)
const mensagemVazia = document.getElementById("mensagem-vazia"); // aviso "sem registros"

// ----------------------------------------------------------
// 2) Onde os dados ficam guardados
//    "registros" e um array (uma lista) que vai guardar os itens.
//    Cada item sera um objeto assim: { id: 1, nome: "Ana" }
//    "proximoId" serve para dar um numero unico a cada novo registro.
// ----------------------------------------------------------
let registros = [];
let proximoId = 1;

// ----------------------------------------------------------
// 3) READ (ler/mostrar) - desenha a tabela na tela
//    Essa funcao apaga a tabela e monta de novo com base no array.
//    Chamamos ela toda vez que os dados mudam.
// ----------------------------------------------------------
function mostrarRegistros() {
    // Limpa o que estava na tabela para nao duplicar
    lista.innerHTML = "";

    // Se nao houver registros, mostra a mensagem e para por aqui
    if (registros.length === 0) {
        mensagemVazia.style.display = "block";
        return;
    }

    // Se ha registros, esconde a mensagem
    mensagemVazia.style.display = "none";

    // Passa por cada registro da lista e cria uma linha na tabela
    for (let i = 0; i < registros.length; i++) {
        const registro = registros[i];

        // Cria a linha <tr>
        const linha = document.createElement("tr");

        // Preenche a linha com as colunas (nome e os botoes)
        // Os botoes chamam as funcoes editar() e excluir() passando o id.
        linha.innerHTML =
            "<td>" + registro.nome + "</td>" +
            "<td>" +
                "<button class='btn btn-secundario btn-acao' onclick='editar(" + registro.id + ")'>Editar</button>" +
                "<button class='btn btn-excluir btn-acao' onclick='excluir(" + registro.id + ")'>Excluir</button>" +
            "</td>";

        // Coloca a linha dentro da tabela
        lista.appendChild(linha);
    }
}

// ----------------------------------------------------------
// 4) CREATE e UPDATE (salvar)
//    Quando o formulario e enviado, essa funcao decide:
//    - se o campo oculto estiver vazio -> cria um novo registro
//    - se tiver um id -> atualiza o registro existente
// ----------------------------------------------------------
form.addEventListener("submit", function (evento) {
    // Impede o navegador de recarregar a pagina ao enviar o form
    evento.preventDefault();

    // Le o que foi digitado (trim() tira espacos das pontas)
    const nome = inputNome.value.trim();

    // Validacao simples: nao deixa salvar o campo vazio
    if (nome === "") {
        alert("Preencha o nome.");
        return;
    }

    if (inputId.value === "") {
        // ---- CREATE: criar um novo registro ----
        const novo = {
            id: proximoId,   // numero unico
            nome: nome
        };
        registros.push(novo); // adiciona no final da lista
        proximoId++;          // prepara o proximo id
    } else {
        // ---- UPDATE: atualizar um registro que ja existe ----
        const id = Number(inputId.value); // converte texto para numero

        // Procura o registro com esse id e atualiza os dados
        for (let i = 0; i < registros.length; i++) {
            if (registros[i].id === id) {
                registros[i].nome = nome;
                break; // achou, pode parar o laco
            }
        }
    }

    // Limpa o formulario e redesenha a tabela
    limparFormulario();
    mostrarRegistros();
});

// ----------------------------------------------------------
// 5) Preparar edicao
//    Coloca os dados do registro escolhido nos campos do formulario.
//    Assim o usuario edita e clica em Salvar (que fara o UPDATE).
// ----------------------------------------------------------
function editar(id) {
    // Procura o registro pelo id
    for (let i = 0; i < registros.length; i++) {
        if (registros[i].id === id) {
            // Copia os valores para os campos do formulario
            inputId.value = registros[i].id;     // guarda o id no campo oculto
            inputNome.value = registros[i].nome;
            break;
        }
    }
}

// ----------------------------------------------------------
// 6) DELETE (excluir)
//    Remove da lista o registro que tiver o id informado.
//    filter() cria uma nova lista SEM o item excluido.
// ----------------------------------------------------------
function excluir(id) {
    // Pergunta antes de apagar
    const confirmar = confirm("Deseja realmente excluir este registro?");
    if (!confirmar) {
        return;
    }

    // Mantem apenas os registros cujo id e diferente do que queremos apagar
    registros = registros.filter(function (registro) {
        return registro.id !== id;
    });

    // Redesenha a tabela sem o item removido
    mostrarRegistros();
}

// ----------------------------------------------------------
// 7) Limpar o formulario
//    Esvazia os campos e o id oculto (sai do modo de edicao).
// ----------------------------------------------------------
function limparFormulario() {
    inputId.value = "";
    inputNome.value = "";
}

// Faz o botao "Limpar" chamar a funcao acima quando clicado
btnLimpar.addEventListener("click", limparFormulario);

// ----------------------------------------------------------
// 8) Inicio
//    Ao carregar a pagina, mostramos a tabela (comeca vazia).
// ----------------------------------------------------------
mostrarRegistros();
