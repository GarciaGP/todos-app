var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#userId');

//A função recebe o parâmetro que foi gerado pela função list e gera uma lista com o array de repositórios 
function renderRepositories(repositories) {
    listElement.innerHTML = "";
    for (repo of repositories) {
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');
        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

//A função de loading é chamada no início de cada outra função.
function renderLoading() {
    listElement.innerHTML = "";
    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');
    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}
function renderError() {
    listElement.innerHTML = "";
    var textElement = document.createTextNode('Erro!');
    var errorElement = document.createElement('li');
    errorElement.style.color = "#F00";
    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}
function listRepositories() {
    var user = inputElement.value;

    //Renderiza o loading antes de iniciar o processo de busca
    renderLoading();
    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            //Lançando o parâmetro de resposta dentro da função renderRepositories
            renderRepositories(response.data);
        })
        .catch(function () {
            renderError();
        });
}