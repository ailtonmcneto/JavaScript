const input = document.getElementById('numeroinput');
const botao = document.getElementById('button');
const resultado = document.getElementById('resultado');

let somatotal = 0

botao.addEventListener('click', function() {
    const numero = parseInt(input.value);
    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, insira um número válido.';
        return;
    }

    somatotal += numero;
    resultado.textContent = `A soma total é: ${somatotal}`;
    input.value = '';
    input.focus();
})
