
(function () {
    const btn = document.querySelector('.opcoesDoCartao-remove')
    // 1 - Criar um EventListener pro botao
    console.log(btn)
    btn.addEventListener('click', function removeCartao() {
        console.log('Clicou no botao remove')
        // Quem deve ser removido?
        const cartao = btn.parentNode.parentNode
        // Adicionar a classe: cartao--some
        cartao.classList.add('cartao--some')
        cartao.addEventListener('transitionend', function () {
            console.log('Uns instantes depois')
            cartao.remove()
        })
        // Definir um tempo, para o código executar
        // setTimeout(function() {
        //     console.log('Um tempo depois...')
        // }, 5000)
        // setInterval(function() {
        //     console.log('Um tempo depois... e pra sempre')
        // }, 5000)
        // animações via JS
    })
})()

