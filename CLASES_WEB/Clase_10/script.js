 /*=============
    EJERCICIO 1 
  =============*/
function Multiplicar(n1, n2) {
    return n1 * n2;
}
let resultado = Multiplicar(5, 6);
console.log(resultado);


 /*=============
    EJERCICIO 2 
  =============*/

function CalcularDoble(n1) {
    return n1 * 2;
}
let resultado2 = CalcularDoble(27);
console.log(resultado2);

 /*=============
    EJERCICIO 3 
  =============*/
function InteresMC(P, C,  ) {
    return P * 35 / C;
}


let promptNombre = prompt("Ingrese su nombre completo:");
let promptCuota = Number(prompt("Ingrese la cantidad de cuotas que desea pagar:"));
let resultado3 = InteresMC(100.000, promptCuota);   
console.log(`Hola ${promptNombre} cada cuota a pagar sera de ${resultado3}`);






/*function MiFuncion(){
    console.log("Hola Mundo");
}
MiFuncion();
function MiFuncion2(A,B) {
    console.log(`Hola tu nombre es ${A} y tu apellido es ${B}`);
    
}
function devuelve(n1, n2) {
    return n1 + n2;   
}
let resultado = devuelve(5, 6);
console.log(resultado);
MiFuncion2("Juan", "Perez");*/
