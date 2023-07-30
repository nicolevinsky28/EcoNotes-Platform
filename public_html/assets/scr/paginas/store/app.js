
//ABAJO DE TODO ESTA EL INICIAR SESION

const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const botonComprar = document.getElementById('comprar')
const contadorCarrito = document.getElementById('contadorCarrito')

//OCTAVO PASO
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []
let productosCarro = []
let elementosCarrito = 0

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


botonComprar.addEventListener('click', () =>{
    window.open(`https://api.whatsapp.com/send?phone=+541132325465&text=Hola%20Eco%20Notes%20soy%20${usuario}!%20Quiero%20comprar%20los%20siguientes%20productos:%20${productosCarro}`)

})

botonVaciar.addEventListener('click', () => {
    Swal.fire({
        title: 'Estas seguro?',
        text: "Se borrara todo el carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(126, 184, 126)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciar!'
      }).then((result) => {
        if (result.isConfirmed) {
            Toastify({

                text: "Se vacio el carrito",
                position: "left",
                duration: 3000,
                style: {
                    background: "rgb(126, 184, 126)",
                  }
                }).showToast();
          elementosCarrito = 0
          carrito.length = 0
          productosCarro.length = 0
          actualizarCarrito()
        }
      })
})


//PRIMER PRIMER PASO, INYECTAR EL HTML
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img class="fotoProduct" src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Medida: ${producto.talle}</p>
    ${producto.envio === true ? `<p style="color: red" >Envio gratis</p>` : "" }
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `
    contenedorProductos.appendChild(div)

    //2 - SEGUNDO PASO, LUEGO DE QUE INSERTEMOS EL HTML EN EL DOM:
    const boton = document.getElementById(`agregar${producto.id}`)
    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado
    //le hago un get element by id (el de agregar) Obtengo el elemento y a dicho elemento le agregamos
    //el add event listener

    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(producto.id)
        // 
    
    })
    
})

// 1- PRIMER PASO

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    elementosCarrito++
    Toastify({

        text: "Producto agregado al carrito",
        position: "left",
        duration: 3000,
        style: {
            background: "rgb(126, 184, 126)",
          }
        }).showToast();
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
        
    actualizarCarrito() 
    console.log([])
}
//agregarAlCarrito(1) //Le pasamos el ID por parametro. Tenemos que asigarle como evento esta funcion al boton
//con el id de su producto correspondiente

// 5 - QUINTO PASO
const eliminarDelCarrito = (prodId) => {
    carrito.length === 0 ? elementosCarrito = 0 : elementosCarrito--

    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
    // un elemento 
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
    console.log(carrito)

}

const actualizarCarrito = () => {
    carrito.length === 0 ? elementosCarrito = 0: ""
    


    //4- CUARTO PASO
    //LOS APPENDS SE VAN ACUMULANDO CON LO QE HABIA ANTES
    contenedorCarrito.innerHTML = "" //Cada vez que yo llame a actualizarCarrito, lo primero q hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizado
    //3 - TERCER PASO. AGREGAR AL MODAL. Recorremos sobre el array de carrito.

    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
    carrito.forEach((prod) => {
        productosCarro.push(prod.nombre)
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        

    })
    //SEPTIMO PASO
    contadorCarrito.innerText = elementosCarrito // actualizamos con la longitud del carrito.
    //OCTAVO PASO
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.

}


// SESION



let usuario = localStorage.getItem("usuario");

if (usuario == null){
    document.getElementById('contenedor-productos').style.display = "none";
    document.getElementById('iniciar-sesion').style.display = "true";
} else{
    document.getElementById("textWelcome").innerHTML = `<h2>Bienvenido, ${usuario}</h2>`
    document.getElementById('iniciar-sesion').style.display = "none";
    document.getElementById('contenedor-productos').style.display = "true";
}

function store() {
    localStorage.setItem('usuario', document.getElementById("user").value);
    usuario = document.getElementById("user").value
    alerta()
}

