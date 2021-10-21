const add = () => {
    var nome = document.getElementById("nome");
    var prioridade = document.getElementById("prioridade");
    var data = document.getElementById("data");

    cadastro = {
        tarefa: nome.value,
        prioridade: prioridade.value,
        data: data.value,
        status: false
    }
    if (formValido(cadastro)) {
        const tarefasLS = JSON.parse(localStorage.getItem("tarefas"));
        console.log(tarefasLS);
        const todasTarefas = [...tarefasLS]
        todasTarefas.push(cadastro);
        localStorage.setItem('tarefas', JSON.stringify(todasTarefas));
        alert("Tarefa adicionada com sucesso!");
        nome.value = "";
        prioridade.value = 0;
        data.value = "";
    }else{
        alert("Todos os campos devem ser preenchidos!");
    }
}

const formValido = (cadastro) => {
    return cadastro.tarefa != "" && cadastro.data != "";
}



