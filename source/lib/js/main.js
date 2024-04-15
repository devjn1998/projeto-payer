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
        },
        curriculo: {
            required: true
        }


    },
    messages: {
        nome: 'Por favor, insira o seu nome',
        email: 'Por favor, insira seu e-mail',
        telefone: 'Por favor, insira seu telefone',
        curriculo: 'Por favor, envie um documento PDF'

    },
    invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids()
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos.`)
        }
    }
})

document.getElementById('trabalhe-conosco').addEventListener('submit', function (event){
    var arquivoInput = document.getElementById('curriculo');
    var arquivo = arquivoInput.files[0];
    if ( arquivo && arquivo.type !== 'application/pdf') {
        alert("Porfavor, selecione um arquivo PDF. ")
    }
});




