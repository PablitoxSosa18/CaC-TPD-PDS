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
var master, visa, american, debito, usina1, usina2, teatro, movistar, rural, tresCuota, seisCuota, nueveDuota, doceCuota, menor, adulto, imputFull, cantALD, cantMEN, lugarCONF, cards, cardsCuota, cardsTipo, totalALD, totalMEN, resumenTICK, resumenTICKTittle, resetBTN, comprarBTN, resumenBTN, formulario, nombreCompador, apellidoCompador, emailComprador, selectFecha, selectHora, selectPais, selectProvinicia, selectMesCard, selectAnioCard, telefono, codigoPostal, ciudad, calle, cvvCards, nameCard;

///Defino valores de las entradas

const entradaALD = 800;
const entradaMEN = 500;
const cargo = 135;

///Defino valores de los descuentos de las tarjetas

master = 0.85;
visa = 0.90;
american = 0.75;
debito = 0.70;

///Defino valores de los descuentos de los lugares

usina1 = 0.90;
usina2 = 0.85;
teatro = 0.90;
movistar = 0.95;
rural = 0.85;

///Defino valores de los recargos

tresCuota = 1.15;
seisCuota = 1.18;
nueveDuota = 1.21;
doceCuota = 1.24;
iva = 1.21;

///Defino los campos

resetBTN = document.querySelector('#resetBTN');
resumenBTN = document.querySelector('#resumenBTN');
comprarBTN = document.querySelector('#comprarBTN');
formulario = document.querySelector('#formulario');
resumenTICK = document.querySelector('#totalResumen');
resumenTICKTittle = document.querySelector('#totalResumenTitle');

cantALD = document.querySelector('#entradaALD'); 
cantMEN = document.querySelector('#entradaMEN');
totalALD = document.querySelector('.totalALD');
totalMEN = document.querySelector('.totalMEN');

lugarCONF = document.querySelector('#lugarConferencia');
selectFecha = document.querySelector('#fechaConferencia'); 
selectHora = document.querySelector('#horaConferencia'); 

cards = document.querySelector('#tarjetaMarca');
cardsTipo = document.querySelector('#tarjetaTipo');
cardsCuota = document.querySelector('#tarjetaCuotas');
selectMesCard = document.querySelector('#tarjetaMes'); 
selectAnioCard = document.querySelector('#tarjetaAnio');
cvvCards = document.querySelector('#tarjetaCVV')
nameCard = document.querySelector('#nameCard')

nombreCompador = document.querySelector('#nombre');
apellidoCompador = document.querySelector('#apellido');
emailComprador = document.querySelector('#email');
selectPais = document.querySelector('#pais'); 
selectProvinicia = document.querySelector('#provincia'); 
telefono = document.querySelector('#phone')
codigoPostal = document.querySelector('#codigoPostal')
ciudad = document.querySelector('#ciudad')
calle = document.querySelector('#calle')

///Funciones

function actualizarSubcategoria() {
    var tipoSelect = cardsTipo;
    var pagoSelect = cardsCuota;

    pagoSelect.innerHTML = '<option selected>---PAGO---</option>';

    var categoriaSeleccionada = tipoSelect.value;

    if (categoriaSeleccionada == "1") {
      // Opciones para la categoría "Debito"
      pagoSelect.innerHTML += '<option value="1">UN PAGO</option>';
    } if (categoriaSeleccionada == "2") {
      // Opciones para la categoría "Credito"
      pagoSelect.innerHTML += '<option value="1">UN PAGO</option>';
      pagoSelect.innerHTML += '<option value="2">3 CUOTAS</option>';
      pagoSelect.innerHTML += '<option value="3">6 CUOTAS</option>';
      pagoSelect.innerHTML += '<option value="4">9 CUOTAS</option>';
      pagoSelect.innerHTML += '<option value="5">12 CUOTAS</option>';
  }
};

cardsTipo.addEventListener("click", (e) => { actualizarSubcategoria();});

