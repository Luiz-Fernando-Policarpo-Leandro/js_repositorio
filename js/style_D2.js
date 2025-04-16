
function carregar () {
    var hr = new Date().getHours()
    var imagems = document.getElementById('imagem')
    var div_do_dia = document.getElementById('msg_do_dia')
    
    function inner(text){div_do_dia.innerHTML = `agora são ${hr}, ${text} `}
    function cor_fundo(cor) { document.body.style.background = cor}
    
    if (hr < 6) {inner(`tenha uma boa madrugada!`); imagems.src = 'css&js_html/dia.jpg'; cor_fundo("rgb(226 183 105)");}
    else if(hr < 12){inner(`bom dia!`); imagems.src = 'css&js_html/dia.jpg'; cor_fundo("rgb(252 230 119)")}
    else if(hr < 19){inner(`boa tarde!`); imagems.src = 'css&js_html/tarde.jpg';cor_fundo("rgb(201 172 0)")}
    else {inner(`boa noite!`); imagems.src = 'css&js_html/noite.jpg'; cor_fundo("rgb(26 59 71)")}
    

}

