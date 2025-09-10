function verificar() {
    antes = window.prompt('Qual o valor anterior do produto?')
    depois = window.prompt('Qual o valor atual do produto?')

    var anterior = Number(antes).toLocaleString('pt-br', {style:'currency',currency:'BRL'})
    var atual = Number(depois).toLocaleString('pt-BR', {style:'currency',currency:'BRL'})

    var resposta = window.document.getElementById('res')
    resposta.innerHTML = '<h2>Analisando os valores informados...</h2>'
    resposta.innerHTML += `<p>O produto custava ${anterior} e agora custa ${atual}.</p>`

    if(depois > antes) {
        resposta.innerHTML += '<p>Hoje o produto está mais caro. &#x1F4B8</p>'
        resposta.innerHTML += `<p>O preço subiu ${Number(depois -antes).toLocaleString('pt-BR', {style:'currency',currency:'BRL'})}.</p>`
        resposta.innerHTML += `<p>Uma variação de ${Number((depois - antes) / (antes / 100)).toFixed(2)}% de alta. &#x1F53A;</p>`

    }else if(antes > depois) {
        resposta.innerHTML += '<p>Hoje o produto está mais barato. &#x1F4B5</p>'
        resposta.innerHTML += `<p>O preço caiu ${Number(antes - depois).toLocaleString('pt-BR', {style:'currency',currency:'BRL'})}.</p>`
        resposta.innerHTML += `<P>Uma variação de ${Number((depois - antes) / (depois / 100)).toFixed(2)}% de queda. &#x1F53B</p>`
    }
    
}