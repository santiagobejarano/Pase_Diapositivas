var direccionImagenes = "diapositivas";
var numeroSlides = document.querySelectorAll("#lista ul li").length;
var nombreImagen = "Diapositiva";
var extensionImgagen = ".jpeg";
var cuadroImagen = document.querySelector("#container img");
var btnAvanzar = document.querySelector("#btnAvanzar");
var btnRetroceder = document.querySelector("#btnRetroceder");
var listaSlidesSelectorArray = document.querySelectorAll("#lista ul li");
var contador = 1;

const botonBarraLateral = document.querySelector(".toggle-btn");
const lista = document.querySelector("#lista");
const contenedorImagen = document.querySelector("#container");
const controles = document.querySelector("#controls");

botonBarraLateral.addEventListener("click", function() {
    lista.classList.toggle("active");
    contenedorImagen.classList.toggle("moved");
    controles.classList.toggle("moved");
});

cuadroImagen.setAttribute("src",direccionImagenes + "/" + nombreImagen + contador + extensionImgagen);

document.getElementById("totalSlides").textContent = numeroSlides;
actualizarEstadoInfo();

btnAvanzar.addEventListener("click", function(){
    if(contador < numeroSlides){
        contador ++;
        cuadroImagen.setAttribute("src",direccionImagenes + "/" + nombreImagen + contador + extensionImgagen);
        actualizarEstadoInfo();
    }
});

btnRetroceder.addEventListener("click", function(){
    if(contador > 1){
        contador --;
        cuadroImagen.setAttribute("src",direccionImagenes + "/" + nombreImagen + contador + extensionImgagen);
        actualizarEstadoInfo();
    }
});

listaSlidesSelectorArray.forEach((element, indice) => {
    element.addEventListener("click",function(){
        contador = indice+1;
        cuadroImagen.setAttribute("src",direccionImagenes + "/" + nombreImagen + contador + extensionImgagen);
        actualizarEstadoInfo();
        console.log(contador);
    })
});

function actualizarEstadoInfo(){
    document.getElementById("slideActual").textContent = contador;
    if(contador == numeroSlides){
        btnAvanzar.disabled = true;
        if(btnRetroceder.hasAttribute("disabled"))
            btnRetroceder.removeAttribute("disabled");
    }
    if(contador ==1){
        btnRetroceder.disabled = true;
        if(btnAvanzar.hasAttribute("disabled"))
            btnAvanzar.removeAttribute("disabled");
    }
    if(contador>1 && contador <numeroSlides){
        if(btnAvanzar.hasAttribute("disabled"))
            btnAvanzar.removeAttribute("disabled");
        if(btnRetroceder.hasAttribute("disabled"))
            btnRetroceder.removeAttribute("disabled");
    }
}