$(document).ready(function(){ /* cerifica se o documento carregou */
    /* a linha de coma pode ser simplificada com $(function(){*/
    $('#azul').click(function(){ /*função de click */
        /*$('azul').hide(); função que esconde o botão */
        $('p').css("color","blue"); /*us css para troca a cor da fonte, pode ser usado para mudar  background também*/
        $('p').fadeOut('slow');
        $('p').delay(3000);
        $('p').fadeIn(); /*/podemos colocar o valor do delay dentro da função fadeIN ou fadeOut */
        $('#msg_azul').text('Texto alterado para azul');
        $('#msg_azul').css('color','blue');
        $('#msg_azul').css('border','1px solid blue');
        $('#msg_azul').fadeOut(3000);
    });
    $('#vermelho').click(function(){
    
        $('p').css("color","red");
        $('#msg_verm')
            .text('Texto alterado para vermelho')
            .css({color: 'red', border: '1px solid red'}) /*declaração múltipla de css */
            .fadeOut(3000)
            /*isso que foi feito nessas linhas acima é o chamado encadeamento em bloco */
            .addClass('green');
            $('button').removeClass('red'); /*remove a classe que deixa o botão vermelho */
    });
});