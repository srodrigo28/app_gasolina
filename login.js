// vem do formulario html
var txt_email = document.querySelector('#email').value;
var txt_senha = document.querySelector('#senha').value;

// usuário cadastrado
var user = "admin@gmail.com"
var senha = "123"

console.log(txt_email + '\n' + txt_senha + '\n \n')

if( txt_email == user ){
    console.log('Usuário Valido')
}else{
    console.log('Usuário não encontrado')
}

if( txt_senha == senha ){
    console.log('Senha Valido')
}else{
    console.log('Senha inválida')
}