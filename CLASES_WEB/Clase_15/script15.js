let contenedor = document.querySelector(".Conteiner")

const Productos = [
  { id: 1, nombre: "Nassau", categoria: "Futbol", precio: 25000, stock: 12, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMSFdS6lFP7nKBzvKituIdIZLdP-zow366hrik4twqcNmYTTdSFHMg26w&s=10" },

  { id: 2, nombre: "Casaca Real Madrid", categoria: "Vestimenta", precio: 48000, stock: 0, imagen: "https://imgs.search.brave.com/NQjfKyc02kdrfRwAWlxymSHNnGxMaj1e1EfctsL1_0k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nLzhNWUFB/T1N3NVVkalNEZkEv/cy1sNDAwLndlYnA" },

  { id: 3, nombre: "Conos de entreno", categoria: "Periféricos", precio: 15000, stock: 5, imagen: "https://imgs.search.brave.com/gcxOpraK9GV4HyIcZcoX9wIgoltCFNumo5terr-yLpc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk4MTg4Ny1NTEM5/Njg4NDQwOTM5NF8x/MTIwMjUtRS53ZWJw"},

  { id: 4, nombre: "Bolsa de Box", categoria: "Boxeo", precio: 180000, stock: 3, imagen: "https://imgs.search.brave.com/ho5ogml51G_iz9dsIhUSMnD8o-oRnkb9BrbuoVxr6ys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY4NTI3Mi1NTEEx/MTM1MTgyOTg1Mzdf/MDYyMDI2LUUud2Vi/cA"},

    { id: 5, nombre: "Straps", categoria: "Gym", precio: 32000, stock: 0, imagen: "https://imgs.search.brave.com/9C2Dfc13mZwlDVAV3VfKfaV2FYJlFwnwuyyqrsDC5YM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ybGdy/aXBzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8xMS9N/QUlOLTQtNTAweDUw/MC5qcGc"}
];

/*MUESTRA DE DATOS*/
Productos.forEach(e =>{
     let {stock} = e
    if (stock <= 0){

        console.log('Debes reponer el estock de este producto.')
    }
        /* console.log(`Bicicletas disponibles ${e.marca}`)
    }/*else{
        let Hay = "No disponible"
        console.log(`Para esta marca ${e.marca}, no hay bicis disponible`)
    }*/

    contenedor.innerHTML += ` 
       <div class="card">
            <h3>${e.nombre}</h3>
            <p><strong>Codigo:</strong> ${e.id}</p>
            <p><strong>Categoria:</strong> ${e.categoria}</p>
            <p><strong>Precio:</strong> $${e.precio}</p>
            <p><strong>Existencias:</strong> ${e.stock}</p>
            <div class="card-image-box">
                <img src="${e.imagen}" alt="${e.nombre}">
            </div>
        </div>
    `;
})








//destructuring con objetos
/*const objeto = {nombre: "Juan", edad: 20};
let {nombre, edad} = objeto;
console.log(nombre);

//destructuring con array
const Array = [{nombre:"Juan", edad: 20}]; 
console.log(nombre) = Array [0]*/