function inputVacios (input) {
    const mensaje = 'Por favor, selecciona una opción en el select.';
    if (input.value != "") {
        input.style.borderColor = "green";
    } else {
        input.style.borderColor = "red";
        swal(mensaje);
    }
};

function selectVacios (select) {
    const mensaje = 'Por favor, completa el campo de entrada.';
    if (select.value != 0) {
        select.style.borderColor = "green";
    } else {
        select.style.borderColor = "red";
        swal(mensaje);
    }
};

function advertenciaColorSelect(){
    selectVacios(selectFecha); 
    selectVacios(selectHora); 
    selectVacios(selectPais); 
    selectVacios(selectProvinicia); 
    selectVacios(cards);  
    selectVacios(selectMesCard); 
    selectVacios(selectAnioCard); 
    selectVacios(lugarCONF); 
    selectVacios(cardsTipo); 
    selectVacios(cardsCuota);
    inputVacios(codigoPostal);
}

function advertenciaColorInput(){
    inputVacios(telefono);
    inputVacios(ciudad);
    inputVacios(calle);
    inputVacios(cvvCards);
    inputVacios(nameCard);
    inputVacios(numberCards);
    inputVacios(nombreCompador)
    inputVacios(apellidoCompador);
    inputVacios(emailComprador);
    inputVacios(cantALD);
    inputVacios(cantMEN);
}

/* resumenBTN.addEventListener("click", (e) => {advertenciaColorInput(); advertenciaColorSelect()})*/

///Imprimo valor de las entradas sin IVA

function totalSubPagoALD (cantidad, div) {
    div.textContent = `Total: $ ${entradaALD * cantidad}`;
};

function totalSubPagoMEN (cantidad, div) {
    if(lugarCONF.value == 0) {
        div.textContent = `Total: $ ${entradaMEN * cantidad}`;
    }
    else {
        if(cantidad % 2 == 0){
            div.textContent = `Total: $ ${entradaMEN * cantidad / 2}`;
        }
        else{        
            div.textContent = `Total: $ ${entradaMEN * cantidad / 2 + entradaMEN / 2}`;
        }
    }
};
cantALD.addEventListener("input", (e) => {totalSubPagoALD(cantALD.value, totalALD);});
cantMEN.addEventListener("input", (e) => {totalSubPagoMEN(cantMEN.value, totalMEN);});

///Imprimo datos de los input y datos de las seleccion

function toPrintPlace(lugar) {
    var place;
    if( lugar.value == 1) {
        place = 'USINA DEL ARTE';
        return place;
    }
    else if( lugar.value == 2) {
        place = 'TEATRO COLON';
        return place;
    }
    else if( lugar.value == 3) {
        place = 'MOVISTAR ARENA';
        return place;
    }
    else if( lugar.value == 4) {
        place = 'LA RURAL';
        return place;
    }
    else {
        place = 'NO HAY LUGAR SELECCIONADO';
        return place;
    } 
}

function toPrintFecha(fecha){
    var date;
    if(fecha.value == 1){
        date = '11/06/2023';
        return date;
    }
    else if(fecha.value == 2){
        date = '13/06/2023';
        return date;

    }
    else if(fecha.value == 3){
        date = '15/06/2023';
        return date;

    }
    else if(fecha.value == 4){
        date = '17/06/2023';
        return date;
    }
    else if(fecha.value == 5){
        date = '19/06/2023';
        return date;
    }
    else if(fecha.value == 6){
        date = '21/06/2023';
        return date;
    }
    else {
        date = 'NO HAY FECHA SELECCIONADA';
        return date;
    }
}

function toPrintHora(hora){
    var hour;
    if(hora.value == 1){
        hour = '15:30 HS';
        return hour;
    }
    else if(hora.value == 2){
        hour = '17:30 HS';
        return hour;

    }
    else if(hora.value == 3){
        hour = '19:30 HS';
        return hour;

    }
    else if(hora.value == 4){
        hour = '21:30 HS';
        return hour;
    }
    else {
        hour = 'NO HAY UN HORARIO SELECCIONADO';
        return hour;
    }
}

