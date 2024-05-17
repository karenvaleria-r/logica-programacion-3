function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Revisar si es un número válido
function esNumeroValido(input) {
    const number = parseInt(input, 10);
    return !isNaN(number) && number >= 0;
}

function calcularFactorial() {
    const input = document.getElementById("numeroInput").value;
    
    if (esNumeroValido(input)) {
        const number = parseInt(input, 10);
        const resultado = factorial(number);
        document.getElementById("resultado").innerText = `El factorial de ${number} es ${resultado}`;
    } else {
        alert("Ingrese un número válido.");
        document.getElementById("numeroInput").value = "";
        document.getElementById("resultado").innerText = "";
    }
}
