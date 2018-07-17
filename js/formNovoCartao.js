




// IIFE
;(function() {
    const form = document.querySelector('.formNovoCartao')
    // Criar os cartões

    // Single Page Application

    form.addEventListener('submit', function(evento) {
        // Previnir o comportamento Padrão
        evento.preventDefault()

        // Pegando o texto do cartao
        const textarea = document.querySelector('.formNovoCartao-conteudo')
        const conteudo = textarea.value
        console.log(conteudo)
        const isTextAreaVazio = conteudo.length == 0

        if(isTextAreaVazio) {
            // alert('não digite vários nada')
            // <div class="formNovoCartao-msg">
            //     Não digite vários nada
            // </div>            
            const msgErro = document.createElement('div')
            msgErro.classList.add('formNovoCartao-msg')
            msgErro.textContent = 'Não digite vários nada'
            console.log(msgErro)

            document.querySelector('.formNovoCartao-salvar')
                    .insertAdjacentElement('beforebegin',msgErro)


        }

       // 
       // temos que ter o HTML

    })


    form.classList.remove('no-js')
})()