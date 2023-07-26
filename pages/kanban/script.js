// Extrai os query parameters da URL
const urlParams = new URLSearchParams(window.location.search);
const taskName = urlParams.get('name');
const taskDescription = urlParams.get('description');

// Adiciona a nova tarefa se os query parameters existirem
if (taskName && taskDescription) {
    var todoColumn = document.getElementById('todo-column');

    var newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.draggable = true;
    newTask.addEventListener('dragstart', drag);

    newTask.innerHTML = `<strong>${taskName}</strong><br>${taskDescription.replace(/\n/g, '<br>')}`;

    todoColumn.appendChild(newTask);
}

