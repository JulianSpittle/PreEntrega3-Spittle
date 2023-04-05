class Moto {
  constructor(marca, tipo, motor, color, modelo, precio, imagen) {
    this.marca = marca;
    this.tipo = tipo;
    this.motor = motor;
    this.color = color;
    this.modelo = modelo;
    this.precio = parseInt(precio);
    this.imagen = imagen;
  }
}
const moto1 = new Moto(
  "Bajaj",
  "Street",
  "125cc",
  "Negro",
  "NS 125",
  545000,
  "bajajns125.png"
);
const moto2 = new Moto(
  "Zanella",
  "Scooter",
  "150cc",
  "Negro",
  "Exclusive Edizione",
  585000,
  "zanellaexclusive125.png"
);
const moto3 = new Moto(
  "Bajaj",
  "Tourer",
  "400cc",
  "Negro",
  "Dominar 400",
  1850000,
  "bajajdominar400.png"
);
const moto4 = new Moto(
  "Kymco",
  "Scooter",
  "350cc",
  "Plateado",
  "Downtown 350i ABS",
  2900000,
  "kymcodowntown350i.png"
);
const moto5 = new Moto(
  "Honda",
  "Enduro/Cross",
  "600cc",
  "Azul y rojo",
  "Xr 600",
  3500000,
  "hondaxr600.png"
);
const moto6 = new Moto(
  "Benelli",
  "Street",
  "600cc",
  "Negro",
  "TNT 600i",
  4650000,
  "benellitnt600i.png"
);
let arrayMotos = [moto1, moto2, moto3, moto4, moto5, moto6];

arrayMotos = arrayMotos.map((Moto) => {
  return {
    marca: Moto.marca,
    tipo: Moto.tipo,
    motor: Moto.motor,
    color: Moto.color,
    modelo: Moto.modelo,
    precio: Moto.precio,
    precioFinal: parseInt(Moto.precio * 1.1),
    imagen: Moto.imagen,
  };
});

localStorage.setItem("motos", JSON.stringify(arrayMotos)); //guardo en local storage el array de motos
const arrayMotosLS = JSON.parse(localStorage.getItem("motos"));

const btnBuscarMotos = document.getElementById("btnBuscarMotos");
const contenedorMotos1 = document.getElementById("contenedorMotos1");

function limpiarDivs() {
  consejos.innerHTML = "";
  contenedorMotos1.innerHTML = "";
}

btnBuscarMotos.addEventListener("click", function () {
  let presupuesto = document.getElementById("presupuesto").value;
  while (presupuesto != "0") {
    if (presupuesto < 500000 && presupuesto > 0) {
      limpiarDivs();
      const div = document.createElement("div");
      div.innerHTML = `<p>Tu presupuesto no alcanza para ninguna moto de las que tenemos, por favor ingrese uno mayor a 500000 </p>`;
      consejos.appendChild(div);
      return;
    } else if (presupuesto >= 500000 && presupuesto < 1200000) {
      const arrayMotos1 = arrayMotos.filter(
        (moto) => moto.precio >= 500000 && moto.precio < 1200000
      );
      limpiarDivs();
      arrayMotos1.forEach((moto) => {
        const div = document.createElement("div");
        div.innerHTML = `<p>Tu presupuesto es suficiente para motos entre 125cc y 300cc,
        por ejemplo esta: </p>
                            <p> Marca: ${moto.marca}</p>
                            <p> Tipo: ${moto.tipo}</p>
                            <p> Motor${moto.motor}</p>
                            <p> Color ${moto.color}</p>
                            <p> Modelo: ${moto.modelo}</p>
                            <p> Precio: ${moto.precio}</p>
                            <p> Precio Final: ${Math.round(
                              moto.precioFinal
                            )}</p>
                            <img src= "${"images/" + moto.imagen}">
                        `;
        contenedorMotos1.appendChild(div);
      });
      return;
    } else if (presupuesto >= 1200000 && presupuesto < 3000000) {
      const arrayMotos2 = arrayMotos.filter(
        (moto) => moto.precio >= 1200000 && moto.precio < 3000000
      );
      limpiarDivs();
      arrayMotos2.forEach((moto) => {
        const div = document.createElement("div");
        div.innerHTML = `<p>Tu presupuesto es suficiente para motos entre 300cc y 600cc, por ejemplo esta: </p>
                            <p> Marca: ${moto.marca}</p>
                            <p> Tipo: ${moto.tipo}</p>
                            <p> Motor${moto.motor}</p>
                            <p> Color ${moto.color}</p>
                            <p> Modelo: ${moto.modelo}</p>
                            <p> Precio: ${moto.precio}</p>
                            <p> Precio Final: ${Math.round(
                              moto.precioFinal
                            )}</p>
                            <img src= "${"images/" + moto.imagen}">
                        `;
        contenedorMotos1.appendChild(div);
      });
      return;
    } else if (presupuesto >= 3000000) {
      const arrayMotos3 = arrayMotos.filter((moto) => moto.precio >= 3000000);
      limpiarDivs();
      arrayMotos3.forEach((moto) => {
        const div = document.createElement("div");
        div.innerHTML = ` <p>Tu presupuesto es suficiente para cualquier moto incluso mayores a 600cc, por ejemplo esta: </p>          
                            <p> Marca: ${moto.marca}</p>
                            <p> Tipo: ${moto.tipo}</p>
                            <p> Motor${moto.motor}</p>
                            <p> Color ${moto.color}</p>
                            <p> Modelo: ${moto.modelo}</p>
                            <p> Precio: ${moto.precio}</p>
                            <p> Precio Final: ${Math.round(
                              moto.precioFinal
                            )}</p>
                            <img src= "${"images/" + moto.imagen}">
                        `;
        contenedorMotos1.appendChild(div);
      });
      return;
    }
  }
  limpiarDivs();
  const div = document.createElement("div");
      div.innerHTML = `<p>Hasta luego, gracias por su consulta</p>`;
      contenedorMotos1.appendChild(div);
});
