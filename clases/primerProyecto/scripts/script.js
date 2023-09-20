  // Función para generar un color aleatorio en formato hexadecimal
  function generarColorAleatorio() {
   const letras = "0123456789ABCDEF";
   let color = "#";
   for (let i = 0; i < 6; i++) {
       color += letras[Math.floor(Math.random() * 16)];
   }
   return color;
}

// Función para cambiar el color de fondo de la página
function cambiarColorDeFondo() {
   const colorAleatorio = generarColorAleatorio();
   document.body.style.backgroundColor = colorAleatorio;
}

// Asignar la función al botón
const botonCambiarColor = document.getElementById("cambiarColor");
botonCambiarColor.addEventListener("click", cambiarColorDeFondo);
