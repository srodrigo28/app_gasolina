let abastecer = document.querySelector('#abastecer').value

let valor_gasolina = document.querySelector('#valor_gasolina').value
let lt_gasolina = parseFloat(document.querySelector('#lt_gasolina'))

let valor_alcool = document.querySelector('#valor_alcool')
let lt_alcool = document.querySelector('#lt_alcool').value

let media_gasolina = document.querySelector('#media_gasolina').value
let media_alcool = document.querySelector('#media_alcool').value

let km_gasolina = document.querySelector('#km_gasolina').value
let km_alcool = document.querySelector('#km_alcool').value

console.log(
    abastecer + '\n' +
    valor_gasolina + '\n' +
    lt_gasolina + '\n' +
    valor_alcool + '\n' +
    lt_alcool + '\n' +
    media_gasolina + '\n' +
    media_alcool + '\n' +
    km_gasolina + '\n' +
    km_alcool
);


// Processamento da informação
console.log('\n \n')

// const input = document.querySelector('input');

document.querySelector('#calcula').addEventListener("click", function(event) {
    event.preventDefault()

    if(lt_gasolina.value == '100'){
        console.log('1')
    }
    if(lt_gasolina.value == 100){
        console.log('2')
    }else{
        console.log('tente outra coisa')
    }
})


// lt_gasolina = abastecer / valor_gasolina
// lt_gasolina1 = lt_gasolina.toFixed(2)
// console.log(valor_gasolina)