const carregaTarefas = () => {
    const tarefasContainer = document.getElementById("tarefasContainer");
    console.log(tarefasContainer);
    const tarefasLS = JSON.parse(localStorage.getItem("tarefas"));
    console.log(tarefasLS);

    tarefasLS.map(tarefa => {
        const button = `<button type="button" class="btn btn-success not">${tarefa.tarefa}</button>`
        console.log(button);
        tarefasContainer.insertAdjacentHTML( 'beforeend', button );
    })
}

carregaTarefas();