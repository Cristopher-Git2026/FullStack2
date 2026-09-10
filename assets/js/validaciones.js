document.addEventListener('DOMContentLoaded', function() {
    var fecha = new Date();
    fecha.setDate(fecha.getDate() - 1);
    var max = fecha.toISOString().split('T')[0];
    var fechaInput = document.getElementById('fecha-nacimiento');
    if (fechaInput) {
        fechaInput.setAttribute('max', max);
    }

    var password2 = document.getElementById('password2');
    var password = document.getElementById('password');
    if (password2 && password) {
        password2.addEventListener('input', function() {
            if (password2.value !== password.value) {
mostrarError('password2', 'Las contraseñas no coinciden');
            } else {
                limpiarError('password2');
            }
        });
    }
});

function campoVacio(valor) {
    if (valor === '') {
        return true;
    } else {
        return false;
    }
}

function emailValido(email) {
    if (email.indexOf('@') > -1) {
        return true;
    } else {
        return false;
    }
}

function calcularEdad(fecha) {
    var hoy = new Date();
    var nac = new Date(fecha);
    var edad = hoy.getFullYear() - nac.getFullYear();
    return edad;
}

function mostrarError(id, msg) {
    var el = document.getElementById('error-' + id);
    if (el) {
        el.textContent = msg;
    }
}

function limpiarError(id) {
    var el = document.getElementById('error-' + id);
    if (el) {
        el.textContent = '';
    }
}

function validarRegistro(event) {
    event.preventDefault();
    var ok = true;

    limpiarError('nombre');
    limpiarError('email');
    limpiarError('password');
    limpiarError('password2');
    limpiarError('fecha');
    limpiarError('terminos');

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    var fecha = document.getElementById('fecha-nacimiento').value;
    var terminos = document.getElementById('terminos').checked;

    if (campoVacio(nombre)) {
        mostrarError('nombre', 'Ingresa tu nombre');
        ok = false;
    }

    if (campoVacio(email)) {
        mostrarError('email', 'Ingresa tu correo');
        ok = false;
    } else {
        if (!emailValido(email)) {
            mostrarError('email', 'Correo no valido');
            ok = false;
        }
    }

    var esDuoc = false;
    if (email.indexOf('@duoc.cl') > -1) {
        esDuoc = true;
    }
    if (email.indexOf('@duocuc.cl') > -1) {
        esDuoc = true;
    }
    if (esDuoc) {
        var s = document.getElementById('sugerencia-email');
        if (s) {
            s.textContent = 'Tienes 20% de descuento!';
            s.style.color = '#39FF14';
        }
    }

    if (campoVacio(password)) {
        mostrarError('password', 'Ingresa contraseña');
        ok = false;
    } else {
        if (password.length < 8) {
            mostrarError('password', 'Minimo 8 caracteres');
            ok = false;
        }
    }

    if (password !== password2) {
        mostrarError('password2', 'Las contraseñas no coinciden');
        ok = false;
    }

    if (campoVacio(fecha)) {
        mostrarError('fecha', 'Ingresa tu fecha');
        ok = false;
    } else {
        var edad = calcularEdad(fecha);
        if (edad < 18) {
            mostrarError('fecha', 'Debes ser mayor de 18 años');
            ok = false;
        }
    }

    if (terminos === false) {
        mostrarError('terminos', 'Acepta los terminos');
        ok = false;
    }

    if (ok === true) {
        var descuento = 0;
        if (esDuoc) {
            descuento = 20;
        }
        var puntos = 100;

        var codigoRef = document.getElementById('referido').value.toUpperCase();
        if (codigoRef !== '') {
            var codigosValidos = ["LEVELUP2026", "GAMER100", "CHILEPLAY", "NIVELES50"];
            var refValido = false;
            for (var i = 0; i < codigosValidos.length; i++) {
                if (codigosValidos[i] === codigoRef) {
                    refValido = true;
                    break;
                }
            }
            if (refValido) {
                puntos = puntos + 50;
            }
        }

        localStorage.setItem('usuario', JSON.stringify({
            nombre: nombre,
            email: email,
            esDuoc: esDuoc,
            descuento: descuento,
            puntos: puntos,
            preferencias: []
        }));
        alert('Cuenta creada! Ganaste ' + puntos + ' puntos LevelUp!');
        document.getElementById('form-registro').reset();
    }
}
