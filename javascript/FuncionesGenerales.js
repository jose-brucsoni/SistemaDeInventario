// Obtén la referencia al enlace por su ID
const Select_Tema = document.getElementById('Temas_Selector');
const Link_Estilos_Generales = document.getElementById('Link_Estilos_Generales');

var servidorActual = window.location.origin + '';

// Selector de Temas Posterior Cambiar de temas al ser seleccionado
Select_Tema.addEventListener('change', function(event) {
    // Evita la navegación predeterminada (si es un enlace real)
    event.preventDefault();
    // Obtener el valor seleccionado en el select
    const valor = Select_Tema.value;
    // Concatenar el valor con el enlace de estilos
    const hrefNuevo = "/css/bootstrap-" + valor + ".css";
    // Cambiar el atributo href del enlace de estilos
    Link_Estilos_Generales.href = hrefNuevo;
    
    //CambiarFondoDeLosGraficos();
    
});

function recargarPagina(){
    location.reload();
}

//Buscar en cookie si ha seleccionado un tema previamente

window.addEventListener("load", function() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf("tema=") === 0) {
        var temaAlmacenado = cookie.substring(5); // Obtén el valor de la cookie
        const hrefNuevo = servidorActual+'/css/bootstrap-'+ temaAlmacenado + ".css";
        Link_Estilos_Generales.href = hrefNuevo;
        
        /*
        if (temaActual !== temaAlmacenado) {
          document.getElementById(temaActual).disabled = true;
          document.getElementById(temaAlmacenado).disabled = false;
        }*/
        break; // Detén el bucle una vez que se encuentra la cookie
      }else{
        const hrefNuevo = servidorActual+'/css/bootstrap-lux.css';
        Link_Estilos_Generales.href = hrefNuevo;
    
      }
    }
  });