// Función para generar un color aleatorio en formato hexadecimal
const generarColorAleatorio = () => {
   const letras = "0123456789ABCDEF";
   var color = "#";
   for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
   }
   return color;
}

// Función para cambiar el color de fondo de la página
const cambiarColorDeFondo = () => {
   const colorAleatorio = generarColorAleatorio();
   document.body.style.backgroundColor = colorAleatorio;
   console.log(`Color generado:${colorAleatorio}`);
}
// Asignar la función al botón
const botonCambiarColor = document.getElementById("cambiarColor");
botonCambiarColor.addEventListener("click", cambiarColorDeFondo);