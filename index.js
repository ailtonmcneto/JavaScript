var valores = ["ailson", "nenzinho", "tavares"];

for(var nomes in valores){
    console.log("Nome: ", valores[nomes]);
}
 
function confirmacao(){
    confirm("pagina carregada com sucesso");
}

var meusCarros = new Array("tavares", "Volvo", "BMW");
for (carros in meusCarros){
    console.log("Carros: ", meusCarros[carros]);
}

var frutas = new Array(10)
console.log(frutas.length);

document.write(meusCarros.join() + "<br>");

document.write(meusCarros.join(" and ") + "<br>");