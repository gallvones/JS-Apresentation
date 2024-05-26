// Espera até que toda a página esteja carregada para começar
document.addEventListener('DOMContentLoaded', () => {
    // Pega o campo de entrada onde escrevemos a nova tarefa
    const taskInput = document.getElementById('new-task');
    // Pega o botão que adiciona novas tarefas
    const addTaskButton = document.getElementById('add-task');
    // Pega a lista onde todas as tarefas vão aparecer
    const tasksList = document.getElementById('tasks');

    // Quando clicamos no botão de adicionar tarefa
    addTaskButton.addEventListener('click', () => {
        // Pega o texto da nova tarefa e remove os espaços extras
        const taskText = taskInput.value.trim();
        // Se tiver algum texto (não estiver vazio)
        if (taskText) {
            // Adiciona a tarefa na lista
            addTask(taskText);
            // Limpa o campo de entrada para a próxima tarefa
            taskInput.value = '';
        }
    });

    // Quando clicamos em qualquer coisa na lista de tarefas
    tasksList.addEventListener('click', (e) => {
        // Se clicarmos no botão de remover
        if (e.target.tagName === 'BUTTON') {
            // Remove a tarefa (o botão está dentro do item da lista)
            removeTask(e.target.parentElement);
        } else if (e.target.tagName === 'LI') {
            // Se clicarmos no próprio item da lista, marca ou desmarca como concluído
            toggleTaskCompleted(e.target);
        }
    });

    // Função que adiciona uma nova tarefa à lista
    function addTask(text) {
        // Cria um novo item na lista
        const li = document.createElement('li');
        // Coloca o texto da tarefa nesse item
        li.textContent = text;
        // Cria um botão de remover para essa tarefa
        const removeButton = document.createElement('button');
        // Coloca o texto "Remove" no botão
        removeButton.textContent = 'Remove';
        // Adiciona o botão de remover dentro do item da lista
        li.appendChild(removeButton);
        // Adiciona o item completo (tarefa + botão) na lista de tarefas
        tasksList.appendChild(li);
    }

    // Função que remove uma tarefa da lista
    function removeTask(taskElement) {
        // Remove o item da lista de tarefas
        tasksList.removeChild(taskElement);
    }

    // Função que marca ou desmarca uma tarefa como concluída
    function toggleTaskCompleted(taskElement) {
        // Alterna a classe 'completed' no item da lista (adiciona ou remove)
        taskElement.classList.toggle('completed');
        
    }
});

