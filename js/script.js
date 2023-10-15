//constantes

const b_submit = document.querySelector("input[type='submit']")

// respuestas anteriores
const urlParams = new URLSearchParams(window.location.search);
const r_preg1_anterior = JSON.parse(urlParams.get('preg1'));
const r_preg2_anterior = JSON.parse(urlParams.get('preg2'));
const r_preg3_anterior = JSON.parse(urlParams.get('preg3'));
const r_preg4_anterior = JSON.parse(urlParams.get('preg4'));
const r_preg5_anterior = JSON.parse(urlParams.get('preg5'));

respuestas = [r_preg1_anterior, r_preg2_anterior, r_preg3_anterior, r_preg4_anterior, r_preg5_anterior]

if (respuestas[0] == null){
    respuestas = [[0], [0], [0], [0], [0]]
}


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

function acumular_resultados(){
    /*
    respuestas_anteriores = [10, 10, 10, 10, 10]
    respuestas_actuales = [2, 3, 4, 5, 6]

    return [
    [10,2],
    [10,3],
    [10,4],
    [10,5],
    [10,6],
    ]
    
    _________________

    respuestas_anteriores = [
    [10,2],
    [10,3],
    [10,4],
    [10,5],
    [10,6],
    ]

    respuestas_actuales = [7, 2, 1, 2, 2]

    return [
    [10, 2, 7],
    [10, 3, 2],
    [10, 4, 1],
    [10, 5, 2],
    [10, 6, 2],
    ]


    */

    let respuestas_actuales = tomar_respuestas_form()
    let respuestas_anteriores = respuestas
    
    let respuestas_acumuladas = []

    for (let i = 0; i < respuestas_actuales.length; i++){
        respuestas_acumuladas.push([...respuestas_anteriores[i], respuestas_actuales[i]])
    }

    return respuestas_acumuladas
}


//eventos

b_submit.addEventListener("click", (contenido) => {
    // prevent default action
    contenido.preventDefault();
    console.log(contenido)

    //tomar url siguiente pagina (tomar action del form)
    const url = document.querySelector("form").action

    window.location.href = url + "?preg1=" + JSON.stringify(acumular_resultados()[0]) + "&preg2=" + JSON.stringify(acumular_resultados()[1]) + "&preg3=" + JSON.stringify(acumular_resultados()[2]) + "&preg4=" + JSON.stringify(acumular_resultados()[3]) + "&preg5=" + JSON.stringify(acumular_resultados()[4])
})

