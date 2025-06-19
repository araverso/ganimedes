function saludar(nombre="Usuario") {
    /*Declaré la función*/
    console.log(`Hola ${nombre}`);
}

saludar("ara");

const sumar = (a,b) => console.log(a + b);

sumar(2,8);

let elemento = document.getElementById("titulo");

elemento.style.color =" red";

let cajas = document.getElementsByClassName("caja");
console.log(cajas);
for (let i=0; i<cajas.length; i++){
    cajas[i].style.color="green";
    if (i==2) {
        cajas[i].style.color="pink";
    }
}

let primerParrafo  = document.querySelector(".contenedor .texto")
console.log(primerParrafo)

primerParrafo.textContent = "Hola mundo,";

let boton = document.getElementById("miBoton");
boton.addEventListener("click",function(){
    boton.style.backgroundColor = "red";
})