function contar(){

var inicio = window.document.getElementById('inicio')
var fim = window.document.getElementById('fim')
var passo = window.document.getElementById('passo')
var res = window.document.getElementById('res')

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    window.alert('ERRO - Preencha os dados')
    else{
        res.innerHTML = ''

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for(var c = i;c <= f;c+=p)
            res.innerHTML += ` ${c}` 

    }

    
}


