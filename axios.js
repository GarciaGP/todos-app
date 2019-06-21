/*Axios é uma biblioteca para promises. Ela reduz todo o código que escrevemos anteriormente*/


//Ao inves de chamar a promise, chamamos direto a URL da API
axios.get('https://api.github.com/users/GarciaGP') 
    .then(function (response) {
        console.log(response.data.avatar_url); //O axios reconhece e já nos traz os elementos como objetos do JS
    }) //O .then é chamado ao executar o método resolve
    .catch(function (error) {
        console.warn(error);
    }); // O . catch é chamado caso o método reject seja executado