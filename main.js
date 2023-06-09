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