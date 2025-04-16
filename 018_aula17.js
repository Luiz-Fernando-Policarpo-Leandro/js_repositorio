puts = function (x) {console.log(x)}
let amigo = {nome:'jose',
    sexo:'masculino',
    peso:80, 
    engordar(p=0){
        this.peso += p
        puts(`${this.nome} vai ser ter ${this.peso}kg`)
    }
} // engordar é uma função

puts(amigo.engordar(7))