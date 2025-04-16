
function verificar(){
    var data_txt = document.getElementById('idade_txt').value
    var data_atual = new Date().getFullYear()
    var res = document.getElementById('res')

    function criar_imagem(t) {
        img = document.createElement('img')
        img.setAttribute('src', "arquivos/" + t)
        img.setAttribute('id', 'foto')
    }

    if (data_txt.length === 0 || data_txt > data_atual){ 
        alert('erro')
    }else{
        var idade = data_atual - data_txt
        var fsex = document.getElementsByName('sexo_rad')
        
        
        if (idade <= 1) {fsex = 'bebe'; criar_imagem("bebe.jpg")}
        else if (fsex[0].checked){
            if(idade < 11){fsex = 'menino'; criar_imagem('homem_crianca.jpg')}
            else if(idade < 21){fsex = 'jovem homem'; criar_imagem('homem_adolecente.jpg')}
            else if (idade < 50){ fsex = 'homem adulto'; criar_imagem('homem_adulto.jpg')}
            else{ fsex = 'homem idoso'; criar_imagem('homem_velho.jpg')}
        }
        else
        {
            if(idade < 11){fsex = 'menina'; criar_imagem('mulher_crianca.jpg') }
            else if(idade < 21){fsex = 'jovem mulher';criar_imagem('mulher_adolecente.jpg')}
            else if (idade < 50){ fsex = 'mulher adulta'; criar_imagem('mulher_adulta.jpg')}
            else{ fsex = 'mulher idosa'; criar_imagem('mulher_velha.jpg')}
        }


        res.innerHTML = `<p>Um(a) ${fsex} de ${idade} ano(s) de idade</p>`
        res.appendChild(img)
     }
    
}