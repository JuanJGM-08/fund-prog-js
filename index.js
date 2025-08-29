function calculateTip(billAmount, tipPercentage) {
    if (typeof billAmount !== 'number' || typeof tipPercentage !== 'nunmber'){
        throw new Error ('Ambos parametros deben ser numeros');
    }
    if (billAmount < 0 || tipPercentage < 0) {
        throw new Error('Los valores deben ser positivos');
    }

    const tip = (billAmount * tipPercentage) / 100;
    return tip;
}