//click en 25% o 50%
var cajaBEB = document.getElementById('beb')
var cajaGOL = document.getElementById('gol')
var cajaBEBI = document.getElementById('bebi')
var cajaGOLO = document.getElementById('golo')
var cajaBEBID = document.getElementById('bebid')
var cajaGOLOS = document.getElementById('golos')



function mostrarBEB(){
    cajaBEB.style.display = 'block'
    cajaGOL.style.display = 'none'
}

function mostrarBEBI(){
    cajaBEBI.style.display = 'block'
    cajaGOLO.style.display = 'none'
}
function mostrarBEBID(){
    cajaBEBID.style.display = 'block'
    cajaGOLOS.style.display = 'none'
}

function mostrarGOL(){
    cajaGOL.style.display = 'block'
    cajaBEB.style.display = 'none'
}

function mostrarGOLO(){
    cajaGOLO.style.display = 'block'
    cajaBEBI.style.display = 'none'
}

function mostrarGOLOS(){
    cajaGOLOS.style.display = 'block'
    cajaBEBID.style.display = 'none'
}
