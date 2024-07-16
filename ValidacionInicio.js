function validarRegistro() {
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var emailRegistro = document.getElementById('emailRegistro').value.trim();
    var passwordRegistro = document.getElementById('passwordRegistro').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var valido = true;

    if (nombre === '') {
        document.getElementById('errorNombre').innerText = 'Por favor, ingrese su nombre';
        valido = false;
    } else {
        document.getElementById('errorNombre').innerText = '';
    }

    if (apellido === '') {
        document.getElementById('errorApellido').innerText = 'Por favor, ingrese su apellido';
        valido = false;
    } else {
        document.getElementById('errorApellido').innerText = '';
    }

    if (emailRegistro === '') {
        document.getElementById('errorEmailRegistro').innerText = 'Por favor, ingrese su correo electrónico';
        valido = false;
    } else if (!validarEmail(emailRegistro)) {
        document.getElementById('errorEmailRegistro').innerText = 'Por favor, ingrese un email válido con el dominio live.uleam.edu.ec';
        valido = false;
    } else {
        document.getElementById('errorEmailRegistro').innerText = '';
    }

    if (passwordRegistro === '') {
        document.getElementById('errorPasswordRegistro').innerText = 'Por favor, ingrese su contraseña';
        valido = false;
    } else {
        document.getElementById('errorPasswordRegistro').innerText = '';
    }

    if (confirmPassword === '') {
        document.getElementById('errorConfirmPassword').innerText = 'Por favor, confirme su contraseña';
        valido = false;
    } else if (passwordRegistro !== confirmPassword) {
        document.getElementById('errorConfirmPassword').innerText = 'Las contraseñas no coinciden';
        valido = false;
    } else {
        document.getElementById('errorConfirmPassword').innerText = '';
    }

    return valido;
}

function validarLogin() {
    var emailLogin = document.getElementById('emailLogin').value.trim();
    var passwordLogin = document.getElementById('passwordLogin').value;

    var valido = true;

    if (emailLogin === '') {
        document.getElementById('errorEmailLogin').innerText = 'Por favor, ingrese su correo electrónico';
        valido = false;
    } else if (!validarEmail(emailLogin)) {
        document.getElementById('errorEmailLogin').innerText = 'Por favor, ingrese un email válido con el dominio live.uleam.edu.ec';
        valido = false;
    } else {
        document.getElementById('errorEmailLogin').innerText = '';
    }

    if (passwordLogin === '') {
        document.getElementById('errorPasswordLogin').innerText = 'Por favor, ingrese su contraseña';
        valido = false;
    } else {
        document.getElementById('errorPasswordLogin').innerText = '';
    }
            // Redirigir a la página de habitaciones
            window.location.href = "PaginaHabitaciones.html";
            return false; // Prevenir el envío del formulario para redirigir
}

function validarRecuperar() {
    var emailRecuperar = document.getElementById('emailRecuperar').value.trim();

    var valido = true;

    if (emailRecuperar === '') {
        document.getElementById('errorEmailRecuperar').innerText = 'Por favor, ingrese su correo electrónico';
        valido = false;
    } else if (!validarEmail(emailRecuperar)) {
        document.getElementById('errorEmailRecuperar').innerText = 'Por favor, ingrese un email válido con el dominio live.uleam.edu.ec';
        valido = false;
    } else {
        document.getElementById('errorEmailRecuperar').innerText = '';
    }

    return valido;
}

function validarEmail(email) {
    // Validación personalizada para dominio live.uleam.edu.ec
    var pattern = /^[a-zA-Z0-9._%+-]+@live\.uleam\.edu\.ec$/;
    return pattern.test(email);
}
