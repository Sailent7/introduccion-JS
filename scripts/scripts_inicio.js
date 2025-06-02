function cancelar() {
    document.getElementById("formulario").reset();
    limpiarErrores();
}

function limpiarErrores() {
    var errores = document.getElementsByClassName("mensaje-error");
    for (var i = 0; i < errores.length; i++) {
        errores[i].textContent = "";
    }

    var campos = document.getElementsByTagName("input");
    for (var i = 0; i < campos.length; i++) {
        campos[i].classList.remove("error");
    }
}

function validar() {
    limpiarErrores();
    var ok = true;

    var nombre = document.getElementById("nombre");
    if (nombre.value.trim() === "") {
        marcarError("nombre", "Debe ingresar su nombre completo.");
        ok = false;
    }

    var rut = document.getElementById("rut");
    if (!/^\d{7,8}-[\dkK]$/.test(rut.value)) {
        marcarError("rut", "El RUT ingresado no es válido.");
        ok = false;
    }

    var fecha = document.getElementById("fecha");
    if (fecha.value !== "" && !/^\d{2}\/\d{2}\/\d{4}$/.test(fecha.value)) {
        marcarError("fecha", "Formato incorrecto. Use dd/MM/yyyy.");
        ok = false;
    }

    var cv = document.getElementById("cv");
    if (cv.files.length > 0) {
        var nombreArchivo = cv.files[0].name.toLowerCase();
        var extension = nombreArchivo.split(".").pop();
        if (extension !== "pdf" && extension !== "docx") {
            marcarError("cv", "Solo se permiten archivos .pdf o .docx.");
            ok = false;
        }
    }

    var email = document.getElementById("email");
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email.value)) {
        marcarError("email", "El correo electrónico no es válido.");
        ok = false;
    }

    var clave = document.getElementById("clave");
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/.test(clave.value)) {
        marcarError("clave", "La contraseña debe tener mayúscula, minúscula, número y entre 6 y 12 caracteres.");
        ok = false;
    }

    var clave2 = document.getElementById("clave2");
    if (clave.value !== clave2.value) {
        marcarError("clave2", "Las contraseñas no coinciden.");
        ok = false;
    }

    if (ok) {
        alert("Formulario enviado correctamente.");
        cancelar();
    }
}

function marcarError(id, mensaje) {
    var campo = document.getElementById(id);
    var mensajeError = document.getElementById("error-" + id);
    campo.classList.add("error");
    mensajeError.textContent = mensaje;
}

