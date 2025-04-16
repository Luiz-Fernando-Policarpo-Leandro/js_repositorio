function puts(text){console.log(text)}
/*
//      condição simples
var vel = 5.4
puts(`a velocidade é ${vel}km/h`)

if (vel >= 60) { puts(`você foi multado por excesso de volocidade`) }

puts(`dirija com cuidado`)
*/



/*
//      condição composta
var pais = 'eu'
if (pais.toUpperCase() == 'BR'){
    puts(`vc é do Brasil`)
}else{
    puts(`vc é estrangeiro`)
}*/



/*
//      condição aninhada
var num = 3
if (num == 2)   {puts(`num(${num})é igual a dois`)}
else if (num <=2)   {puts(`num(${num}) é menor que 2`)}
else    {puts(`num(${num}) é maior que 2`)}


var hora = new Date().getHours()
puts(`agora são ${hora} horas`)
if (hora < 12) {puts(`bom dia`)}
else if (hora < 18) {puts(`boa tarde`)}
else {puts(`boa noite`)}
*/


//      condição multipla
x = new Date().getDay()

if (x >= 0 && x < 7){
puts('hoje é:')
switch (x){
    case 0:
        puts('domingo');break
    case 1:
        puts('segunda');break
    case 2:
        puts('terça');break
    case 3:
        puts('quarta');break
    case 4:
      puts('quinta');break
    case 5:
        puts('sexta');break
    case 6:
        puts('sabado');break
    //default:
    //    puts('error');break
}
}else{ puts('Erro')}