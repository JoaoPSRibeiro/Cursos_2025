var mensagem = "Olá Mundo!";
// para criar variável precisamos usar a palavra reservada VAR antes
alert(mensagem);
// para criar comentário de uma linha em JS use barra dupla
/* para criar comentários com 
mais de uma linha
usamos o barra asteristico */
var a = 2;
var b = 6;
var c = "Olá Mundo!";

var soma = a+b;
var sub = a-b;
var div = a/b;
var mult = a*b;

/*alert("A Soma de A + B é " + soma); // concatenação de string com variável
alert(sub);
alert(div);
alert(mult);
*/
if(b%2 == 1){
    alert("Número Ímpar!!!");
}else if(c%2 == 0){
    alert("Número Par!");
}else{
    alert("Valor Inválido");
}
