function doc(doc, x=false) {
    if (x==false){
        doc = Number(document.getElementById(doc).value)
    }else { doc = document.querySelector(doc)}
    return doc
}

function verificar() {
    passos = doc('num_passos')
    comeco = doc('num_comeco')
    fim = doc('num_fim')
    res = doc('div#resultado', true)


    if (passos > 0 && comeco >= 0 && fim > 0){
        res.innerText = ''
        if (comeco <= fim){
        for (comeco ;comeco <= fim; comeco += passos ){
            res.innerText += ` ${comeco} `
        }}else{
        
        for (comeco; comeco >= fim; comeco -= passos){
            res.innerText += ` ${comeco} `

        }}


    }else{ alert('houve um erro nos numeros')}


    


}
