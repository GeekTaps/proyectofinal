const urlParams = new URLSearchParams(window.location.search);
const r_preg1 = JSON.parse(urlParams.get('preg1'));
const r_preg2 = JSON.parse(urlParams.get('preg2'));
const r_preg3 = JSON.parse(urlParams.get('preg3'));
const r_preg4 = JSON.parse(urlParams.get('preg4'));
const r_preg5 = JSON.parse(urlParams.get('preg5'));

const eje1 = document.querySelector("#eje1") //Ingenierias
const eje2 = document.querySelector("#eje2") //Economicas
const eje3 = document.querySelector("#eje3") //Tecnologias
const eje4 = document.querySelector("#eje4") //Ciencias Exactas
const eje5 = document.querySelector("#eje5") //Salud
const eje6 = document.querySelector("#eje6") //Derecho y Ciencias Sociales
const eje7 = document.querySelector("#eje7") //Diseño y Comunicación
const eje8 = document.querySelector("#eje8") //Educación y Psicologia
const eje9 = document.querySelector("#eje9") //Artes
const eje10 = document.querySelector("#eje10") //Administración de la Seguridad Publica

const respuestas = [r_preg1, r_preg2, r_preg3, r_preg4, r_preg5]

function resultados(){
    // TODO
    for (r of respuestas){
        eje1.innerText = parseInt(eje1.style.width) + r[1] + "%"
        eje2.innerText = parseInt(eje2.style.width) + r[2] + "%"
        eje3.innerText = parseInt(eje3.style.width) + r[3] + "%"
        eje4.innerText = parseInt(eje4.style.width) + r[4] + "%"
        eje5.innerText = parseInt(eje5.style.width) + r[5] + "%"
        eje6.innerText = parseInt(eje6.style.width) + r[6] + "%"
        eje7.innerText = parseInt(eje7.style.width) + r[7] + "%"
        eje8.innerText = parseInt(eje8.style.width) + r[8] + "%"
        eje9.innerText = parseInt(eje9.style.width) + r[9] + "%"
        eje10.innerText = parseInt(eje10.style.width) + r[10] + "%"


        eje1.style.width = parseInt(eje1.style.width) + r[1] + "%"
        eje2.style.width = parseInt(eje2.style.width) + r[2] + "%"
        eje3.style.width = parseInt(eje3.style.width) + r[3] + "%"
        eje4.style.width = parseInt(eje4.style.width) + r[4] + "%"
        eje5.style.width = parseInt(eje5.style.width) + r[5] + "%"
        eje6.style.width = parseInt(eje6.style.width) + r[6] + "%"
        eje7.style.width = parseInt(eje7.style.width) + r[7] + "%"
        eje8.style.width = parseInt(eje8.style.width) + r[8] + "%"
        eje9.style.width = parseInt(eje9.style.width) + r[9] + "%"
        eje10.style.width = parseInt(eje10.style.width) + r[10] + "%"
    }
}

window.addEventListener("load", () => {
    setTimeout(resultados,1000)
})
