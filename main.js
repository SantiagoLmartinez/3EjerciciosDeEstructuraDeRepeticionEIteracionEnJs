//actividad 01
/* 1. Programa un ejemplo que, dada una variable de tipo cadena con la carta del 4 de
corazones, compruebe si es de corazones y además es el número 4. En caso afirmativo,
lo imprimimos en la consola. Probamos el mismo programa con el 3 de corazones, y
con el rey de corazones. ¿Qué sucede?
 */
//-------------------------------------------------

let carta = "4c";
if (carta[0] === "4" && carta[1] === "c") {
    console.log("Es un 4 de corazones");

} else {
    console.log("No es un 4 de corazones")
}

carta = "3c";
if (carta[0] === "4" && carta[1] === "c") {
    console.log("Es un 4 de corazones");

} else {
    console.log("No es un 4 de corazones")
}

arta = "12c";
if (carta[0] === "4" && carta[1] === "c") {
    console.log("Es un 4 de corazones");

} else {
    console.log("No es un 4 de corazones")
}

console.log("-------------------Separador---------------------");
//-------------------------------------------------
//actividad 02
/* 2. Utiliza un bucle para recorrer todos los años bisiestos anteriores a 2050, e imprímelos
en la consola.
(Cualquier año divisible por 4 es un año bisiesto) */
//-------------------------------------------------


for (let año = 2021; año <= 2050; año++) {
    if (año % 4 === 0) {
        console.log(año + " : Es un año biciesto")
    } else {
        console.log(año + " :No un año biciesto")
    }
}

console.log("-------------------Separador---------------------");

//-------------------------------------------------
//actividad 03
/*3. Utiliza un bucle para recorrer todas las cartas de la baraja, desde el 1 al 12 de cada palo.
 Imprime en pantalla solamente las cartas rojas que sea múltiplos de 3. 
 4 palos de 12 cartas (48 total)
-Picas y trebol(negra)
-Corazon y rombo(Rojas) */
//---------------------------------------------------------
//declaramos una variable y le asignamos un array
let cartas = "dpct"


//recorremos el array
for (i = 0; i < cartas.length; i++) {
    //recorremos las 12 cartas de cada palo     
    for (x = 1; x <= 12; x++) {
        if (cartas[i] === "c" && x % 3 === 0) {
            console.log(x+ cartas[i] + "orazones Multiplo de 3")}

         else if(cartas[i] === "d" && x % 3 === 0){
            console.log(x+ cartas[i] + "iamantes :Multiplo de 3"); 
        }
        /*if(cartas[i] === "r" && x % 3 === 0){
            console.log(x+"es de rombos,Multiplo de 3");*/
    }

}