$('.carousel').carousel({
    interval: 2500
   }
) 

function openPopup() {
    document.getElementById("miPopup").style.display = "block";
}
  
function closePopup() {
    document.getElementById("miPopup").style.display = "none";
}

function popUp(URL) {
    window.open(URL, 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=350,height=500,left = 30,top = 50');
}

///Defino valores de las entradas

const entradaALD = 800;
const entradaMEN = 500;

///Defino valores de los descuentos de las tarjetas

let master = 0.85;
let visa = 0.90;
let american = 0.75;
let debito = 0.60;

///Defino valores de los descuentos de las tarjetas

let usina1 = 0.90;
let usina2 = 0.85;
let teatro = 0.90;
let movistar = 0.95;
let rural = 0.90;

///Defino valores de los recargos

let tresCuota = 1.15;
let seisCuota = 1.18;
let nueveDuota = 1.21;
let doceCuota = 1.24;
let IVA = 1.21;
