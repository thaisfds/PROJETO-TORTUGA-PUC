const carregaTarefas = () => {
    const tarefasContainer = document.getElementById("tarefasContainer"); //pegar o elemento da tarefa
    console.log(tarefasContainer);
    let tarefasLS = JSON.parse(localStorage.getItem("tarefas")); //pegar o local storage com o id da tarefa
    console.log(tarefasLS);
    
    const tarefasAlta = tarefasLS.filter(tarefa => tarefa.prioridade == "0");
    const tarefasMedia = tarefasLS.filter(tarefa => tarefa.prioridade == "1");
    const tarefasBaixa = tarefasLS.filter(tarefa => tarefa.prioridade == "2");
    console.log('Altas',tarefasAlta);
    console.log('Medias',tarefasMedia);
    console.log('Baixa',tarefasBaixa);

    tarefasLS = [...tarefasAlta,...tarefasMedia,...tarefasBaixa];

    tarefasLS.map(tarefa => {
        const data = `<button style='width: 150px' type="button" class="btn btn-success tarefa">${tarefa.data}</button>`
        let colorbutton
        switch (tarefa.prioridade) {
            case "0":
                colorbutton = "danger"
                break;
            case "1":
                colorbutton = "secondary"
                break;
            case "2":
                colorbutton = "primary"
                break;
        }
        const button = `<button style='margin-left: 10px' type="button" class="btn btn-${colorbutton} tarefa">${tarefa.tarefa}</button>` //configurar o codigo html como se fosse o display da tarefa
        let status
        if(tarefa.status == true){
            status =`<input type="checkbox" checked>`
        }else{ 
            status =`<input type="checkbox">`
        }
        const componenteTarefa = `<li class= "tarefa-container">${data} ${button} ${status}</li>`
        console.log(componenteTarefa);
        tarefasContainer.insertAdjacentHTML( 'beforeend', componenteTarefa ); //add a tarefa no html
    })
}

carregaTarefas();