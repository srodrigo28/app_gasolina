let fields = document.querySelectorAll("#form-user-create [name]")
var user = {}
fields.forEach(function(field, idex) {
    if(field.checked){
        user[field.name] = field.value
    }else{
        user[field.name] = field.value
    }
})
console.log(user)