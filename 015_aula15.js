

let num = [8,1,0,4,7,2,3,5,9,6]
let num1 = [14,15,10,13,12]

console.log(num.sort())


puts(`array: [${num}]
\ntamanho: ${num.length}
\nadd: [14,15,10,13,12]
\nordenando: [${num.sort()}]`)
/*
for(let pos=0; pos < num.length; pos++){
    puts( `num[${pos}]=${num[pos]}`,true)
}
*/
for(let pos in num){
    puts( `num[${pos}]=${num[pos]}`,true)
}
puts(num.indexOf(6))



function puts(x,tipo=false) {console.log(x = tipo==true ? x : `\n\n${x}\n\n`)}