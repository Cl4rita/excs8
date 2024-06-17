let res = document.getElementById('res')

function calcula_vol_pira(){
    let altura = Number(document.getElementById('altura').value)
    let area = Number(document.getElementById('area').value)

    console.log("alt = " + altura + "area = " + area)

    let vol = (area * altura) / 3
    console.log("O volume é = " + vol + "cm³")

    res.innerHTML = "O volume é = " + vol.toFixed(2) + " cm³"

    res.style.fontSize = "1.25rem"
    res.style.fontWeight = "bold"
}