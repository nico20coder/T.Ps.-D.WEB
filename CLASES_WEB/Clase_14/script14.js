let objeto = document.querySelector(".principal");

const cletas = [
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
        marca: "Venzo",
        rodado: 26,
        tipo: "tand up",
        estado: false 
    }
];

/*MUESTRA DE DATOS*/
cletas.forEach(e =>{
     let Hay = "Disponible"
    if (e.estado === false){
         Hay = "No_disponible"
    }
        /* console.log(`Bicicletas disponibles ${e.marca}`)
    }/*else{
        let Hay = "No disponible"
        console.log(`Para esta marca ${e.marca}, no hay bicis disponible`)
    }*/

    objeto.innerHTML += `
     <div class = "card">
            <h3>${e.marca}</h3>
            <p>categoria: ${e.tipo} </p>
            <p>Rodado: ${e.rodado} </p>
            <p class = ${Hay}>Stock: ${Hay}</p>
        </div>
        `
})



/*
let array = ["Juan", "pedro", "luciano"]

let objeto = document.querySelector(".principal");

/*objeto.textContent("HOLA")

OBJETO
const alumnos = [
    {nombre:"Ana", nota: 8 },
    {nombre:"Luis", nota: 4 },
    {nombre:"Sofia", nota: 9 },
    
]

alumnos.forEach(e => {

    let status = "aprobados"

    if(e.nota < 6){
        status = "desaprobado"
    }

/*    objeto.innerHTML += `

    /* <div class = "card">
            <h3>${e.nombre}</h3>
            <p>curso: 3B</p>
            <p class =${status} >Nota:${e.nota}</p>
        </div>`
    
}*;*/