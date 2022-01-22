
// Processamento da informação
console.log('\n \n')

// const input = document.querySelector('input');

document.querySelector('#calcula').addEventListener("click", function(event) {
    event.preventDefault()
    let rs = document.querySelector('#rs')

// Caclcula gasolina
    let abastecer = parseFloat(document.querySelector('#abastecer').value)

    let valor_gasolina = parseFloat(document.querySelector('#valor_gasolina').value)
    let media_gasolina = parseFloat(document.querySelector('#media_gasolina').value)

    let lt_gasolina = document.querySelector('#lt_gasolina')
    let km_gasolina = document.querySelector('#km_gasolina')

    
    let calc_listros_gasolina = (abastecer / valor_gasolina).toFixed(2)
    lt_gasolina.value = calc_listros_gasolina

    // Resultado na Gasolina
    km_gasolina.value = (lt_gasolina.value * media_gasolina).toFixed(2)

    //console.log('Resultado na gasolina: ' + km_gasolina.value)
// Fim Caclcula gasolina

// Calcula Alcool
    let valor_alcool = parseFloat(document.querySelector('#valor_alcool').value)
    let media_alcool = parseFloat(document.querySelector('#media_alcool').value)

    let lt_alcool = document.querySelector('#lt_alcool')
    let km_alcool = document.querySelector('#km_alcool')

    let calc_listros_alcool = (abastecer / valor_alcool).toFixed(2)
    lt_alcool.value = calc_listros_alcool

    // Resultado no alcool
    km_alcool.value = (lt_alcool.value * media_alcool).toFixed(2)

    //console.log('Resultado no alcool: ' + km_alcool.value)
// Fim Calcula Alcool

    let diferenca = (km_gasolina.value - km_alcool.value)

    //regex = regex.replaceAll("[^0-9]", "");

    if( km_gasolina.value > km_alcool.value ){
        let msn_gasolina = 'Melhor rodar na Gasolina roda \n ' + Math.abs(diferenca.toFixed(2))
        rs.textContent = msn_gasolina
        return
    }else{
        let msn_alcool = 'Melhor rodar no Alcool roda  \n ' + Math.abs(diferenca.toFixed(2))
        rs.textContent = msn_alcool
    }

})
// lt_gasolina = abastecer / valor_gasolina
// lt_gasolina1 = lt_gasolina.toFixed(2)
// console.log(valor_gasolina)