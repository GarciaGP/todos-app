/*Promises são códigos que não influenciam a linha do tempo do código JS, devolvendo o sucesso ou erro
só depois de algum tempo, então não precisamos nos preocupar com o tempo de sua resposta*/

//Definindo a promise
var myPromise = function() {
    return new Promise(function (resolve, reject) { //A promise deve retornar a própria função promise
        //o parâmetro resolve é a função que nos retorna o sucesso da operação, e o reject retorna o erro
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/uers/GarciaGP');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState = 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText)); //Verificamos se a resposta foi positiva, se sim o resolve recebe a resposta
                } else {
                    reject('Erro'); //Caso dê erro, o reject é chamado 
                }
            }
        }
    });
}

//Esse é o método para aguardar a reposta da promise:
myPromise()
    .then(function (response) {
        console.log(response);
    }) //O .then é chamado ao executar o método resolve
    .catch(function (error) {
        console.warn(error);
    }); // O . catch é chamado caso o método reject seja executado
    

//Verificando o resultado da Promise. Esse método retorna "pending" pois o console log não espera a resposta da promise antes de ser executado
var resultado = myPromise();
console.log(resultado);


