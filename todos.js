//Primeiro referenciamos os elementos que precisamos: a UL, INPUT e BUTTON que estão na div #app
listElement = document.querySelector('#app ul');
inputElement = document.querySelector('#app input');
buttonElement = document.querySelector('#app button');

/*
Armazenando os todos em um array: (ESSA VARIÁVEL É DESCARTADA PARA O SALVAMENTO NO STORAGE)
var todos = [

];
*/

/*Pegamos o item contido no Storage e o convertemos, para o navegador fazer a leitura
Caso não encontre nada ele retorna uma array vazia*/
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//Função para percorrer o array e renderizar na tela
function renderTodos() {
    /*Antes de renderizar, o list element é visto como "vazio" pelo JS 
    para renderizar apenas o último text adicionado.*/
    listElement.innerHTML = '';


    //Para cada todo da array todos:
    for (todo of todos) {
        var todoElement = document.createElement('li');
        //Informando que o texto é um item de todos
        var todoText = document.createTextNode(todo);

        //Criando a função de excluir o todo
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        /*Passando o valor da posição do item a ser excluído
        Abaixo, o método index of deve retornar a posição do item "todo" na array todos*/
        var pos = todos.indexOf(todo);
        //Setando o onclick com o parãmetro pos
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');


        var linkText = document.createTextNode(' Excluir');
        linkElement.appendChild(linkText);

        //Inserindo o texto e o botão de excluir  na LI E inserindo a LI na UL
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    //O método push informa que estamos adicionando um item à array. Nesse caso, o valor do input para a array todos
    todos.push(todoText);
    //Apagar o texto atual do input e renderizar novamente
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}
/*
Explicação: A função de adicionar todo captura o valor que foi digitado no input 
e o joga na variável todoText, e esta variável é lançada na array todos. 
A função renderTodos captura esta array e a transforma em texto para ser inbutido no LI
*/

//Chamar a função de adicionar
buttonElement.onclick = addTodo;

//A função de excluir deve receber a posição no array do item a ser excluído
function deleteTodo(pos) {
    //O método splice remove uma quantidade de itens do array baseado na posição que passarmos
    //Abaixo, passamos a posição e o número de itens a serem excluídos
    todos.splice(pos, 1)
    renderTodos();
    saveToStorage();
}

//Função para salvar no storage
function saveToStorage(){
    /*Informamos um nome para o item a ser salvo e o que deverá ser salvo
    Convertemos a array todos para o formato JSON pois o storage não reconhece arrays
    Após isso, chamamos a função de salvar nos métodos Delete e Add*/
    localStorage.getItem('list_todos', JSON.stringify(todos));
}