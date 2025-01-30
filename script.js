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


const resultScientific = document.getElementById('result-scientific');
const basicCalc = document.querySelector('.basic');
const scientificCalc = document.querySelector('.scientific');

document.getElementById('basic-mode').addEventListener('click', function() {
    basicCalc.classList.remove('hidden');
    scientificCalc.classList.add('hidden');
});

document.getElementById('scientific-mode').addEventListener('click', function() {
    scientificCalc.classList.remove('hidden');
    basicCalc.classList.add('hidden');
});

// Funciones de la calculadora
function appendValue(value) {
    result.value += value;
    resultScientific.value += value;
}

function clearDisplay() {
    result.value = '';
    resultScientific.value = '';
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
    resultScientific.value = resultScientific.value.slice(0, -1);
}

function calculateResult() {
    try {
        result.value = eval(result.value);
        resultScientific.value = eval(resultScientific.value);
    } catch {
        result.value = 'Error';
        resultScientific.value = 'Error';
    }
}
