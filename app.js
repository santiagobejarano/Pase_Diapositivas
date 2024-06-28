var direccionImagenes = "diapositivas";
var numeroSlides = document.querySelectorAll("#lista ul li").length;
var nombreImagen = "Diapositiva";
var extensionImagen = ".jpeg";
var cuadroImagen = document.querySelector("#container img");
var btnAvanzar = document.querySelector("#btnAvanzar");
var btnRetroceder = document.querySelector("#btnRetroceder");
var listaSlidesSelectorArray = document.querySelectorAll("#lista ul li");
var contador = 1;

cuadroImagen.setAttribute("src", `${direccionImagenes}/${nombreImagen}${contador}${extensionImagen}`);

document.getElementById("totalSlides").textContent = numeroSlides;
actualizarEstadoInfo();

btnAvanzar.addEventListener("click", function() {
    if (contador < numeroSlides) {
        contador++;
        cuadroImagen.setAttribute("src", `${direccionImagenes}/${nombreImagen}${contador}${extensionImagen}`);
        actualizarEstadoInfo();
    }
});

btnRetroceder.addEventListener("click", function() {
    if (contador > 1) {
        contador--;
        cuadroImagen.setAttribute("src", `${direccionImagenes}/${nombreImagen}${contador}${extensionImagen}`);
        actualizarEstadoInfo();
    }
});

listaSlidesSelectorArray.forEach((element, indice) => {
    element.addEventListener("click", function() {
        contador = indice + 1;
        cuadroImagen.setAttribute("src", `${direccionImagenes}/${nombreImagen}${contador}${extensionImagen}`);
        actualizarEstadoInfo();
    });
});

function actualizarEstadoInfo() {
    document.getElementById("slideActual").textContent = contador;

    btnAvanzar.disabled = contador === numeroSlides;
    btnRetroceder.disabled = contador === 1;

    if (contador > 1 && contador < numeroSlides) {
        btnAvanzar.disabled = false;
        btnRetroceder.disabled = false;
    }
}

/* Movimiento barra lateral */
const botonBarraLateral = document.querySelector(".toggle-btn");
const lista = document.querySelector("#lista");
const contenedorImagen = document.querySelector("#container");
const controles = document.querySelector("#controls");

botonBarraLateral.addEventListener("click", function() {
    lista.classList.toggle("active");
    contenedorImagen.classList.toggle("moved");
    controles.classList.toggle("moved");
});