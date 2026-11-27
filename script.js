
/* =================================
   DATOS DE LOS TRABAJOS
================================= */

const trabajos = [

    {
        nombre: "Trabajo Practico 1",
        ruta: "./Trabajos_Practicos/T.Ps-1/index.html",
        imagen: "https://i.pinimg.com/736x/af/6b/e7/af6be79a0485ee1c5c74c145dee765e4.jpg"
    },

    {
        nombre: "Trabajo Practico 2",
        ruta: "./Trabajos_Practicos/T.Ps-2/index2.html",
        imagen: "https://i.pinimg.com/736x/de/ef/d8/deefd8b2102cccafe888b96e922053cd.jpg"
    },

    {
        nombre: "Trabajo Practico 3",
        ruta: "./Trabajos_Practicos/T.Ps-3/index3.html",
        imagen: "https://imgs.search.brave.com/dYE0Icye0hTx6YRh0Oyd-VxggBRXV202q7K2Jx0Nqe4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXVsYWNyZWFjdGl2/YS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjYvMDMvZmxl/eC1ib3gud2VicA"
    },

    {
        nombre: "Trabajo Practico 4",
        ruta: "./Trabajos_Practicos/T.Ps-4/index4.html",
        imagen: "https://imgs.search.brave.com/aS9wt4Nd2EvgtCQKZD6tewzDKR18tgXQXeIG6ciEjRs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MjkyNjc0ODgvZmls/ZS9vcmlnaW5hbC1h/NjliMjM0M2RjY2Ux/MjU2MWJiMWNkNWJh/ZTc5Mjg3My5wbmc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy"
    },

    {
        nombre: "Trabajo Practico 5",
        ruta: "./Trabajos_Practicos/T.Ps-5/img/index5.html",
        imagen: "https://imgs.search.brave.com/FimQOG51JjxLs-ElkwY2NHzKBm1op7c6Ph_nc7MT2mU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTkwMjgwMTItNDgx/YzA0ZmE3MDJkP2Zt/PWpwZyZxPTYwJnc9/MzAwMCZhdXRvPWZv/cm1hdCZmaXQ9Y3Jv/cCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE4z/eDhkMlZpSlRJd1pH/VnphV2R1ZkdWdWZE/QjhmREI4Zkh3dw"
    }

];


/* =================================
   SELECCIÓN DE ELEMENTOS HTML
================================= */

const navbar = document.querySelector(".navbar");

const botonMenu = document.getElementById("boton-menu");

const grupoTrabajos = document.querySelector(".grupo-trabajos");

const botonTrabajos = document.getElementById("boton-trabajos");

const listaTrabajos = document.getElementById("lista-trabajos");


/* =================================
   GENERACIÓN DE TARJETAS
================================= */

listaTrabajos.innerHTML = trabajos.map(trabajo => `

    <a href="${trabajo.ruta}" class="tarjeta-trabajo">

        <img src="${trabajo.imagen}" alt="${trabajo.nombre}">

        <span>${trabajo.nombre}</span>

    </a>

`).join("");


/* =================================
   MENÚ PRINCIPAL
================================= */

botonMenu.addEventListener("click", () => {

    const abierto = navbar.classList.toggle("abierto");

    if (abierto) {

        botonMenu.textContent = "CERRAR";

    } else {

        botonMenu.textContent = "MENU";

        // Cerrar también el submenú
        grupoTrabajos.classList.remove("desplegado");

        botonTrabajos.textContent = "TRABAJOS PRACTICOS";

        botonTrabajos.setAttribute("aria-expanded", "false");

    }

    botonMenu.setAttribute("aria-expanded", abierto);

});


/* =================================
   SUBMENÚ DE TRABAJOS
================================= */

botonTrabajos.addEventListener("click", () => {

    const desplegado = grupoTrabajos.classList.toggle("desplegado");

    if (desplegado) {

        botonTrabajos.textContent = "OCULTAR TRABAJOS";

    } else {

        botonTrabajos.textContent = "TRABAJOS PRACTICOS";

    }

    botonTrabajos.setAttribute("aria-expanded", desplegado);

});


/* =================================
   CERRAR MENÚ AL SELECCIONAR UN ENLACE
================================= */

const enlaces = document.querySelectorAll(".opciones a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", () => {

        navbar.classList.remove("abierto");

        grupoTrabajos.classList.remove("desplegado");

        botonMenu.textContent = "MENU";

        botonTrabajos.textContent = "TRABAJOS PRACTICOS";

        botonMenu.setAttribute("aria-expanded", "false");

        botonTrabajos.setAttribute("aria-expanded", "false");

    });

});
