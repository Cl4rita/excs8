let res = document.getElementById('res')

function calcula_temp(){
    let temp = Number(document.getElementById('temp').value)
    let temp2 = Number(document.getElementById('temp2').value)

    console.log("temp = " + temp + "temp2 = " + temp2)

    let conversao = (temp * 1.8) + 32
    console.log("Em °F fica = " + conversao + "°F")
    let conversao2 = (temp - 32) / 1.8
    console.log("Em °C fica = " + conversao2 + "°C")

    res.innerHTML = "Em °F fica = " + conversao.toFixed(2) + " °F"
    res2.innerHTML = "Em °C fica = " + conversao2.toFixed(2) + " °C"

    res.style.fontSize = "1.25rem"
    res.style.fontWeight = "bold"
    res2.style.fontSize = "1.25rem"
    res2.style.fontWeight = "bold"
}