
const form = document.getElementById("form-crud");        
const inputId = document.getElementById("input-id");      
const inputNome = document.getElementById("input-nome");  
const btnLimpar = document.getElementById("btn-limpar");
const btnInverter = document.getElementById("btn-inverter");
const lista = document.getElementById("lista-registros");
const mensagemVazia = document.getElementById("mensagem-vazia"); 


let registros = [];
let proximoId = 1;


function mostrarLista() {

    lista.innerHTML = "";

    if (registros.length === 0) {
        mensagemVazia.style.display = "block";
        return;
    }
    mensagemVazia.style.display = "none";

    for (let i = 0; i < registros.length; i++) {
        const registro = registros[i];
        const linha = document.createElement("tr");
        linha.innerHTML =
            "<td>" + registro.nome + "</td>" +
            "<td>" +
                "<button class='btn btn-secundario btn-acao' onclick='editar(" + registro.id + ")'>Editar</button>" +
                "<button class='btn btn-excluir btn-acao' onclick='excluir(" + registro.id + ")'>Excluir</button>" +
            "</td>";
        lista.appendChild(linha);
    }
}

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = inputNome.value.trim();
    if (nome === "") {
        alert("Preencha o nome.");
        return;
    }

    if (inputId.value === "") {
        
        const novo = {
            id: proximoId,  
            nome: nome
        };
        registros.push(novo); 
        proximoId++;          
    } else {
        const id = Number(inputId.value);

        for (let i = 0; i < registros.length; i++) {
            if (registros[i].id === id) {
                registros[i].nome = nome;
                break; 
            }
        }
    }

    
    limparFormulario();
    mostrarLista();
});

function editar(id) {
   
    for (let i = 0; i < registros.length; i++) {
        if (registros[i].id === id) {
            
            inputId.value = registros[i].id;     
            inputNome.value = registros[i].nome;
            break;
        }
    }
}

function excluir(id) {
    
    const confirmar = confirm("Deseja realmente excluir este registro?");
    if (!confirmar) {
        return;
    }

    
    registros = registros.filter(function (registro) {
        return registro.id !== id;
    });

    mostrarLista();
}


function limparFormulario() {
    inputId.value = "";
    inputNome.value = "";
}

function inverterOrdem() {
    registros.reverse();  
    mostrarLista();   
}

btnInverter.addEventListener("click", inverterOrdem);
btnLimpar.addEventListener("click", limparFormulario);
mostrarLista();