function toPrintCards(tarjeta){
    var card;
    if(tarjeta.value == 1){
        card = 'VISA';
        return card;
    }
    else if(tarjeta.value == 2){
        card = 'MASTERCARD';
        return card;

    }
    else if(tarjeta.value == 3){
        card = 'AMERICAN EXPRESS';
        return card;

    }
    else {
        card = 'NO HAY UN TARJETA SELECCIONADA';
        return card;
    }
}

function toPrintCardsTipo(tarjetaTipo){
    var cardTipo;
    if(tarjetaTipo.value == 1){
        cardTipo.value = 'DEBITO';
        return cardTipo;
    }
    else if(tarjetaTipo.value == 2){
        cardTipo = 'CREDITO';
        return cardTipo;

    }
    else {
        cardTipo = 'NO HAY UN TARJETA SELECCIONADA';
        return cardTipo;
    }
}

function toPrintCardsCuota(tarjetaCuota){
    var cardCuota;
    if(tarjetaCuota.value == 1){
        cardCuota.value = 'UN PAGO';
        return cardCuota;
    }
    else if(tarjetaCuota.value == 2){
        cardCuota = '3 CUOTAS';
        return cardCuota;

    }
    else if(tarjetaCuota.value == 3){
        cardCuota = '6 CUOTAS';
        return cardCuota;

    }
    else if(tarjetaCuota.value == 3){
        cardCuota = '9 CUOTAS';
        return cardCuota;

    }
    else if(tarjetaCuota.value == 3){
        cardCuota = '12 CUOTAS';
        return cardCuota;

    }
    else {
        cardCuota = 'NO HAY UN METODO DE PAGO SELECCIONADO';
        return cardCuota;
    }
}

function dateComprador(){
    var name = nombreCompador.value; 
    var surName = apellidoCompador.value; 
    var correo = emailComprador.value;
    var div = '';
    if(name != '' && surName != '' & correo != ''){
        div = `Sr./Sra. ${name} ${surName} se le envio el resumen al siguiente email ${correo}`;
        return div;
    }
    else if(name != '' && surName == '' && correo == ''){
        div = `Por favor ingrese un Apellido & un E-MAIL`;
        return div;
    }
    else if(name == '' && surName != '' && correo == ''){
        div = `Por favor ingrese un Nombre & un E-MAIL`;
        return div;
    }
    else if(name == '' && surName == '' && correo != ''){
        div = `Por favor ingrese un Nombre y un Apellido`;
        return div;
    }
    else if(name != '' && surName != '' && correo == ''){
        div = `Por favor ingrese un E-MAIL`;
        return div;
    }
    else if(name != '' && surName == '' && correo != ''){
        div = `Por favor ingrese un Apellido`;
        return div;
    }
    else if(name == '' && surName != '' && correo != ''){
        div = `Por favor ingrese un Nombre`;
        return div;
    }
    else {
        div = `Por favor ingrese todos los campos requerido`;
        return div;
    }

}

/// todas las funciones de los descuento o comprad con tarjeta
function totalPagoEntrada () {
    var entradaTotal, entradaAlduto, entradaMenor;
    entradaAlduto = entradaALD * cantALD.value;
    if(lugarCONF.value == 0) {
        entradaMenor = entradaMEN * cantMEN.value;
    }
    else {
        if(cantMEN.value % 2 == 0){
            entradaMenor = entradaMEN * cantMEN.value / 2;
        }
        else{        
            entradaMenor = entradaMEN * cantMEN.value / 2 + entradaMEN / 2;
        }
    }
    entradaTotal = (entradaAlduto + entradaMenor) * iva;
    return entradaTotal;
}; 

