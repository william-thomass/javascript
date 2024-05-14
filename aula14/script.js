function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagens')
var data = new Date()
//var hora = data.getHours()
var hora = 11

msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 8 && hora <12){
    document.body.style.background = '#d6d669'
    img.src = 'manha.png'
}   else if (hora >= 12 && hora <= 18){
    document.body.style.background = '#c09e08'
    img.src = 'tarde.png'
}   else {
    document.body.style.background = '#353535'
    img.src = 'noite.png'
    }
}