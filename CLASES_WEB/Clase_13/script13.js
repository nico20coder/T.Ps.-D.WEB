 /*=============================
  Trabajo de practica con arrays
 =============================== */

 /*Arrays de Objetos */
let cletas = [
    {
        marca: "Venzo",
        rodado: 29,
        tipo:"ruta",
        estado: true 
    },
    {
        marca: "Specialized",
        rodado: 29,
        tipo: "mountan bike",
        estado: true 
    },
    {
        marca: "Venzo",
        rodado: 26,

        tipo: "ruta",
        estado: false 
    },
    {
        marca: "Top Mega",
        rodado: 12,
        tipo:"para ninios",
        estado: true 
    },
    {
        marca: Venzo,
        rodado: 26,
        estado: false 
    }
] 

/*MUESTRA DE DATOS*/
cletas.forEach(e =>{
    if (e.estado === true){
        console.log(`Las Bicicletas disponibles son las siguientes ${e.marca}`)
    }else{
        console.log("Por el momento no hay stock disponibles")
    }
});





















/*
const obj = {
    key:
    bool:

}



let array = ["Pedro", "Juan", "Maria"]

let arregloApi = [
    {
        nombre:"pedro",
        apellido:"gomez",
        edad = 19
    }
    {
        nombre:"Gladis",
        apellido: "laBomba",
        edad : 19
    }


]

for (let index = 0; index < array.length; index++ ){
    console.log
}
*/





/*
 1_Crear un array con n objetos y cada uno debe incluir una propiedad booleana.
 2_ Utilizar un For Each para mostrar los elementos que cumplan o no dicha propiedad booleana.
 3_Imprimir por pantalla solo los elementos que correspondan.

*/