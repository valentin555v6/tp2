function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const altura = parseInt(document.getElementById("altura").value);
    const correo = document.getElementById("correo").value.trim();
  
    let mensaje = "";
    let tipoMensaje = "mensaje-error"; // Inicialmente mensaje de error
  
    if (nombre === "" || apellido === "") {
      mensaje = "Los campos 'Nombre' y 'Apellido' son obligatorios.";
    } else if (nombre.length > 50 || apellido.length > 50) {
      mensaje = "Los nombres no pueden tener más de 50 caracteres.";
    } else if (edad < 18) {
      mensaje = "La edad debe ser mayor o igual a 18 años.";
    } else if (altura < 0 || altura > 230) {
      mensaje = "La altura debe estar entre 0 y 230 cm.";
    } else if (!correo.includes("@")) {
      mensaje = "El correo electrónico debe incluir el símbolo '@'.";
    } else {
      // Formulario válido
      mensaje = "Formulario enviado correctamente.";
      tipoMensaje = "mensaje-valido";
    }
  
    document.getElementById("mensaje").className = tipoMensaje;
    document.getElementById("mensaje").innerHTML = mensaje;
  }
  