// Función para mostrar la información de un usuario
function mostrarUsuario(usuario) {
    const divUsuario = document.createElement("div");
    divUsuario.classList.add("usuario");
  
    const tituloUsuario = document.createElement("h3");
    tituloUsuario.classList.add("titulo-usuario");
    tituloUsuario.textContent = `Usuario: ${usuario.id} - ${usuario.name}`;
    divUsuario.appendChild(tituloUsuario);
  
    const infoUsuario = document.createElement("p");
    infoUsuario.textContent = `Nombre de usuario: ${usuario.username}`;
    divUsuario.appendChild(infoUsuario);
  
    const correoUsuario = document.createElement("p");
    correoUsuario.textContent = `Correo electrónico: ${usuario.email}`;
    divUsuario.appendChild(correoUsuario);
  
    const sitioUsuario = document.createElement("p");
    sitioUsuario.textContent = `Sitio web: ${usuario.website}`;
    divUsuario.appendChild(sitioUsuario);
  
    const botonVerTareas = document.createElement("button");
    botonVerTareas.textContent = "Ver Tareas";
    botonVerTareas.addEventListener("click", () => mostrarTareasUsuario(usuario.id));
    divUsuario.appendChild(botonVerTareas);
  
    const contenedorTareas = document.createElement("div");
    contenedorTareas.classList.add("tareas-usuario");
    contenedorTareas.id = `tareas-${usuario.id}`;
    divUsuario.appendChild(contenedorTareas);
  
    document.getElementById("contenedorUsuarios").appendChild(divUsuario);
  }
  
  // Función para mostrar las tareas de un usuario
  function mostrarTareasUsuario(idUsuario) {
    const contenedorTareas = document.getElementById(`tareas-${idUsuario}`);
    contenedorTareas.innerHTML = ""; // Limpiar tareas anteriores
  
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${idUsuario}`)
      .then(response => response.json())
      .then(tareas => {
        tareas.forEach(tarea => {
          const divTarea = document.createElement("div");
          divTarea.classList.add("tarea");
          divTarea.textContent = tarea.title;
  
          if (tarea.completed) {
            divTarea.classList.add("tarea-completada");
          }
  
          contenedorTareas.appendChild(divTarea);
        });
      });
  }
  
  // Función para obtener y mostrar usuarios
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(usuarios => {
      usuarios.forEach(usuario => mostrarUsuario(usuario));
    });
  