function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-menino.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso.png')
            }
        }else if (fsex[1].checked) { 
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-menina.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulta.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}