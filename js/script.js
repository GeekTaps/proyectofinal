//constantes

const urlParams = new URLSearchParams(window.location.search);
const r_preg1 = JSON.parse(urlParams.get('preg1'));
const r_preg2 = JSON.parse(urlParams.get('preg2'));
const r_preg3 = JSON.parse(urlParams.get('preg3'));
const r_preg4 = JSON.parse(urlParams.get('preg4'));
const r_preg5 = JSON.parse(urlParams.get('preg5'));

const eje1 = document.querySelector("#eje1")
const eje2 = document.querySelector("#eje2")
const eje3 = document.querySelector("#eje3")
const eje4 = document.querySelector("#eje4")
const eje5 = document.querySelector("#eje5")
const eje6 = document.querySelector("#eje6")
const eje7 = document.querySelector("#eje7")
const eje8 = document.querySelector("#eje8")
const eje9 = document.querySelector("#eje9")
const eje10 = document.querySelector("#eje10")

const respuestas = [r_preg1, r_preg2, r_preg3, r_preg4, r_preg5,]

//funciones

function resultados(){
}

//eventos

window.addEventListener("load", () => {
    setTimeout(resultados,1000)
})
