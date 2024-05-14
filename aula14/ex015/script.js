function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <18){
                //criaça
                img.setAttribute('src','kid.jpg')
            }else if(idade <21) {
                //jovem
                img.setAttribute('src','jovem.jpg')
            }else if(idade<50) {
                //adulto
                img.setAttribute('src','adultos.jpg')
            }else {
                //idoso 
                img.setAttribute('src','idosos.jpg')

            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <18){
                //criança
                img.setAttribute('src','kid.jpg')
            }else if(idade <21) {
                //jovem
                img.setAttribute('src','jovem-w.jpg')
            }else if(idade<50) {
                //adulto
                img.setAttribute('src','adultos.jpg')

            }else {
                //idoso
                img.setAttribute('src','idosos.jpg')

            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
    
    