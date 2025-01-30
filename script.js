const result = document.getElementById('result');

// Agregar valor al display
function appendValue(value) {
    result.value += value;
}

// Limpiar pantalla
function clearDisplay() {
    result.value = '';
}

// Borrar último carácter
function deleteLast() {
    result.value = result.value.slice(0, -1);
}

// Calcular resultado
function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch {
        result.value = 'Error';
    }
}

// Soporte para el teclado
document.addEventListener('keydown', function(event) {
    if ('0123456789+-*/.%'.includes(event.key)) {
        appendValue(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        deleteLast();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});
