/*São requisições para alguma API que são carregadas sem recarregar a página
primeiro definimos uma classe que chama a função do AJAX*/
var xhr = new XMLHttpRequest();

//Chamaremos as informações do servidor do github usando o método GET
xhr.open('GET', 'https://api.github.com/users/GarciaGP');
xhr.send(null); // Aqui enviaríamos parâmetros da requisição, se fosse o caso.

/*Como a requisição é assíncrona, ou seja, não ocorre no mesmo fluxo em que o código
precisamos fazer a verificação da resposta do servidor*/
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    } // 4 verifica se a conexão foi bem sucedida
}

