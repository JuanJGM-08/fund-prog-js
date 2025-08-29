function calculateTip(billAmount, tipPercentage) {
    if (typeof billAmount !== 'number' || typeof tipPercentage !== 'number') {
        throw new Error('Ambos parámetros deben ser números');
    }
    if (billAmount < 0 || tipPercentage < 0) {
        throw new Error('Los valores deben ser positivos');
    }

    const tip = (billAmount * tipPercentage) / 100;
    return tip;
}

function mostrarResultados() {
    console.log("=== CALCULADORA DE PROPINA ===");
    console.log("Ejemplo 1 - Input: calculateTip(100, 10)");
    console.log("Ejemplo 1 - Output:", calculateTip(100, 10));
    console.log("---");
    console.log("Ejemplo 2 - Input: calculateTip(1524.33, 25)");
    console.log("Ejemplo 2 - Output:", calculateTip(1524.33, 25));
    console.log("---");
}

mostrarResultados();