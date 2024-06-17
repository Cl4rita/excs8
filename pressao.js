let res = document.getElementById('res')

function calcula_pressao(){
    let pressao = Number(document.getElementById('pressao').value)
    let pressao2 = Number(document.getElementById('pressao2').value)

    console.log("pressao = " + pressao + "pressao2 = " + pressao2)

    let conversao = pressao * 0.0193367801
    console.log("Em PSI fica = " + conversao + "PSI")
    let conversao2 = pressao2 / 0.0193367801
    console.log("Em PSI fica = " + conversao2 + "PSI")

    res.innerHTML = "Em PSI fica = " + conversao.toFixed(2) + " PSI"
    res2.innerHTML = "Em mmHg fica = " + conversao2.toFixed(2) + " mmHg"

    res.style.fontSize = "1.25rem"
    res.style.fontWeight = "bold"
    res2.style.fontSize = "1.25rem"
    res2.style.fontWeight = "bold"
}