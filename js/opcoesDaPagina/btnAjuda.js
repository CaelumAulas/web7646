// IIFE
;(function() {
    
    const btnAjuda = document.querySelector('#btnAjuda')

    btnAjuda.addEventListener('click', function() {
        const ajudas = [
            { conteudo: 'Você pode criar cartões', cor: 'red' },
            { conteudo: 'Deltar cartões', cor: 'green' }
        ]

        ajudas.reverse().forEach(function(ajudaAtual, indice) {
            adicionaCartaoNoMural(ajudaAtual)
        })

        // function forEach(funcao) {
        //     // acesso ao nosso array
        //     for(let ajudaAtual of ajudas) {
        //         funcao(ajudaAtual)
        //     }   
        // }

        // for(let ajudaAtual of ajudas) {
        //     alert(ajudaAtual)
        // }
    })

    $(btnAjuda).removeClass('no-js')
    // btnAjuda.classList.remove('no-js')

    // console.log('Elemento puro', btnAjuda)
    // console.log('Elemento convertido', $(btnAjuda))
})()