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
let master, visa, american, debito, usina1, usina2, teatro, movistar, rural, cantALD, cantMEN, cvvCards, nameCard, codigoPostal, iva, cargo;

var selectLugar, cards, cardsCuota, cardsTipo, totalALD, totalMEN, resumenTICK, resumenTICKTittle, resetBTN, comprarBTN, resumenBTN, formulario, nombreCompador, apellidoCompador, emailComprador, selectFecha, selectHora, selectPais, selectProvinicia, selectMesCard, selectAnioCard, telefono, ciudad, calle ;

///Defino valores de las entradas

const entradaALD = 800;
const entradaMEN = 500;
cargo = 135;

///Defino valores de los descuentos de las tarjetas e IVA

master = 0.85;
visa = 0.90;
american = 0.75;
debito = 0.70;
iva = 1.21;

///Defino valores de los descuentos de los lugares

usina1 = 0.10;
usina2 = 0.15;
teatro = 0.10;
movistar = 0.05;
rural = 0.15;

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

selectLugar = document.querySelector('#lugarConferencia');
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
}

cardsTipo.addEventListener("click", (e) => { actualizarSubcategoria();});

function inputVacios (input) {
    const mensaje = 'Por favor, selecciona una opción en el select.';
    if (input.value != "") {
        input.style.borderColor = "green";
    } else {
        input.style.borderColor = "red";
        alert(mensaje);
    }
}

function selectVacios (select) {
    const mensaje = 'Por favor, completa el campo de entrada.';
    if (select.value != 0) {
        select.style.borderColor = "green";
    } else {
        select.style.borderColor = "red";
        alert(mensaje);
    }
}

function advertenciaColorSelect(){
    selectVacios(selectFecha); 
    selectVacios(selectHora); 
    selectVacios(selectPais); 
    selectVacios(selectProvinicia); 
    selectVacios(cards);  
    selectVacios(selectMesCard); 
    selectVacios(selectAnioCard); 
    selectVacios(selectLugar); 
    selectVacios(cardsTipo); 
    selectVacios(cardsCuota);
}

function advertenciaColorInput(){
    inputVacios(telefono);
    inputVacios(ciudad);
    inputVacios(calle);
    inputVacios(codigoPostal);
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
}

