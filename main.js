///Controlo el tiempo del corrusel

$('.carousel').carousel({
    interval: 2500
   }
) 

///Para abrir un popup

function popUp(URL) {
    window.open(URL, 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=350,height=500,left = 30,top = 50');
}

// Inicializo las variables
let master, visa, american, debito, usina1, usina2, teatro, movistar, rural, tresCuota, seisCuota, nueveDuota, doceCuota, menor, adulto, imputFull, cantALD, cantMEN, lugarFecha, cards, cardsCuota, cardsTipo, totalALD, totalMEN, resumenTICK; 

var resetBTN, comprarBTN, resumenBTN, formulario;

///Defino valores de las entradas

const entradaALD = 800;
const entradaMEN = 500;
const cargo = 135;

///Defino valores de los descuentos de las tarjetas

master = 0.85;
visa = 0.90;
american = 0.75;
debito = 0.60;

///Defino valores de los descuentos de los lugares

usina1 = 0.10;
usina2 = 0.15;
teatro = 0.10;
movistar = 0.05;
rural = 0.15;

///Defino valores de los recargos

tresCuota = 1.15;
seisCuota = 1.18;
nueveDuota = 1.21;
doceCuota = 1.24;
iva = 1.21;

///Defino los campos

cantALD = document.querySelector('#entradaALD'); 
cantMEN = document.querySelector('#entradaMEN');
lugarFecha = document.querySelector('#lugar');
cards = document.querySelector('#tarjeta');
cardsTipo = document.querySelector('#tipo');
cardsCuota = document.querySelector('#pago');
totalALD = document.querySelector('.totalALD');
totalMEN = document.querySelector('.totalMEN');
resumenTICK = document.querySelector('.resumenTOTAL');
resetBTN = document.querySelector('#resetBTN');
resumenBTN = document.querySelector('#resumenBTN');
comprarBTN = document.querySelector('#comprarBTN');
formulario = document.querySelector('#formulario');

///Funciones

function actualizarSubcategoria() {
    var tipoSelect = document.getElementById("tipo");
    var pagoSelect = document.getElementById("pago");

    // Limpiar opciones anteriores
    pagoSelect.innerHTML = '<option selected>---PAGO---</option>';

    // Obtener la categoría seleccionada
    var categoriaSeleccionada = tipoSelect.value;

    // Agregar las opciones correspondientes a la categoría seleccionada
    if (categoriaSeleccionada === "1") {
      // Opciones para la categoría "Debito"
      pagoSelect.innerHTML += '<option value="1">UN PAGO</option>';
    } if (categoriaSeleccionada === "2") {
      // Opciones para la categoría "Credito"
      pagoSelect.innerHTML += '<option value="1">UN PAGO</option>';
      pagoSelect.innerHTML += '<option value="2">3 CUOTAS</option>';
      pagoSelect.innerHTML += '<option value="3">6 CUOTAS</option>';
      pagoSelect.innerHTML += '<option value="4">9 CUOTAS</option>';
      pagoSelect.innerHTML += '<option value="5">12 CUOTAS</option>';
  }
};

cardsTipo.addEventListener("click", (e) => { actualizarSubcategoria();});

let totalSubPagoALD = (cantidad, div) => {
    div.textContent = `Total: $ ${entradaALD * cantidad}`;
};

let totalSubPagoMEN = (cantidad, div) => {
    if(cantidad % 2 === 0){
        div.textContent = `Total: $ ${entradaMEN * cantidad / 2}`;
    }
    else{        
        div.textContent = `Total: $ ${entradaMEN * cantidad / 2 + entradaMEN / 2}`;
    }
};

cantALD.addEventListener("input", (e) => { totalSubPagoALD(cantALD.value, totalALD);});
cantMEN.addEventListener("input", (e) => { totalSubPagoMEN(cantMEN.value, totalMEN);});

let totalPago = (cantidadALD, cantidadMEN, lugar, tarjeta, tipo, cuota, div) => {
    var subPagoALD, subPagoMEN, precioTICK, subTotal, subTotalCuotas, parResumen;
    subPagoALD = entradaALD * cantidadALD;
    if(cantMEN.value % 2 === 0){
        subPagoMEN = entradaMEN * cantidadMEN / 2;
    }
    else{        
        subPagoMEN = entradaMEN * cantidadMEN / 2 + entradaMEN / 2;
    }
    precioTICK = (subPagoALD + subPagoMEN) * iva;
    if ( tipo === 1 && cuota === 1) {
        subTotal = precioTICK * debito + cargo;
        div.innerHTML = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admicion de $ ${cargo}, eligiendo UN PAGO con la tarjeta ${tarjeta} - ${tipo}, se aplico un descuento del ${debito * 100}%. Siendo un monto total de: \$${subTotal}`;
        console.log("FUNCA");
    } 
    if ( lugar === 1 && tarjeta === 1 && tipo === 2 && cuota === 1 ) {
        subTotal = precioTICK * (visa - usina2);
        div.innerHTML = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admisión de $ ${cargo}, eligiendo UN PAGO con la tarjeta de crédito ${tarjeta}, se aplico un descuento del ${visa * 100}%, mas aplicando un descuento por asistir en ${lugar}, siendo del ${usina2 * 100}%. Con un monto total de: \$${subTotal}`;
    }
    if ( lugar === 1 && tarjeta === 3 && tipo === 2 && cuota === 1 ) {
        subTotal = precioTICK * (american - usina1) + cargo;
        div.innerHTML = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admisión de $ ${cargo}, eligiendo UN PAGO con la tarjeta de crédito ${tarjeta}, se aplico un descuento del ${american * 100}%, mas aplicando un descuento por asistir en ${lugar}, siendo del ${usina1 * 100}%. Con un monto total de: \$${subTotal}`;
    }
    if ( lugar === 2 && tarjeta === 3 && tipo === 2 && cuota === 1 ) {
        subTotal = precioTICK * (american - teatro) + cargo;
        div.innerHTML = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admisión de $ ${cargo}, eligiendo UN PAGO con la tarjeta de crédito ${tarjeta}, se aplico un descuento del ${american * 100}%, mas aplicando un descuento por asistir en ${lugar}, siendo del ${teatro * 100}%. Con un monto total de: \$${subTotal}`;
    }
    if ( lugar === 3 && tarjeta === 2 && tipo === 2 && cuota === 1 ) {
        subTotal = precioTICK * (master - movistar) + cargo;
        div.innerHTML = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admisión de $ ${cargo}, eligiendo UN PAGO con la tarjeta de crédito ${tarjeta}, se aplico un descuento del ${master * 100}%, mas aplicando un descuento por asistir en ${lugar}, siendo del ${movistar * 100}%. Con un monto total de: \$${subTotal}`;
    }
    if ( lugar === 4 && tarjeta === 1 && tipo === 2 && cuota === 1 ) {
        subTotal = precioTICK * (visa - rural) + cargo;
        div.innerHTML = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admisión de $ ${cargo}, eligiendo UN PAGO con la tarjeta de crédito ${tarjeta}, se aplico un descuento del ${visa * 100}%, mas aplicando un descuento por asistir en ${lugar}, siendo del ${usina2 * 100}%. Con un monto total de: \$${subTotal}`;
    }
    if (cuota === 2){
        subTotal = precioTICK * tresCuota + cargo;
        subTotalCuotas = subTotal / tresCuota;
        div.innerHTML = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admisión de $ ${cargo}, eligiendo ${cuota} con la tarjeta de crédito ${tarjeta}, se aplico un descuento del un recargo del ${tresCuota * 100 - 100}%. Siendo un monto total de: \$${subTotal}, pagando en ${cuota} de ${subTotalCuotas}`;
    }
    if (cuota === 3){
        subTotal = precioTICK * seisCuota + cargo;
        subTotalCuotas = subTotal / seisCuota;
        div.innerHTML = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admisión de $ ${cargo}, eligiendo ${cuota} con la tarjeta de crédito ${tarjeta}, se aplico un descuento del un recargo del ${seisCuota * 100 - 100}%. Siendo un monto total de: \$${subTotal}, pagando en ${cuota} de ${subTotalCuotas}`;
    }
    if (cuota === 4){
        subTotal = precioTICK * nueveDuota + cargo;
        subTotalCuotas = subTotal / nueveDuota;
        div.innerHTML = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admisión de $ ${cargo}, eligiendo ${cuota} con la tarjeta de crédito ${tarjeta}, se aplico un descuento del un recargo del ${nueveDuota * 100 - 100}%. Siendo un monto total de: \$${subTotal}, pagando en ${cuota} de ${subTotalCuotas}`;
    }
    if (cuota === 5){
        subTotal = precioTICK * doceCuota + cargo;
        subTotalCuotas = subTotal / doceCuota;
        div.innerHTML = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admisión de $ ${cargo}, eligiendo ${cuota} con la tarjeta de crédito ${tarjeta}, se aplico un descuento del un recargo del ${doceCuota * 100 - 100}%. Siendo un monto total de: \$${subTotal}, pagando en ${cuota} de ${subTotalCuotas}`;
    }

};


resumenBTN.addEventListener("click", (e) => {totalPago(cantALD, cantMEN, lugarFecha, cards, cardsTipo, cardsCuota, resumenTICK);});