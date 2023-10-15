//constantes

const b_submit = document.querySelector("input[type='submit']")

// respuestas anteriores
const urlParams = new URLSearchParams(window.location.search);
const r_preg1_anterior = JSON.parse(urlParams.get('preg1')); //Ingenierias
const r_preg2_anterior = JSON.parse(urlParams.get('preg2'));
const r_preg3_anterior = JSON.parse(urlParams.get('preg3'));
const r_preg4_anterior = JSON.parse(urlParams.get('preg4'));
const r_preg5_anterior = JSON.parse(urlParams.get('preg5'));

const respuestas = [r_preg1_anterior, r_preg2_anterior, r_preg3_anterior, r_preg4_anterior, r_preg5_anterior]



//funciones
function tomar_respuestas_form(){
    const r_preg1 = document.querySelector("select[name='preg1']").value;
    const r_preg2 = document.querySelector("select[name='preg2']").value;
    const r_preg3 = document.querySelector("select[name='preg3']").value;
    const r_preg4 = document.querySelector("select[name='preg4']").value;
    const r_preg5 = document.querySelector("select[name='preg5']").value;
    const respuestas = [r_preg1, r_preg2, r_preg3, r_preg4, r_preg5]
    return respuestas
}



//eventos

b_submit.addEventListener("click", (contenido) => {
    // prevent default action
    contenido.preventDefault();
    console.log(contenido)
})

