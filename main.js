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
let master, visa, american, debito, usina1, usina2, teatro, movistar, rural, tresCuota, seisCuota, nueveDuota, doceCuota, menor, adulto, imputFull, cantALD, cantMEN, lugar, card, cardPago, cardTipo, totalALD, totalMEN, resumen; 

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
rural = 0.10;

///Defino valores de los recargos

tresCuota = 1.15;
seisCuota = 1.18;
nueveDuota = 1.21;
doceCuota = 1.24;
iva = 1.21;

///Defino los campos

cantALD = document.querySelector('#entradaALD'); 
cantMEN = document.querySelector('#entradaMEN');
lugar = document.querySelector('#lugar');
card = document.querySelector('#tarjeta');
cardTipo = document.querySelector('#tipo');
cardPago = document.querySelector('#pago');
totalALD = document.querySelector('.totalALD');
totalMEN = document.querySelector('.totalMEN');
resumen = document.querySelector('#resumen');
adulto = parseInt(cantALD.value);
menor = parseInt(cantMEN.value);

///Funciones

let totalSubPagoALD = (cantidad, div) => {
    div.textContent = `Total: $ ${entradaALD* cantidad}`;
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