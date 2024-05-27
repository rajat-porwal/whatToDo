import { ToDo, fork } from "./logic";
import './style.css';

const container = document.createElement('div');
container.id = 'container';

const sidebar = document.createElement('aside');
sidebar.id = 'sidebar';

const sidebarHeader = document.createElement('h2');
sidebarHeader.textContent = 'Groups';
sidebar.appendChild(sidebarHeader);

const newTaskGroupBtn = document.createElement('button');
newTaskGroupBtn.id = 'newTaskGroupBtn';
newTaskGroupBtn.innerText = 'New Group';
sidebar.appendChild(newTaskGroupBtn);

const taskGroupsContainer = document.createElement('div');
taskGroupsContainer.id = 'taskGroupsContainer';
sidebar.appendChild(taskGroupsContainer);

const filterUpcomingBtn = document.createElement('button');
filterUpcomingBtn.id = 'filterUpcomingBtn';
filterUpcomingBtn.innerText = 'Upcoming';
sidebar.appendChild(filterUpcomingBtn);

const filterPriorityBtn = document.createElement('button');
filterPriorityBtn.id = 'filterPriorityBtn';
filterPriorityBtn.innerText = 'Priority';
sidebar.appendChild(filterPriorityBtn);

container.appendChild(sidebar);

const mainContent = document.createElement('main');
mainContent.id = 'mainContent';

const headline = document.createElement('h1');
headline.classList.add('toDoGroups');
headline.innerText = 'My To Do List';
mainContent.appendChild(headline);

const newToDoBtn = document.createElement('button');
newToDoBtn.classList.add('newToDoBtn');
newToDoBtn.innerText = 'Add New ToDo';
mainContent.appendChild(newToDoBtn);

const toDoContainer = document.createElement('div');
toDoContainer.id = 'toDoContainer';
mainContent.appendChild(toDoContainer);

container.appendChild(mainContent);

document.body.appendChild(container);

fork();
