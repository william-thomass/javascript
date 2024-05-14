

    var num = window.document.getElementById('num')   
    var t = window.document.getElementById('txt')
    var res = document.getElementById('res')
    var valores =[]


    function isNumber(n){
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        }else {
            return false
        } 
    }

    function inLista(n, l){
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }

    }
    
    function adc(){
        if(isNumber(num.value) && !inLista(num.value, valores)){
            valores.push(Number(num.value))
            var item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            txt.appendChild(item)
            res.innerHTML = ''
        }else {
            window.alert('Valor invalido')
        }
        num.value = ''
        num.focus()
    }

    function finalizar(){
        if(valores.length ==0 ){
            window.alert('Adicione valores')
        }else {
            var tot = valores.length
            
            res.iinerHTML = ''
            res.innerHTML += `<p>Ao lado temos ${tot} Numeros cadastrador </p>` 

        }
    }
