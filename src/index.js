import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { Project, addToLibrary, projectLibrary } from './Functions/Project';
import createProject from './views/createProject'

const appendToPage = () => {
    const content = document.createElement('div');

    content.appendChild(createProject());

    return content;

};

window.onload = () => {
    document.body.appendChild(appendToPage());

    // Create new task fields
    const addTaskBtn = document.getElementById('add-task');
    let taskItems = document.getElementById('taskItems');
    let taskId = 0;
    addTaskBtn.addEventListener('click', (event) => {
        let wrap = document.createElement('div');
        wrap.innerHTML = `
            <div id="taskItem" data-id="id-${taskId++}" class="task-wrap">
                <div class="task-name-wrap">
                    <label for="taskname">Add Task Name:</label>
                    <input type="text" id="taskname" name="taskname">
                </div>
            </div>
        `;
        taskItems.appendChild(wrap);
    });

    // Create New Project
    const createProjectBtn = document.getElementById('create-project');

    createProjectBtn.addEventListener('click', event => {
        let projectTitle = document.getElementById('pjtitle').value;

        let taskNameArr = [];

        // Get task Names
        let taskNames = document.querySelectorAll("#taskname");
        taskNames.forEach((taskname) => {
            taskNameArr.push({
                name: taskname.value,
                status: false,
            });
        });

        addToLibrary(new Project(projectTitle, taskNameArr));

        console.log(projectLibrary);
    });
};

const project1 = new Project('TÖIHIN!', 
{
    name: 'Töihin',
    status: false
},
{
    name: 'Nukkumaan',
    status: true
},
);

addToLibrary(project1);