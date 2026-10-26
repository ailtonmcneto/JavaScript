const veiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    getDescricao: function () {
        return `Veiculo: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
};

console.log(veiculo.getDescricao());

document.getElementById("descricao").textContent = veiculo.getDescricao();
