// mascaras de jQuery

$('#telefone').mask('(00) 00000-0000');

$(document).ready(function () {
    $('#email').mask('A', {
        translation: {
            'A': { pattern: /[\w@\-.+]/, recursive: true }
        }
    });
});

$('form').validate({
    rules:
    {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        mensagem: {
            required: true
        }


    },
    messages: {
        nome: 'Por favor, insira o seu nome',
        email: 'Por favor, insira seu e-mail',
        telefone: 'Por favor, insira seu telefone'
    },
    submitHandler: function (form) {
        console.log(form);
    },
    invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids()
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos.`)
        }
    }
})

// rolar até o conteúdo 
$(document).ready(function () {
    // Adiciona o comportamento de scroll suave aos links da barra de navegação que apontam para uma seção interna
    $("a").on('click', function (event) {
        if (this.hash !== "" && this.pathname === window.location.pathname) {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});


