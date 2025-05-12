// Capturamos el contenedor de la alerta
var alerta = document.getElementById("alertaFormulario");
console.log(alerta); // Para verificar en consola

// Ejemplo: Mostrar alerta con mensaje de error
alerta.textContent = "Corrige los errores del formulario.";
alerta.classList.remove("d-none"); // Muestra la alerta si estaba oculta
alerta.classList.add("alert-danger"); // Estilo rojo de error (también puedes usar alert-success)
