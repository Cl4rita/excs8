let res = document.getElementById('res')

function calcula_voto(){
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)

    console.log("nome = " + nome + "idade = " + idade)

    if ((idade <= 15)){
        res.innerHTML = "A(o) " + nome + " não votar"
    }
    else if ((idade >= 16)){
        res.innerHTML = "A(o) " + nome + " pode votar"
    }
    res.style.fontSize = "1.25rem"
    res.style.fontWeight = "bold"
}