function totalSubPagoMEN (cantidad, div) {
    if(selectLugar.value == 0) {
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
}
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
        cardTipo = 'DEBITO';
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
    if(selectLugar.value == 0) {
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
}

function descuentoPorDebito(tarjetaTipo, tarjetaCuota){
    if(tarjetaTipo.value == 1 && tarjetaCuota.value == 1){
        return 1;///SI PAGARIAS CON DEBITO
    }
    else {
        return 0;
    } 
}

function descuentoPorLugar(lugar, tarjetaMarca, tarjetaTipo, tarjetaCuota){
    if(lugar.value == 1 && tarjetaMarca.value == 1 && tarjetaTipo.value == 2 && tarjetaCuota.value == 1){
        return 1; ////SI ES LA USINA Y VISA, SE DEBERIA APLICAR ESTE DESCUENTO
    }
    else if(lugar.value == 1 && tarjetaMarca.value == 3 && tarjetaTipo.value == 2 && tarjetaCuota.value == 1){
        return 2; ////SI ES LA USINA Y AMERICAN, SE DEBERIA APLICAR ESTE DESCUENTO
    }
    else if(lugar.value == 2 && tarjetaMarca.value == 3 && tarjetaTipo.value == 2 && tarjetaCuota.value == 1){
        return 3; ////SI ES EL TEATRO Y AMERICAN, SE DEBERIA APLICAR ESTE DESCUENTO
    }
    else if(lugar.value == 3 && tarjetaMarca.value == 2 && tarjetaTipo.value == 2 && tarjetaCuota.value == 1){
        return 4; ////SI ES MOVISTAR Y MASTER, SE DEBERIA APLICAR ESTE DESCUENTO
    }
    else if(lugar.value == 4 && tarjetaMarca.value == 1 && tarjetaTipo.value == 2 && tarjetaCuota.value == 1){
        return 5; ////SI ES LA RURAL Y VISA, SE DEBERIA APLICAR ESTE DESCUENTO
    }
    else if( (lugar.value == 1 || lugar.value == 2 || lugar.value == 3 || lugar.value == 4 ) && (tarjetaMarca.value == 1 || tarjetaMarca.value == 2 || tarjetaMarca.value == 3) && tarjetaTipo.value == 2 && tarjetaCuota.value == 1 ){
        return 6; ////SI PAGAS EN UN PAGO Y NO POSEES DESCUENTOS, NO DEBIA APLICAR ESTOS DESCUENTOS
    }
    else if( (lugar.value == 1 || lugar.value == 2 || lugar.value == 3 || lugar.value == 4 ) && (tarjetaMarca.value == 1 || tarjetaMarca.value == 2 || tarjetaMarca.value == 3) && tarjetaTipo.value == 2 && (tarjetaCuota.value != 1 || tarjetaCuota.value != 0)){
        return 7; ////SI PAGAS EN CUOTA NO DEBIA APLICAR ESTOS DESCUENTOS
    }
    else {
        return 0; 
    }    
}

function recargPorCuotas(tarjetaCuota){
    ///Defino valores de los recargos
    const tresCuota = 1.15;
    const seisCuota = 1.18;
    const nueveDuota = 1.21;
    const doceCuota = 1.24;

    if(tarjetaCuota.value == 2){
        return tresCuota;
    }
    else if(tarjetaCuota.value == 3){
        return seisCuota;
    }
    else if(tarjetaCuota.value == 4){
        return nueveDuota;
    }
    else if(tarjetaCuota.value == 5){
        return doceCuota;
    }
    else {
        return 1;
    }
}

function valorCuotas(tarjetaCuota){
    if(tarjetaCuota.value == 2){
        return 3;
    }
    else if(tarjetaCuota.value == 3){
        return 6;
    }
    else if(tarjetaCuota.value == 4){
        return 9;
    }
    else if(tarjetaCuota.value == 5){
        return 12;
    }
    else {
        return 1;
    }
}

function totalPago () {
    var precioTICK, subTotal, subTotalCuotas, resumTotal, resumTotalTittle, cantEntALD, cantEntMEN, totalEntrada, tarjetaCuotas;
    ///
    precioTICK = totalPagoEntrada();
    resumTotal = resumenTICK;
    resumTotalTittle = resumenTICKTittle;
    cantEntALD = cantALD.value;
    cantEntMEN = cantMEN.value;
    totalEntrada = parseInt(cantALD.value) + parseInt(cantMEN.value);
        
    ///SI PAGARIAS CON DEBITO
    if ( descuentoPorDebito(cardsTipo, cardsCuota) == 1 && descuentoPorLugar(selectLugar, cards, cardsTipo, cardsCuota) == 0) {
        subTotal = precioTICK * debito + cargo;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted realizo la compro de ${cantEntALD} entrada(s) para adulto(s) Y/O ${cantEntMEN} entrada(s) para menor(es), siento un total ${totalEntrada} de entradas para ${toPrintPlace(selectLugar)}, el día ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Con un montón de $ ${precioTICK} (Incluyendo IVA), adicionando un cargo de admisión de $ ${cargo}, siendo un monto total de $ ${precioTICK + cargo}. La cual realizo la compra con la tarjeta ${toPrintCards(cards)} - ${toPrintCardsTipo(cardsTipo)}, se aplicó un descuento del ${100 - debito * 100}%. Siendo un monto total abonar de $ ${subTotal}`;
    }
    ///SI ES LA USINA Y VISA, SE DEBERIA APLICAR ESTE DESCUENTO
    else if ( descuentoPorDebito(cardsTipo, cardsCuota) == 0 && descuentoPorLugar(selectLugar, cards, cardsTipo, cardsCuota) == 1) {
        subTotal = precioTICK * (visa - usina2) + cargo;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted realizo la compro de ${cantEntALD} entrada(s) para adulto(s) Y/O ${cantEntMEN} entrada(s) para menor(es), siento un total ${totalEntrada} de entradas para ${toPrintPlace(selectLugar)}, el día ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Con un montón de $ ${precioTICK} (Incluyendo IVA), adicionando un cargo de admisión de $ ${cargo}, siendo un monto total de $ ${precioTICK + cargo}. La cual realizo la compra en UN SOLO PAGO con la tarjeta ${toPrintCards(cards)}, se aplicó un descuento del ${100 - visa * 100}%, además se le adiciono un descuento del ${usina2 * 100}%, siendo un total del ${100 - visa * 100 + usina2 * 100}%. Siendo un monto total abonar de $ ${subTotal}`;
    }
    ///SI ES LA USINA Y AMERICAN, SE DEBERIA APLICAR ESTE DESCUENTO
    else if ( descuentoPorDebito(cardsTipo, cardsCuota) == 0 && descuentoPorLugar(selectLugar, cards, cardsTipo, cardsCuota) == 2) {
        subTotal = precioTICK * (american - usina1) + cargo;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted realizo la compro de ${cantEntALD} entrada(s) para adulto(s) Y/O ${cantEntMEN} entrada(s) para menor(es), siento un total ${totalEntrada} de entradas para ${toPrintPlace(selectLugar)}, el día ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Con un montón de $ ${precioTICK} (Incluyendo IVA), adicionando un cargo de admisión de $ ${cargo}, siendo un monto total de $ ${precioTICK + cargo}. La cual realizo la compra en UN SOLO PAGO con la tarjeta ${toPrintCards(cards)}, se aplicó un descuento del ${100 - american * 100}%, además se le adiciono un descuento del ${usina1 * 100}%, siendo un total del ${100 - visa * 100 + usina1 * 100}%. Siendo un monto total abonar de $ ${subTotal}`;
    }
    ///SI ES EL TEATRO Y AMERICAN, SE DEBERIA APLICAR ESTE DESCUENTO
    else if ( descuentoPorDebito(cardsTipo, cardsCuota) == 0 && descuentoPorLugar(selectLugar, cards, cardsTipo, cardsCuota) == 3) {
        subTotal = precioTICK * (american - teatro) + cargo;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted realizo la compro de ${cantEntALD} entrada(s) para adulto(s) Y/O ${cantEntMEN} entrada(s) para menor(es), siento un total ${totalEntrada} de entradas para ${toPrintPlace(selectLugar)}, el día ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Con un montón de $ ${precioTICK} (Incluyendo IVA), adicionando un cargo de admisión de $ ${cargo}, siendo un monto total de $ ${precioTICK + cargo}. La cual realizo la compra en UN SOLO PAGO con la tarjeta ${toPrintCards(cards)}, se aplicó un descuento del ${100 - american * 100}%, además se le adiciono un descuento del ${teatro * 100}%, siendo un total del ${100 - visa * 100 + teatro * 100}%. Siendo un monto total abonar de $ ${subTotal}`;
    }
    ///SI ES MOVISTAR Y MASTER, SE DEBERIA APLICAR ESTE DESCUENTO
    else if ( descuentoPorDebito(cardsTipo, cardsCuota) == 0 && descuentoPorLugar(selectLugar, cards, cardsTipo, cardsCuota) == 4) {
        subTotal = precioTICK * (master - movistar) + cargo;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted realizo la compro de ${cantEntALD} entrada(s) para adulto(s) Y/O ${cantEntMEN} entrada(s) para menor(es), siento un total ${totalEntrada} de entradas para ${toPrintPlace(selectLugar)}, el día ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Con un montón de $ ${precioTICK} (Incluyendo IVA), adicionando un cargo de admisión de $ ${cargo}, siendo un monto total de $ ${precioTICK + cargo}. La cual realizo la compra en UN SOLO PAGO con la tarjeta ${toPrintCards(cards)}, se aplicó un descuento del ${100 - master * 100}%, además se le adiciono un descuento del ${movistar * 100}%, siendo un total del ${100 - master * 100 + movistar * 100}%. Siendo un monto total abonar de $ ${subTotal}`;
    }
    ///////SI ES LA RURAL Y VISA, SE DEBERIA APLICAR ESTE DESCUENTO
    else if ( descuentoPorDebito(cardsTipo, cardsCuota) == 0 && descuentoPorLugar(selectLugar, cards, cardsTipo, cardsCuota) == 5) {
        subTotal = precioTICK * (visa - usina2) + cargo;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted realizo la compro de ${cantEntALD} entrada(s) para adulto(s) Y/O ${cantEntMEN} entrada(s) para menor(es), siento un total ${totalEntrada} de entradas para ${toPrintPlace(selectLugar)}, el día ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Con un montón de $ ${precioTICK} (Incluyendo IVA), adicionando un cargo de admisión de $ ${cargo}, siendo un monto total de $ ${precioTICK + cargo}. La cual realizo la compra en UN SOLO PAGO con la tarjeta ${toPrintCards(cards)}, se aplicó un descuento del ${100 - visa * 100}%, además se le adiciono un descuento del ${usina2 * 100}%, siendo un total del ${100 - visa * 100 + usina2 * 100}%. Siendo un monto total abonar de $ ${subTotal}`;
    }
    ////SI PAGAS EN UN PAGO Y NO POSEES DESCUENTOS, NO DEBIA APLICAR ESTOS DESCUENTOS
    else if ( descuentoPorDebito(cardsTipo, cardsCuota) == 0 && descuentoPorLugar(selectLugar, cards, cardsTipo, cardsCuota) == 6) {
        subTotal = precioTICK + cargo;
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted realizo la compro de ${cantEntALD} entrada(s) para adulto(s) Y/O ${cantEntMEN} entrada(s) para menor(es), siento un total ${totalEntrada} de entradas para ${toPrintPlace(selectLugar)}, el día ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Con un montón de $ ${precioTICK} (Incluyendo IVA), adicionando un cargo de admisión de $ ${cargo}, siendo un monto total de $ ${precioTICK + cargo}. La cual realizo la compra en UN SOLO PAGO con la tarjeta ${toPrintCards(cards)}. Siendo un monto total abonar de $ ${subTotal}`;
    }
    ////SI PAGAS EN UN CUOTAS
    else if ( descuentoPorDebito(cardsTipo, cardsCuota) == 0 && descuentoPorLugar(selectLugar, cards, cardsTipo, cardsCuota) == 7) {
        subTotal = precioTICK * recargPorCuotas(cardsCuota) + cargo;
        tarjetaCuotas = subTotal / valorCuotas(cardsCuota);
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Usted realizo la compro de ${cantEntALD} entrada(s) para adulto(s) Y/O ${cantEntMEN} entrada(s) para menor(es), siento un total ${totalEntrada} de entradas para ${toPrintPlace(selectLugar)}, el día ${toPrintFecha(selectFecha)}, en el horario ${toPrintHora(selectHora)}. Con un montón de $ ${precioTICK * recargPorCuotas(cardsCuota)} (Incluyendo IVA), adicionando un cargo de admisión de $ ${cargo}, siendo un monto total de $ ${subTotal}. La cual realizo la compra en ${toPrintCardsCuota(cardsCuota)} con la tarjeta ${toPrintCards(cards)}, aplicando un recardo del ${recargPorCuotas(cardsCuota)*100 - 100} %. Siendo un monto total abonar de $ ${subTotal}, pagando cuotas en ${toPrintCardsCuota(cardsCuota)} de $ ${tarjetaCuotas}`;
    }
    else {
        resumTotalTittle.textContent = `${dateComprador()}`;
        resumTotal.textContent = `Verifica la cargar de los datos`
    }

    return resumTotal;

}


resumenBTN.addEventListener("click", (e) => {totalPago();})