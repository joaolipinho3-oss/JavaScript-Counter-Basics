const botaoSoma = document.getElementById('soma'); // Botão de +
const botaoSubtracao = document.getElementById('subtracao'); // Botão de menos
const increment = document.getElementById('changeBy'); // Mudar incremento
const tela = document.getElementById('display-counter');

let contador = 0;

function atualizarTela() {
  tela.textContent = contador;
};

botaoSoma.addEventListener('click', () => {
    contador += parseInt(increment.value);
    atualizarTela();
});

botaoSubtracao.addEventListener('click', () => {
    contador -= parseInt(increment.value);
    atualizarTela();
});