const tarefas = 
[
    {
        tarefa: "Estudar",
        prioridade: "0",
        data: "01/06/2021",
        status: false
    }, 
    {
        tarefa: "Caminhar",
        prioridade: "1",
        data: "02/06/2021",
        status: true
    }, 
    {
        tarefa: "Comer",
        prioridade: "2",
        data: "03/06/2021",
        status: false
    }, 
    {
        tarefa: "Andar",
        prioridade: "0",
        data: "04/06/2021",
        status: true
    }
]
if(localStorage.getItem("tarefas")== null){
    localStorage.setItem("tarefas",JSON.stringify(tarefas));
}