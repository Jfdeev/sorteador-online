const quantidade = document.getElementById('quantidade');
const min = document.getElementById('min');
const max = document.getElementById('max');
const resultado = document.getElementById('resultado');
const btn = document.getElementById('sorteio');
const btnPares = document.getElementById('sorteio-pares');

btn.addEventListener('click', () => {
    const minNumber = parseInt(min.value);
    const maxNumber = parseInt(max.value);
    const quantidadeNumber = parseInt(quantidade.value);
    const result = [];

    if (minNumber > maxNumber) {
        alert('O valor mínimo não pode ser maior que o valor máximo');
        return;
    }

    if (quantidadeNumber == 0){
        alert('A quantidade de números não pode ser 0');
        return;
    }
    
    

    for (let i = 0; i < quantidadeNumber; i++) {
        result.push(Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);
    }

    resultado.textContent = result.join(', ');

});

btnPares.addEventListener('click', () => {
    const minNumber = parseInt(min.value);
    const maxNumber = parseInt(max.value);
    const quantidadeNumber = parseInt(quantidade.value);
    const result = [];

    if (minNumber > maxNumber) {
        alert('O valor mínimo não pode ser maior que o valor máximo');
        return;
    }

    if (quantidadeNumber == 0){
        alert('A quantidade de números não pode ser 0');
        return;
    }
    

    // Ajustar minNumber para o próximo número par, se não for par
    let ajustadoMin = minNumber % 2 === 0 ? minNumber : minNumber + 1

    while(result.length < quantidadeNumber) {
        const numerosPares = Math.floor(Math.random() * (maxNumber - ajustadoMin + 1) + ajustadoMin);
        if (numerosPares % 2 == 0) {
            result.push(numerosPares);
        }
    }

    resultado.textContent = result.join(', ');
});

