let array = []
let resultado = docc('div#div-resultado')

function calculo(){
    resultado.innerHTML = ''
    let p_l = function (x) {for (let c in x){resultado.innerHTML+=`<p>${x[c]}</p>`}}
    
    let conta= function(x, tipo='S') {
        let soma = 0
        if (tipo=='S' && x.length != 0) {for (let c in x){soma += x[c]}
            return soma
        }
    }
    
    
    p_l([`Total de numeros adicionados ${array.length}`,
    `O maior numero encontrado foi: ${Math.max(...array)}`,
    `O menor numero encontrado foi: ${Math.min(...array)}`,
    `Soma de todos os numeros ${conta(array)}`,
    `Media ${(conta(array))/array.length}`])


}

//      tabela
function tabela() {
    let nval = Number(docc('input#num_n').value)
    
    if (nval > 0 && nval < 101 && array.indexOf(nval) == -1){
        docc('div#div-resultado')
        array.push(nval)
        let select = docc('select#select-num')
        
        x = document.createElement('option')
            x.value = array.length
            x.text = `O Numero ${nval} Foi Adicionado`
            select.appendChild(x)
        
    }else{alert('Numero ja existente ou invalido')}
}


//      doc
function docc(x, tipo='proc'){
    if (tipo == 'proc'){
        return document.querySelector(x)
    }
}