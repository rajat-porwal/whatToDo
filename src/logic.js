class ToDo {
    constructor(title, description = '', dueDate = '', priority = 'low') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function fork() {
    const taskGroupsContainer = document.getElementById('taskGroupsContainer');
    const toDoContainer = document.getElementById('toDoContainer');
    const newTaskGroupBtn = document.getElementById('newTaskGroupBtn');
    const newToDoBtn = document.querySelector('.newToDoBtn');
    const filterUpcomingBtn = document.getElementById('filterUpcomingBtn');
    const filterPriorityBtn = document.getElementById('filterPriorityBtn');
    const groups = {};
    let selectedGroup = null;

    function findTodoByTitle(title) {
        return selectedGroup ? groups[selectedGroup].find(todo => todo.title === title) : null;
    }

    function displayToDos(groupName) {
        toDoContainer.innerHTML = ''; // Clear current to-dos
        if (groups[groupName]) {
            groups[groupName].forEach(todo => {
                const wrappertoDoTask = document.createElement('div');
                wrappertoDoTask.classList.add('wrapperToDo');
                toDoContainer.appendChild(wrappertoDoTask);

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.classList.add('todo-checkbox');
                wrappertoDoTask.appendChild(checkbox);

                const taskElement = document.createElement('div');
                taskElement.classList.add('toDoTask');
                taskElement.textContent = todo.title;
                wrappertoDoTask.appendChild(taskElement);

                checkbox.addEventListener('change', function() {
                    if (checkbox.checked) {
                        taskElement.classList.add('taskChecked');
                    } else {
                        taskElement.classList.remove('taskChecked');
                    }
                });

                wrappertoDoTask.addEventListener('click', function(event) {
                    if (event.target === checkbox) return;

                    const existingForm = taskElement.querySelector('form');
                    if (existingForm) return;

                    const taskContent = taskElement.innerText.trim();
                    const myToDo = findTodoByTitle(taskContent);

                    const form = document.createElement('form');

                    const taskInput = document.createElement('input');
                    taskInput.type = 'text';
                    taskInput.value = taskContent;
                    form.appendChild(taskInput);

                    const descriptionInput = document.createElement('input');
                    descriptionInput.type = 'text';
                    descriptionInput.value = myToDo.description || '';
                    descriptionInput.placeholder = 'Description';
                    form.appendChild(descriptionInput);

                    const dueDateInput = document.createElement('input');
                    dueDateInput.type = 'date';
                    dueDateInput.value = myToDo.dueDate || '';
                    form.appendChild(dueDateInput);

                    const priorityInput = document.createElement('select');
                    const priorityOption1 = document.createElement('option');
                    priorityOption1.value = 'low';
                    priorityOption1.textContent = 'Low';
                    const priorityOption2 = document.createElement('option');
                    priorityOption2.value = 'medium';
                    priorityOption2.textContent = 'Medium';
                    const priorityOption3 = document.createElement('option');
                    priorityOption3.value = 'high';
                    priorityOption3.textContent = 'High';
                    priorityInput.appendChild(priorityOption1);
                    priorityInput.appendChild(priorityOption2);
                    priorityInput.appendChild(priorityOption3);
                    priorityInput.value = myToDo.priority || 'low';
                    form.appendChild(priorityInput);

                    const submitButton = document.createElement('button');
                    submitButton.type = 'submit';
                    submitButton.textContent = 'Submit';
                    form.appendChild(submitButton);

                    form.addEventListener('submit', function(e) {
                        e.preventDefault();

                        myToDo.title = taskInput.value;
                        myToDo.description = descriptionInput.value;
                        myToDo.dueDate = dueDateInput.value;
                        myToDo.priority = priorityInput.value;

                        taskElement.textContent = myToDo.title;

                        if (myToDo.description) {
                            const description = document.createElement('p');
                            description.textContent = myToDo.description;
                            taskElement.appendChild(description);
                        }

                        if (myToDo.dueDate) {
                            const parts = myToDo.dueDate.split('-');
                            const date = parseInt(parts[2], 10);
                            const month = parseInt(parts[1], 10);
                            const monthExtractor = new Date(2000, month - 1, 1);
                            const monthName = monthExtractor.toLocaleString('en-US', { month: 'long' });
                            const dueDate = document.createElement('p');
                            dueDate.textContent = `Due Date is: ${date} ${monthName}`;
                            taskElement.appendChild(dueDate);
                        }

                        if (myToDo.priority) {
                            const priority = document.createElement('p');
                            priority.textContent = `Priority: ${myToDo.priority}`;
                            taskElement.appendChild(priority);
                        }

                        form.remove();
                    });

                    taskElement.textContent = '';
                    taskElement.appendChild(form);
                    taskInput.focus();
                });
            });
        }
    }

    function displayFilteredToDos(filteredTasks) {
        toDoContainer.innerHTML = ''; // Clear current to-dos
        if (filteredTasks.length > 0) {
            filteredTasks.forEach(todo => {
                const wrappertoDoTask = document.createElement('div');
                wrappertoDoTask.classList.add('wrapperToDo');
                toDoContainer.appendChild(wrappertoDoTask);

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.classList.add('todo-checkbox');
                wrappertoDoTask.appendChild(checkbox);

                const taskElement = document.createElement('div');
                taskElement.classList.add('toDoTask');
                taskElement.textContent = todo.title;
                wrappertoDoTask.appendChild(taskElement);

                checkbox.addEventListener('change', function() {
                    if (checkbox.checked) {
                        taskElement.classList.add('taskChecked');
                    } else {
                        taskElement.classList.remove('taskChecked');
                    }
                });

                wrappertoDoTask.addEventListener('click', function(event) {
                    if (event.target === checkbox) return;

                    const existingForm = taskElement.querySelector('form');
                    if (existingForm) return;

                    const taskContent = taskElement.innerText.trim();
                    const myToDo = findTodoByTitle(taskContent);

                    const form = document.createElement('form');

                    const taskInput = document.createElement('input');
                    taskInput.type = 'text';
                    taskInput.value = taskContent;
                    form.appendChild(taskInput);

                    const descriptionInput = document.createElement('input');
                    descriptionInput.type = 'text';
                    descriptionInput.value = myToDo.description || '';
                    descriptionInput.placeholder = 'Description';
                    form.appendChild(descriptionInput);

                    const dueDateInput = document.createElement('input');
                    dueDateInput.type = 'date';
                    dueDateInput.value = myToDo.dueDate || '';
                    form.appendChild(dueDateInput);

                    const priorityInput = document.createElement('select');
                    const priorityOption1 = document.createElement('option');
                    priorityOption1.value = 'low';
                    priorityOption1.textContent = 'Low';
                    const priorityOption2 = document.createElement('option');
                    priorityOption2.value = 'medium';
                    priorityOption2.textContent = 'Medium';
                    const priorityOption3 = document.createElement('option');
                    priorityOption3.value = 'high';
                    priorityOption3.textContent = 'High';
                    priorityInput.appendChild(priorityOption1);
                    priorityInput.appendChild(priorityOption2);
                    priorityInput.appendChild(priorityOption3);
                    priorityInput.value = myToDo.priority || 'low';
                    form.appendChild(priorityInput);

                    const submitButton = document.createElement('button');
                    submitButton.type = 'submit';
                    submitButton.textContent = 'Submit';
                    form.appendChild(submitButton);

                    form.addEventListener('submit', function(e) {
                        e.preventDefault();

                        myToDo.title = taskInput.value;
                        myToDo.description = descriptionInput.value;
                        myToDo.dueDate = dueDateInput.value;
                        myToDo.priority = priorityInput.value;

                        taskElement.textContent = myToDo.title;

                        if (myToDo.description) {
                            const description = document.createElement('p');
                            description.textContent = myToDo.description;
                            taskElement.appendChild(description);
                        }

                        if (myToDo.dueDate) {
                            const parts = myToDo.dueDate.split('-');
                            const date = parseInt(parts[2], 10);
                            const month = parseInt(parts[1], 10);
                            const monthExtractor = new Date(2000, month - 1, 1);
                            const monthName = monthExtractor.toLocaleString('en-US', { month: 'long' });
                            const dueDate = document.createElement('p');
                            dueDate.textContent = `Due Date is: ${date} ${monthName}`;
                            taskElement.appendChild(dueDate);
                        }

                        if (myToDo.priority) {
                            const priority = document.createElement('p');
                            priority.textContent = `Priority: ${myToDo.priority}`;
                            taskElement.appendChild(priority);
                        }

                        form.remove();
                    });

                    taskElement.textContent = '';
                    taskElement.appendChild(form);
                    taskInput.focus();
                });
            });
        }
    }

    function filterUpcoming() {
        const today = new Date();
        const filteredTasks = [];

        Object.keys(groups).forEach(groupName => {
            groups[groupName].forEach(todo => {
                if (todo.dueDate && new Date(todo.dueDate) >= today) {
                    filteredTasks.push(todo);
                }
            });
        });

        displayFilteredToDos(filteredTasks);
    }

    function filterByPriority() {
        const filteredTasks = [];

        Object.keys(groups).forEach(groupName => {
            groups[groupName].forEach(todo => {
                if (todo.priority === 'high') {
                    filteredTasks.push(todo);
                }
            });
        });

        displayFilteredToDos(filteredTasks);
    }

    function clearFilters() {
        displayToDos(selectedGroup);
    }

    newTaskGroupBtn.addEventListener('click', function() {
        const newGroupForm = document.createElement('form');
        const groupNameInput = document.createElement('input');
        const confirmGroupNameBtn = document.createElement('button');

        groupNameInput.type = 'text';
        groupNameInput.name = 'newGroupForm';
        groupNameInput.placeholder = 'New Task List Name';
        confirmGroupNameBtn.type = 'submit';
        confirmGroupNameBtn.textContent = 'Enter';

        newGroupForm.appendChild(groupNameInput);
        newGroupForm.appendChild(confirmGroupNameBtn);
        taskGroupsContainer.appendChild(newGroupForm);

        confirmGroupNameBtn.addEventListener('click', function(event) {
            event.preventDefault();
            if (groupNameInput.value.trim() !== '') {
                const groupElement = document.createElement('div');
                groupElement.classList.add('toDoGroups');
                groupElement.textContent = groupNameInput.value;
                taskGroupsContainer.appendChild(groupElement);
                groupNameInput.value = '';
                newGroupForm.remove();

                groups[groupElement.textContent] = [];
                selectedGroup = groupElement.textContent;

                groupElement.addEventListener('click', function() {
                    document.querySelectorAll('.toDoGroups').forEach(group => {
                        group.classList.remove('selected-group');
                    });
                    groupElement.classList.add('selected-group');
                    selectedGroup = groupElement.textContent;
                    displayToDos(selectedGroup);
                });
            }
        });
    });

    newToDoBtn.addEventListener('click', function() {
        if (!selectedGroup) {
            alert('Please select a group first.');
            return;
        }

        const form = document.createElement('form');
        const input1 = document.createElement('input');
        const submitButton = document.createElement('button');

        form.classList.add('form');
        input1.type = "text";
        input1.name = "newToDo";
        input1.placeholder = "Enter new ToDO";
        submitButton.type = "submit";
        submitButton.textContent = "Submit";

        form.appendChild(input1);
        form.appendChild(submitButton);
        toDoContainer.appendChild(form);

        submitButton.addEventListener('click', function(event) {
            event.preventDefault();

            const taskInputValue = input1.value;
            const newToDo = new ToDo(taskInputValue);
            groups[selectedGroup].push(newToDo);

            displayToDos(selectedGroup);

            input1.value = '';
            form.remove();
        });
    });

    filterUpcomingBtn.addEventListener('click', filterUpcoming);

    filterPriorityBtn.addEventListener('click', filterByPriority);
}

export { ToDo, fork };