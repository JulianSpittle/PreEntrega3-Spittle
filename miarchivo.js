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

const moto1 = new Moto ("Bajaj", "Street", "125cc", "Negro", "NS 125", 545000, "bajajns125.png");
const moto2 = new Moto ("Zanella", "Scooter", "150cc", "Negro", "Exclusive Edizione", 585000, "zanellaexclusive125.png");
const moto3 = new Moto ("Bajaj", "Tourer", "400cc", "Negro", "Dominar 400", 1850000, "bajajdominar400.png");
const moto4 = new Moto ("Kymco", "Scooter", "350cc", "Plateado", "Downtown 350i ABS", 2900000, "kymcodowntown350i.png");
const moto5 = new Moto ("Honda", "Enduro/Cross", "600cc", "Azul y rojo", "Xr 600", 3500000, "hondaxr600.png");
const moto6 = new Moto ("Benelli", "Street", "600cc", "Negro", "TNT 600i", 4650000, "benellitnt600i.png");

let arrayMotos = [moto1, moto2, moto3, moto4, moto5, moto6];

localStorage.setItem("motos", JSON.stringify(arrayMotos)); //guardo en local storage el array de motos
const arrayMotosLS = JSON.parse(localStorage.getItem("motos"));

let arrayPrecioFinal = arrayMotos.map ((Moto =>{
    return {
        marca: Moto.marca,
        tipo: Moto.tipo,
        motor: Moto.motor,
        color: Moto.color,
        modelo: Moto.modelo,
        precio: (Moto.precio*1.1),
    }
}))

localStorage.setItem("motosPF", JSON.stringify(arrayPrecioFinal)); //guardo en local storage el array de motos con precio final
const arrayMotosPF = JSON.parse(localStorage.getItem("motosPF"));

const btnBuscarMotos = document.getElementById("btnBuscarMotos");
const contenedorMotos1 = document.getElementById("contenedorMotos");
const contenedorMotos2 = document.getElementById("contenedorMotos2");

btnBuscarMotos.addEventListener("click", function() {
  let presupuesto = parseInt(prompt('Por favor ingrese su presupuesto, si quiere salir ingrese "0": '));
  while ( presupuesto != '0' ) {
    if ( presupuesto < 500000 && presupuesto > 0 ) {
        alert('Tu presupuesto no alcanza para ninguna moto de las que tenemos, por favor ingrese uno mayor a 500000: ');
        contenedorMotos1.innerHTML = "";
        return;
    } else if ( presupuesto >= 500000 && presupuesto < 1200000 ){
        alert('Tu presupuesto es suficiente para motos entre 125cc y 300cc, te las mostramos a continuacion');
        const arrayMotos1 = [moto1,moto2];
        contenedorMotos1.innerHTML = "";
        arrayMotos1.forEach( (moto,index) => {
            const div = document.createElement("div");
            div.innerHTML = `<p> Marca: ${moto.marca}</p>
                    <p> Tipo: ${moto.tipo}</p>
                    <p> Motor${moto.motor}</p>
                    <p> Color ${moto.color}</p>
                    <p> Modelo: ${moto.modelo}</p>
                    <p> Precio: ${moto.precio}</p>
                    <p> Precio Final: ${Math.round(arrayPrecioFinal[index].precio)}</p>
                    <img src= "${"images/" + moto.imagen}">
                    `
            contenedorMotos1.appendChild(div);
        })
        return;
    } else if ( presupuesto >= 1200000 && presupuesto < 3000000 ){
        alert('Tu presupuesto es suficiente para motos entre 300cc y 600cc, te las mostramos a continuacion');
        const arrayMotos1 = [moto3,moto4];
        contenedorMotos1.innerHTML = "";
        arrayMotos1.forEach( (moto,index) => {
            const div = document.createElement("div");
            div.innerHTML = `<p> Marca: ${moto.marca}</p>
                    <p> Tipo: ${moto.tipo}</p>
                    <p> Motor${moto.motor}</p>
                    <p> Color ${moto.color}</p>
                    <p> Modelo: ${moto.modelo}</p>
                    <p> Precio: ${moto.precio}</p>
                    <p> Precio Final: ${Math.round(arrayPrecioFinal[index].precio)}</p>
                    <img src= "${"images/" + moto.imagen}">
                    `
            contenedorMotos1.appendChild(div);
        })
        return;

    } else if ( presupuesto >= 3000000) {
        alert('Tu presupuesto es suficiente para comprar cualquier moto hasta 1200cc, te las mostramos a continuacion');
        const arrayMotos1 = [moto5,moto6];
        contenedorMotos1.innerHTML = "";
        arrayMotos1.forEach( (moto,index) => {
            const div = document.createElement("div");
            div.innerHTML = `<p> Marca: ${moto.marca}</p>
                    <p> Tipo: ${moto.tipo}</p>
                    <p> Motor${moto.motor}</p>
                    <p> Color ${moto.color}</p>
                    <p> Modelo: ${moto.modelo}</p>
                    <p> Precio: ${moto.precio}</p>
                    <p> Precio Final: ${Math.round(arrayPrecioFinal[index].precio)}</p>
                    <img src= "${"images/" + moto.imagen}">
                    `
            contenedorMotos1.appendChild(div);
        })
        return;

    } else { 
        alert('Por favor ingrese un presupuesto valido');
    }            
}});
