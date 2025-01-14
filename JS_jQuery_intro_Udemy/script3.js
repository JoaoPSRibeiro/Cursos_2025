// tipos de dados

var numero = 6; // inteiro
var dedcimal = 4.5;
var stri = "Olá Mundo";
var lista = ["laranja", " maçã", " banana", 1234];
alert(lista[0]); // estamos pedindo que o alert mostre apenas o ítem na posição Zero da lista
alert("podemos comer " + lista[0] + " ou" + lista[1]); // aqui uma frase usando ítens da lista separadamente

//para pegarmos os valores da lista separadamente, usamos o laço FOR
for (i in lista){
    alert(lista[i]);
}

console.log("Olá, tudo bem ???")