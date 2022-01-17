email = document.querySelector('#email').value;
senha = document.querySelector('#senha').value;

// var form = document.querySelector('#form');

function pegar(){
    if(email == ''){
        console.log('Precisa preencher o E-mail')
    }
    if(senha == ''){
        console.log('Precisa preencher a senha')
    }
    console.log(email, senha)
}

var titulo = document.querySelector(".titulo");

titulo.addEventListener("click", function(){
    console.log('Olha só posso chamar uma função anonima.')
});
