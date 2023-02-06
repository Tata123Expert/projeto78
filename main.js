var imagens = 
[
    "dad.jpg",
    "mom.jpg",
    "me.jpg",
    "familia.jpg"
];

var nomes = 
[
    "Pai", "Mãe", "Eu", "Família"
];

var i = 0;
function proximo()
{
document.getElementById("membros").innerHTML = nomes[i];
document.getElementById("familia").src = imagens[i];
i++;


if (i>=4)

{
  i = 0;
}

}
