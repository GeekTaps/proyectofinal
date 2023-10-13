//constantes

const urlParams = new URLSearchParams(window.location.search);
const r_preg1 = JSON.parse(urlParams.get('preg1')); //Ingenierias
const r_preg2 = JSON.parse(urlParams.get('preg2'));
const r_preg3 = JSON.parse(urlParams.get('preg3'));
const r_preg4 = JSON.parse(urlParams.get('preg4'));
const r_preg5 = JSON.parse(urlParams.get('preg5'));
const r_preg6 = JSON.parse(urlParams.get('preg6')); //Economicas
const r_preg7 = JSON.parse(urlParams.get('preg7'));
const r_preg8 = JSON.parse(urlParams.get('preg8'));
const r_preg9 = JSON.parse(urlParams.get('preg9'));
const r_preg10 = JSON.parse(urlParams.get('preg10'));
const r_preg11 = JSON.parse(urlParams.get('preg11')); //Tecnologias
const r_preg12 = JSON.parse(urlParams.get('preg12'));
const r_preg13 = JSON.parse(urlParams.get('preg13'));
const r_preg14 = JSON.parse(urlParams.get('preg14'));
const r_preg15 = JSON.parse(urlParams.get('preg15'));
const r_preg16 = JSON.parse(urlParams.get('preg16')); //Ciencias Exactas
const r_preg17 = JSON.parse(urlParams.get('preg17'));
const r_preg18 = JSON.parse(urlParams.get('preg18'));
const r_preg19 = JSON.parse(urlParams.get('preg19'));
const r_preg20 = JSON.parse(urlParams.get('preg20'));
const r_preg21 = JSON.parse(urlParams.get('preg21')); //Salud
const r_preg22 = JSON.parse(urlParams.get('preg22'));
const r_preg23 = JSON.parse(urlParams.get('preg23'));
const r_preg24 = JSON.parse(urlParams.get('preg24'));
const r_preg25 = JSON.parse(urlParams.get('preg25'));
const r_preg26 = JSON.parse(urlParams.get('preg26')); //Derecho y Ciencias Sociales
const r_preg27 = JSON.parse(urlParams.get('preg27'));
const r_preg28 = JSON.parse(urlParams.get('preg28'));
const r_preg29 = JSON.parse(urlParams.get('preg29'));
const r_preg30 = JSON.parse(urlParams.get('preg30'));
const r_preg31 = JSON.parse(urlParams.get('preg31')); //Diseño y Comunicación
const r_preg32 = JSON.parse(urlParams.get('preg32'));
const r_preg33 = JSON.parse(urlParams.get('preg33'));
const r_preg34 = JSON.parse(urlParams.get('preg34'));
const r_preg35 = JSON.parse(urlParams.get('preg35'));
const r_preg36 = JSON.parse(urlParams.get('preg36')); //Educación y Psicologia
const r_preg37 = JSON.parse(urlParams.get('preg37'));
const r_preg38 = JSON.parse(urlParams.get('preg38'));
const r_preg39 = JSON.parse(urlParams.get('preg39'));
const r_preg40 = JSON.parse(urlParams.get('preg40'));
const r_preg41 = JSON.parse(urlParams.get('preg41')); //Artes
const r_preg42 = JSON.parse(urlParams.get('preg42'));
const r_preg43 = JSON.parse(urlParams.get('preg43'));
const r_preg44 = JSON.parse(urlParams.get('preg44'));
const r_preg45 = JSON.parse(urlParams.get('preg45'));
const r_preg46 = JSON.parse(urlParams.get('preg46')); //Administración de la Seguridad Publica
const r_preg47 = JSON.parse(urlParams.get('preg47'));
const r_preg48 = JSON.parse(urlParams.get('preg48'));
const r_preg49 = JSON.parse(urlParams.get('preg49'));
const r_preg50 = JSON.parse(urlParams.get('preg50'));

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

const respuestas = [r_preg1, r_preg2, r_preg3, r_preg4, r_preg5, r_preg6, r_preg7, r_preg8, r_preg9, r_preg10, r_preg11, r_preg12, r_preg13, r_preg14, r_preg15, r_preg16, r_preg17, r_preg18, r_preg19, r_preg20, r_preg21, r_preg22, r_preg23, r_preg24, r_preg25, r_preg26, r_preg27, r_preg28, r_preg29, r_preg30, r_preg31, r_preg32, r_preg33, r_preg34, r_preg35, r_preg36, r_preg37, r_preg38, r_preg39, r_preg40, r_preg41, r_preg42, r_preg43, r_preg44, r_preg45, r_preg46, r_preg47, r_preg48, r_preg49, r_preg50]

//funciones

function resultados(){
    // TODO
    for (r of respuestas){
        eje1.innerText = parseInt(eje1.style.width) + r[0] + "%"
        eje2.innerText = parseInt(eje2.style.width) + r[1] + "%"
        eje3.innerText = parseInt(eje3.style.width) + r[2] + "%"
        eje4.innerText = parseInt(eje4.style.width) + r[3] + "%"
        eje5.innerText = parseInt(eje5.style.width) + r[4] + "%"
        eje6.innerText = parseInt(eje6.style.width) + r[5] + "%"
        eje7.innerText = parseInt(eje7.style.width) + r[6] + "%"
        eje8.innerText = parseInt(eje8.style.width) + r[7] + "%"
        eje9.innerText = parseInt(eje9.style.width) + r[8] + "%"
        eje10.innerText = parseInt(eje10.style.width) + r[9] + "%"

        eje1.style.width = parseInt(eje1.style.width) + r[0] + "%"
        eje2.style.width = parseInt(eje2.style.width) + r[1] + "%"
        eje3.style.width = parseInt(eje3.style.width) + r[2] + "%"
        eje4.style.width = parseInt(eje4.style.width) + r[3] + "%"
        eje5.style.width = parseInt(eje5.style.width) + r[4] + "%"
        eje6.style.width = parseInt(eje6.style.width) + r[5] + "%"
        eje7.style.width = parseInt(eje7.style.width) + r[6] + "%"
        eje8.style.width = parseInt(eje8.style.width) + r[7] + "%"
        eje9.style.width = parseInt(eje9.style.width) + r[8] + "%"
        eje10.style.width = parseInt(eje10.style.width) + r[9] + "%"
    }
}


//eventos

window.addEventListener("load", () => {
    setTimeout(resultados,1000)
})
