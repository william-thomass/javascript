/* var num = [5, 8 ,2 ,9 ]
 console.log(num)*/

 /*
 for(var pos = 0; pos<num.length;pos++){
    console.log (`A posiçao ${pos} é o número ${num[pos]}`)
 }
*/
 /*for( var pos in num){
    console.log (`A posiçao ${pos} é o número ${num[pos]}`)
 }*/

/* function parimp(n){

    if(n%2 == 0) {
        return ' Par'
    }else {
        return 'Impar'
    
    }
 }

 let res = parimp(5)
 console.log (res) */

 /*function soma(n1 = 0,n2 = 0){
    return n1 + n2
 }

 console.log(soma(2))


 var v = function(x){
    return x*2

 }

 console.log(v(6))*/



 function fatorial(n){
    var fat = 1
    for(var c =n;c>1;c--){
        fat *= c
    }return fat
    }

    console.log(fatorial(5))