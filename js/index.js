//Aca la declaracion de todos los productos
const producto = [
  {
    id: 1,
    nombre: "Uvas",
    categoria: "verduleria",
    descuento: "",
    precio: "25",
    imagen: "img/product/discount/uvas.jpg",
  },
  {
    id: 2,
    nombre: "Bananas",
    categoria: "verduleria",
    descuento: "",
    precio: "33",
    imagen: "img/product/discount/bananas.jpg",
  },
  {
    id: 3,
    nombre: "Melon",
    categoria: "verduleria",
    descuento: "",
    precio: "250",
    imagen: "img/product/discount/melon.png",
  },
  {
    id: 4,
    nombre: "Manzana",
    categoria: "verduleria",
    descuento: "",
    precio: "15",
    imagen: "img/product/discount/manzana.jpg",
  },
  {
    id: 5,
    nombre: "Jugo de Naranja",
    categoria: "supermercado",
    descuento: "",
    precio: "120",
    imagen: "img/product/discount/jugodenaranja.jpg",
  },
  {
    id: 51,
    nombre: "Ensalada de frutas",
    categoria: "supermercado",
    descuento: "",
    precio: "149",
    imagen: "img/product/discount/ensaladadefrutas.jpg",
  },
  {
    id: 6,
    nombre: "Cebolla",
    categoria: "verduleria",
    descuento: "",
    precio: "50",
    imagen: "img/product/discount/debolla.jpg",
  },
  {
    id: 7,
    nombre: "Garbanzos",
    categoria: "Supermercado",
    descuento: "",
    precio: "88",
    imagen: "img/product/discount/latadegarbanzos.jpg",
  },
  {
    id: 8,
    nombre: "Pastel de papas",
    categoria: "Comida Rapida",
    descuento: "",
    precio: "350",
    imagen: "img/product/discount/pasteldepapas.jpg",
  },
  {
    id: 9,
    nombre: "Pizza congelada",
    categoria: "Comida Rapida",
    descuento: "30",
    precio: "499",
    imagen: "img/product/discount/pizza.jpg",
  },
  {
    id: 10,
    nombre: "Limpia Vidrios",
    categoria: "Bazar",
    descuento: "",
    precio: "255",
    imagen: "img/product/discount/limpiavidrios.jpg",
  },
  {
    id: 11,
    nombre: "Trapo de piso",
    categoria: "Bazar",
    descuento: "",
    precio: "345",
    imagen: "img/product/discount/trapodepiso.jpg",
  },
  {
    id: 12,
    nombre: "Bandeja de vidrio",
    categoria: "Bazar",
    descuento: "",
    precio: "90",
    imagen: "img/product/discount/bandejadevidrio.jpg",
  },
  {
    id: 13,
    nombre: "Lapicera Azul",
    categoria: "Libreria",
    descuento: "",
    precio: "10",
    imagen: "img/product/discount/lapiceraazul.jpg",
  },
  {
    id: 14,
    nombre: "Cuaderno Rayado",
    categoria: "Libreria",
    descuento: "20",
    precio: "290",
    imagen: "img/product/discount/cuadernorayado.jpg",
  },
  {
    id: 15,
    nombre: "Mochila Negra",
    categoria: "Libreria",
    descuento: "50",
    precio: "990",
    imagen: "img/product/discount/mochilanegra.jpg",
  },
  {
    id: 16,
    nombre: "Coca cola",
    categoria: "Bebidas",
    descuento: "",
    precio: "100",
    imagen: "img/product/discount/cocacola.jpg",
  },
  {
    id: 17,
    nombre: "Cerveza Andes",
    categoria: "Bebidas",
    descuento: "10",
    precio: "330",
    imagen: "img/product/discount/cervezaandes.jpg",
  },
  {
    id: 18,
    nombre: "Seven Up",
    categoria: "Bebidas",
    descuento: "",
    precio: "150",
    imagen: "img/product/discount/sevenup.jpg",
  },
  {
    id: 19,
    nombre: "Gancia",
    categoria: "Bebidas",
    descuento: "15",
    precio: "1400",
    imagen: "img/product/discount/gancia.jpg",
  },
];
//Esta funcion agrega productos a los favoritos
const agregarFav = (id) => {
  let favoritosAlmacenados = JSON.parse(localStorage.getItem("favguardado"));
  let agregado = producto.find((item) => item.id == id);
  let compruevo = false;

  if (favoritosAlmacenados) {
    favoritosAlmacenados.find((item) => {
      if (item.id == id) {
        compruevo = true;
      } else {
        compruevo = false;
      }
    });
    if (compruevo) {
      alert("Este producto ya fue agregado a favoritos antes");
    } else {
      let nuevosFavs = favoritosAlmacenados;
      nuevosFavs.push(agregado);
      localStorage.setItem("favguardado", JSON.stringify(nuevosFavs));
      alert("Se agrego un nuevo favorito");
    }
  } else {
    let favorito = [agregado];
    localStorage.setItem("favguardado", JSON.stringify(favorito));
    alert("Se agrego un nuevo favorito");
  }
};
//Esta funcion agrega productos al carrito
const agregarCarrito = (id) => {
  let carritoAlmacenado = JSON.parse(localStorage.getItem("carritoguardado"));
  let carrito = producto.find((item) => item.id == id);
  let carrinuevo = false;

  // Almaceno el carrito
  if (carritoAlmacenado) {
    carritoAlmacenado.find((item) => {
      if (item.id == id) {
        carrinuevo = true;
      } else {
        carrinuevo = false;
      }
    });
    if (carrinuevo) {
      alert("Este producto ya fue agregado al carrito antes");
    } else {
      let nuevocarri = carritoAlmacenado;
      nuevocarri.push(carrito);
      localStorage.setItem("carritoguardado", JSON.stringify(nuevocarri));

      alert("Se agrego un nuevo producto");
    }
  } else {
    let carri = [carrito];
    localStorage.setItem("carritoguardado", JSON.stringify(carri));
    alert("Se agrego un nuevo Producto");
  }
};
//Aca renderiza los productos y luego los coloca en el DOM del index.html
let tarjetaProducto = document.getElementById("producto");
producto.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
  <div class="product__item">
  <div class="product__item__pic set-bg" data-setbg=${item.imagen}>
        <ul class="product__item__pic__hover">
        <li><a id='favorito${item.id}'><i class="fa fa-heart"></i></a></li>
        <li><a id='carrito${item.id}' ><i class="fa fa-shopping-cart"></i></a></li>
        </ul>
  </div>
  <div class="product__item__text">
        <h6><a href="#">${item.nombre}</a></h6>
        <h5>$ ${item.precio}</h5>
  </div>
  </div>
  `;
  tarjetaProducto.insertAdjacentElement("beforebegin", div);
  div.className = "col-lg-4 col-md-6 col-sm-6";

  let fav = document.getElementById(`favorito${item.id}`);
  let car = document.getElementById(`carrito${item.id}`);

  //aca esperamos los eventos y llamamos a la funcion correspondiente (agregar a fav o al carrito)
  fav.addEventListener("click", () => {
    agregarFav(item.id);
  });

  car.addEventListener("click", () => {
    agregarCarrito(item.id);
  });
});
