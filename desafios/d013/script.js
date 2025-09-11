function clicar() {
    var nome = window.prompt('Qual o nome do aluno?')
    var nota1 = window.prompt(`Primeira nota de ${nome}`)
    var nota2 = window.prompt(`Segunda nota de ${nome}`)

    nota1 = Number.parseFloat(nota1)
    nota2 = Number.parseFloat(nota2)
    média = (Number.parseFloat(nota1 + nota2) / 2)

    var resposta = window.document.querySelector('div#res')
    resposta.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
    resposta.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${média}</strong></p>`
    
    if(média < 3.0) {
        resposta.innerHTML += '<p>Com média abaixo de 3.0, o aluno está <mark id="vml">REPROVADO</mark></p>'
    }else if(média <= 6.0) {
        resposta.innerHTML += '<p>Com média entre 3.0 e 6.0, o aluno está em <mark id="aml">RECUPERAÇÃO</mark></p>'
    }else if(média <= 10.0) {
        resposta.innerHTML += '<p>Com média acima de 6.0, o aluno está em <mark id="vrd">Aprovado</mark></p>'
    }



    /* abaixo de 3.0 Reprovado
    entre3.0 e 6.0 recuperação
    acima de 6.0 aprovado */
}
