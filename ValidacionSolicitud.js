function validarFormulario() {
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var direccion = document.getElementById('direccion').value.trim();
    var ciudad = document.getElementById('ciudad').value.trim();
    var pais = document.getElementById('pais').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var facultad = document.getElementById('facultad').value.trim();
    var carrera = document.getElementById('carrera').value.trim();
    var solicitudAnio = document.getElementById('solicitud_anio').value.trim();
    var tipoHabitacion = document.getElementById('tipo_habitacion').value;

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

    if (direccion === '') {
        document.getElementById('errorDireccion').innerText = 'Por favor, ingrese su dirección';
        valido = false;
    } else {
        document.getElementById('errorDireccion').innerText = '';
    }

    if (ciudad === '') {
        document.getElementById('errorCiudad').innerText = 'Por favor, ingrese su ciudad';
        valido = false;
    } else {
        document.getElementById('errorCiudad').innerText = '';
    }

    if (pais === '') {
        document.getElementById('errorPais').innerText = 'Por favor, ingrese su país';
        valido = false;
    } else {
        document.getElementById('errorPais').innerText = '';
    }

    if (email === '') {
        document.getElementById('errorEmail').innerText = 'Por favor, ingrese su correo electrónico';
        valido = false;
    } else {
        document.getElementById('errorEmail').innerText = '';
    }

    if (telefono === '') {
        document.getElementById('errorTelefono').innerText = 'Por favor, ingrese su teléfono';
        valido = false;
    } else {
        document.getElementById('errorTelefono').innerText = '';
    }

    if (facultad === '') {
        document.getElementById('errorFacultad').innerText = 'Por favor, ingrese su facultad';
        valido = false;
    } else {
        document.getElementById('errorFacultad').innerText = '';
    }

    if (carrera === '') {
        document.getElementById('errorCarrera').innerText = 'Por favor, ingrese su carrera';
        valido = false;
    } else {
        document.getElementById('errorCarrera').innerText = '';
    }

    if (solicitudAnio === '') {
        document.getElementById('errorSolicitudAnio').innerText = 'Por favor, ingrese la solicitud para el año';
        valido = false;
    } else {
        document.getElementById('errorSolicitudAnio').innerText = '';
    }

    if (tipoHabitacion === '') {
        document.getElementById('errorTipoHabitacion').innerText = 'Por favor, seleccione el tipo de habitación';
        valido = false;
    } else {
        document.getElementById('errorTipoHabitacion').innerText = '';
    }

    return valido;
}