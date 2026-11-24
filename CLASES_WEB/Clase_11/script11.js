/*SISTEMA DE GESTION DE UN CON SECIONARIO DE MOTOS*/
let MotosMarcas = ["Honda","Yamaha","Kawasaki","Suzuki","Ducati","Zontes","CFMoto"]
let Precios = [9000,7500,10000,9000,10000,8300,8500] 
let Modelos = ["CB300F","FZ25","Ninja H2r","Gixxer 250","Scrambler","R 350","NK450"]
let I = 0;
/*let opcion = 0;*/
while (I < 7) {
    
    console.log("Bienvenido al concesionario de motos, a continuacion se le mostrara el listado de motos disponibles");
    console.log(`Listado de motos disponibles: ${MotosMarcas.join(", ")} su modelo son: ${Modelos.join(", ")} y su precio es de: ${Precios.join(", ")}`);
    /* opcion = parseInt(prompt("Seleccione una opción:\n1. Ver motos disponibles\n2. Ver precios\n3. Ver modelos\n4. Salir"));*/
    /*console.log(`Precios: ${Precios.join(", ")}`);
    console.log(`Modelos: ${Modelos.join(", ")}`);
    /* if (opcion === 1){
         console.log(`Listado de motos disponibles: ${MotosMarcas.join(", ")}`);
     }
     if (opcion === 2){
         console.log(`Precios: ${Precios.join(", ")}`);
     }
     else if (opcion === 3){
         console.log(`Modelos: ${Modelos.join(", ")}`);
     }*/
}
























/*let arreglo = ["hola", "chau"]

console.log(typeof(arreglo)); Tipo de dato que es el arreglo, en este caso es un objeto

console.log(arreglo.includes("hola"));  Verifica si ese objeto esta en el erreglo, arroja un true o false

console.log(arreglo.some(e => e ==="baba"));  Verifica si en el array hay un objeto igual al senialado alli, arroja un true o false

arreglo.push("baba");  /*Agrega un objeto al final del arreglo
console.log(arreglo);

arreglo.pop("baba");  /*Elimina el ultimo objeto del arreglo
console.log(arreglo);

/*Estructura de bucle
for (let i = 0; i < 5; i++) {
    console.log(`hola este contador es ${i}`);

}

/*console.log(arreglo.includes("hola"));
*/