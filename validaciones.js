// validaciones.js
function verificarCorreo() {
    const valor = document.getElementById('correo').value.trim();
    const regex1 = /^[a-z]+\d{1,2}@curnvirtual\.edu\.co$/;
    const regex2 = /^[aeiou][a-z]*[._][a-z]+@curn\.edu\.co$/;
    mostrarResultado('resultado-correo', regex1.test(valor) || regex2.test(valor));
}

function verificarHex() {
    const valor = document.getElementById('hex').value.trim();
    const regex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    mostrarResultado('resultado-hex', regex.test(valor));
}

function verificarDecimal() {
    const valor = document.getElementById('decimal').value.trim();
    const regex = /^(?:[0-4],[0-9]|5,0)$/;
    mostrarResultado('resultado-decimal', regex.test(valor));
}

function mostrarResultado(id, esValido) {
    const resultado = document.getElementById(id);
    if (esValido) {
        resultado.textContent = 'Válido';
        resultado.className = 'resultado valido';
    } else {
        resultado.textContent = 'Inválido';
        resultado.className = 'resultado invalido';
    }
}
