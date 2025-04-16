function doc(id, create=false) {return doc1 = create==false ? document.getElementById(id) : document.createElement(id)}


function tabuada (){
    let num_t = Number(doc('num_n').value)
    let div_tabuada = doc('div-tabuada')
    
    div_tabuada.innerHTML = `<select id="tabuada-select" size="10"></select>`
    let iner = doc('tabuada-select')
    
    for (let x = 0; x <= 10; x++){
        let op = doc('option',true)
        op.text = `${num_t} x ${x} = ${num_t*x}`
        op.value = `V${x}`
        iner.appendChild(op)
    }
}