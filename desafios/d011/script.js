function verificar() {
    ano = window.prompt('Digite o ano que você quer verificar?')
    var total = document.getElementById('res')
    if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        total.innerHTML = `<p>Analisando o ano de ${ano}...</p>
        <p>O ano de ${ano} <mark id="g">É BISSEXTO</mark> ✅</p>`
    }else {
        total.innerHTML = `<p><strong>Analisando o ano de ${ano}...</strong></p>
        <p>O ano de ${ano} <mark id="r">NÃO É BISSEXTO</mark> ❌</p>`
    }
    
}