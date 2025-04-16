
function puts(x){console.log(x)}
/*
let v = function  (x) {
    return x*2
}
puts(v(2))
puts(v(1))
*/

//recusividade
function fatorial(n){
    if (n==1){
        return 1
    }else{
        return n*fatorial(n-1)
    }
}

puts(fatorial(5))