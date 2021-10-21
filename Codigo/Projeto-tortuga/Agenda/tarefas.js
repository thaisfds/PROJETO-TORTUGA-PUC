const carregaTarefas = () => {
    const tarefasContainer = document.getElementById("tarefasContainer"); //pegar o elemento da tarefa
    console.log(tarefasContainer);
    const tarefasLS = JSON.parse(localStorage.getItem("tarefas")); //pegar o local storage com o id da tarefa
    console.log(tarefasLS);

    tarefasLS.map(tarefa => {
        const button = `<button type="button" class="btn btn-success but2">${tarefa.tarefa}</button>` //configurar o codigo html como se fosse o display da tarefa
        console.log(button);
        tarefasContainer.insertAdjacentHTML( 'beforeend', button ); //add a tarefa no html
    })
}

carregaTarefas();