function totalPago () {
    var precioTICK, subTotal, subTotalCuotas, lugar, tarjeta, tipo, cuota, resumTotal, resumTotalTittle, cantEntALD, cantEntMEN, tarjetaCuotas;
    //
    precioTICK = totalPagoEntrada();
    lugar = lugarCONF.value;
    tarjeta = cards.value;
    tipo = cardsTipo.value;
    cuota = cardsCuota.value;
    resumTotal = resumenTICK;
    resumTotalTittle = resumenTICKTittle;
    cantEntALD = cantALD.value;
    cantEntMEN = cantMEN.value;

    if ( tipo == 1 && cuota == 1) {
        subTotal = precioTICK * debito + cargo;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted crealizo la compro de ${cantEntALD} entrada(s) para aldulto(s) y ${cantEntMEN} entrada(s) para menor(es), siento un total ${cantEntALD+cantEntMEN} de entradas para ${toPrintPlace(lugarCONF)}, el dia ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Siendo un precio total + IVA de $ ${precioTICK}, adiccionando un cargo de admicion de $ ${cargo}, siendo un monto de $ ${precioTICK + cargo}. Realizando la compra con la tarjeta ${toPrintCards(cards)} - ${toPrintCardsTipo(tipo)}, eligiendo UN PAGO de dicha tarjeta, se aplico un descuento del ${100 - debito * 100}%. Siendo un monto total abonar de $ ${subTotal}`;
    } 
    if ( lugar == 1 && tarjeta == 1 && tipo == 2 && cuota == 1 ) {
        subTotal = precioTICK * visa * usina2;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted crealizo la compro de ${cantEntALD} entrada(s) para aldulto(s) y ${cantEntMEN} entrada(s) para menor(es), siento un total ${cantEntALD+cantEntMEN} de entradas para ${toPrintPlace(lugarCONF)}, el dia ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Siendo un precio total + IVA de $ ${precioTICK}, adiccionando un cargo de admicion de $ ${cargo}, siendo un monto de $ ${precioTICK + cargo}. Realizando la compra con la tarjeta ${toPrintCards(cards)}, eligiendo UN PAGO de dicha tarjeta, se aplico un descuento del ${100 - debito * 100}% y ademas se le aplico le agrego otro descuesto por seleccionar Dicha ubicacion, que es del ${100 - usina2 * 100}%. Siendo un monto total abonar de $ ${subTotal}`;
    }
    if ( lugar == 1 && tarjeta == 3 && tipo == 2 && cuota == 1 ) {
        subTotal = precioTICK * (american - usina1) + cargo;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted crealizo la compro de ${cantEntALD} entrada(s) para aldulto(s) y ${cantEntMEN} entrada(s) para menor(es), siento un total ${cantEntALD+cantEntMEN} de entradas para ${toPrintPlace(lugarCONF)}, el dia ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Siendo un precio total + IVA de $ ${precioTICK}, adiccionando un cargo de admicion de $ ${cargo}, siendo un monto de $ ${precioTICK + cargo}. Realizando la compra con la tarjeta ${toPrintCards(cards)} - ${toPrintCardsTipo(tipo)}, eligiendo UN PAGO de dicha tarjeta, se aplico un descuento del ${100 - debito * 100}%. Siendo un monto total abonar de $ ${subTotal}`;
    }
    if ( lugar == 2 && tarjeta == 3 && tipo == 2 && cuota == 1 ) {
        subTotal = precioTICK * (american - teatro) + cargo;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted crealizo la compro de ${cantEntALD} entrada(s) para aldulto(s) y ${cantEntMEN} entrada(s) para menor(es), siento un total ${cantEntALD+cantEntMEN} de entradas para ${toPrintPlace(lugarCONF)}, el dia ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Siendo un precio total + IVA de $ ${precioTICK}, adiccionando un cargo de admicion de $ ${cargo}, siendo un monto de $ ${precioTICK + cargo}. Realizando la compra con la tarjeta ${toPrintCards(cards)} - ${toPrintCardsTipo(tipo)}, eligiendo UN PAGO de dicha tarjeta, se aplico un descuento del ${100 - debito * 100}%. Siendo un monto total abonar de $ ${subTotal}`;
    }
    if ( lugar == 3 && tarjeta == 2 && tipo == 2 && cuota == 1 ) {
        subTotal = precioTICK * (master - movistar) + cargo;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted crealizo la compro de ${cantEntALD} entrada(s) para aldulto(s) y ${cantEntMEN} entrada(s) para menor(es), siento un total ${cantEntALD+cantEntMEN} de entradas para ${toPrintPlace(lugarCONF)}, el dia ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Siendo un precio total + IVA de $ ${precioTICK}, adiccionando un cargo de admicion de $ ${cargo}, siendo un monto de $ ${precioTICK + cargo}. Realizando la compra con la tarjeta ${toPrintCards(cards)} - ${toPrintCardsTipo(tipo)}, eligiendo UN PAGO de dicha tarjeta, se aplico un descuento del ${100 - debito * 100}%. Siendo un monto total abonar de $ ${subTotal}`;
    }
    if ( lugar == 4 && tarjeta == 1 && tipo == 2 && cuota == 1 ) {
        subTotal = precioTICK * (visa - rural) + cargo;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted crealizo la compro de ${cantEntALD} entrada(s) para aldulto(s) y ${cantEntMEN} entrada(s) para menor(es), siento un total ${cantEntALD+cantEntMEN} de entradas para ${toPrintPlace(lugarCONF)}, el dia ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Siendo un precio total + IVA de $ ${precioTICK}, adiccionando un cargo de admicion de $ ${cargo}, siendo un monto de $ ${precioTICK + cargo}. Realizando la compra con la tarjeta ${toPrintCards(cards)} - ${toPrintCardsTipo(tipo)}, eligiendo UN PAGO de dicha tarjeta, se aplico un descuento del ${100 - debito * 100}%. Siendo un monto total abonar de $ ${subTotal}`;
    }
    if (cuota == 2){
        subTotal = precioTICK * tresCuota + cargo;
        subTotalCuotas = subTotal / tresCuota;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admisión de $ ${cargo}, eligiendo ${cuota} con la tarjeta de crédito ${tarjeta}, se aplico un descuento del un recargo del ${tresCuota * 100 - 100}%. Siendo un monto total de: \$${subTotal}, pagando en ${cuota} de ${subTotalCuotas}`;
    }
    if (cuota == 3){
        subTotal = precioTICK * seisCuota + cargo;
        subTotalCuotas = subTotal / seisCuota;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admisión de $ ${cargo}, eligiendo ${cuota} con la tarjeta de crédito ${tarjeta}, se aplico un descuento del un recargo del ${seisCuota * 100 - 100}%. Siendo un monto total de: \$${subTotal}, pagando en ${cuota} de ${subTotalCuotas}`;
    }
    if (cuota == 4){
        subTotal = precioTICK * nueveDuota + cargo;
        subTotalCuotas = subTotal / nueveDuota;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admisión de $ ${cargo}, eligiendo ${cuota} con la tarjeta de crédito ${tarjeta}, se aplico un descuento del un recargo del ${nueveDuota * 100 - 100}%. Siendo un monto total de: \$${subTotal}, pagando en ${cuota} de ${subTotalCuotas}`;
    }
    if (cuota == 5){
        subTotal = precioTICK * doceCuota + cargo;
        subTotalCuotas = subTotal / doceCuota;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Total de entradas + IVA es: $ ${precioTICK} + cargo de admisión de $ ${cargo}, eligiendo ${cuota} con la tarjeta de crédito ${tarjeta}, se aplico un descuento del un recargo del ${doceCuota * 100 - 100}%. Siendo un monto total de: \$${subTotal}, pagando en ${cuota} de ${subTotalCuotas}`;
    }

    return resumTotal;

};


resumenBTN.addEventListener("click", (e) => {totalPago();})