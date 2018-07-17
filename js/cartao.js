
// IIFE ( e o danado do ponto e virgula? )
// Bolhas e JavaScript
;(function() {

    const cartoes = document.querySelectorAll('.cartao')

    for(let cartao of cartoes) {
        // Evento de Focus do Cartão
        cartao.addEventListener('focusin', function() {
            console.log('focou em')
            cartao.classList.add('cartao--focado')
        })
        cartao.addEventListener('focusout', function() {
            console.log('desfocou em')
            cartao.classList.remove('cartao--focado')
        })

        // Mudança de cor
        // 1 - Adiciona o evento
        cartao.addEventListener('change', function(evento) {
            const elementoClicado = evento.target

            const isRadioTipo = elementoClicado.classList.contains('opcoesDoCartao-radioTipo')
            if(isRadioTipo) {
                // 2 - Pegar a cor do value do input
                console.log(isRadioTipo, elementoClicado.value)
                const corNovaDoCartao = elementoClicado.value
                // 3 - Trocar a cor do background do cartão
                cartao.style.backgroundColor = corNovaDoCartao
            }
        })

        cartao.addEventListener('keypress', function(evento) {
            const elementoAtivoAgoraNow = evento.target
            const isOpcaoDoCartao = elementoAtivoAgoraNow.classList.contains('opcoesDoCartao-opcao')
            const isEnterOuEspaco = (evento.key == 'Enter' || evento.key == ' ')
            if(isOpcaoDoCartao && isEnterOuEspaco ) {
                elementoAtivoAgoraNow.click() // Forçando um click
            }
        })

        // # Desafio
        // Remover o cartão usando a técnica do delegate
        // adiciona o evento no cartao e verifica quem foi clicado
        // colocar código exatamente aqui
        cartao.addEventListener('click', function(evento) {
            const elementoClicado = evento.target
            const isRemoveCartao = elementoClicado.classList.contains('opcoesDoCartao-remove')
            
            if(isRemoveCartao) {
                cartao.classList.add('cartao--some')
                cartao.addEventListener('transitionend', function() {
                    cartao.remove()
                })
            }
        })

    } // Fim do for
    

})()


// [Testem essas opções de evento]
// keypress: 
// keydown
// keyup
// input
// cartao.addEventListener('keydown', function(evento) {
//     console.log('keydown')
// })
// cartao.addEventListener('keyup', function(evento) {
//     console.log('keyup')
// })
// cartao.addEventListener('keypress', function(evento) {
//     console.log('keypress')
// })
// cartao.addEventListener('input', function(evento) {
//     console.log('input')
// })