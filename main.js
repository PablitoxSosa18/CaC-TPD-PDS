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
let master, visa, american, debito, usina1, usina2, teatro, movistar, rural, tresCuota, seisCuota, nueveDuota, doceCuota, menor, adulto, imputFull; 

///Defino valores de las entradas

const entradaALD = 800;
const entradaMEN = 500;

///Defino valores de los descuentos de las tarjetas

master = 0.85;
visa = 0.90;
american = 0.75;
debito = 0.60;

///Defino valores de los descuentos de las tarjetas

usina1 = 0.90;
usina2 = 0.85;
teatro = 0.90;
movistar = 0.95;
rural = 0.90;

///Defino valores de los recargos

tresCuota = 1.15;
seisCuota = 1.18;
nueveDuota = 1.21;
doceCuota = 1.24;
iva = 1.21;

///Defino los campos

const cantALD = document.querySelector('#entradaALD'); 
const cantMEN = document.querySelector('#entradaMEN');
const lugar = document.querySelector('#lugar');
const card = document.querySelector('#tarjeta');
const cardTipo = document.querySelector('#tipo');
const cardPago = document.querySelector('#pago');
const totalALD = document.querySelector('#totalALD');
const totalMEN = document.querySelector('#totalMEN');
const resumen = document.querySelector('#resumen');
adulto = parseInt(cantALD.value);
menor = parseInt(cantMEN.value);

///Funciones

function totalPagar() {
    let tickALD, tickMEN;
    

}

imputFull = (input) => {
    if (input.value === "") {
        input.style.borderColor = "red";
        return true;
      } else {
        input.style.borderColor = "green";
      }
  };