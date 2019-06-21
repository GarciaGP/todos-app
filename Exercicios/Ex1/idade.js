
function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        //Informando que a execução da função deve ser de 2s
        setTimeout(function () {
            if (idade >= 18){
                resolve()
            } else {
                reject();
            }
        }, 2000);
    });
}



checaIdade(10)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });
