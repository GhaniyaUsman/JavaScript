document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('to-do-form');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span> <button>Delete</button>`;
        taskList.appendChild(li);

        li.querySelector('button').addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }
});
