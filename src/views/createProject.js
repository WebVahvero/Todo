export default function createProject() {
    const form = document.createElement('form');

    form.innerHTML = `
        <div class="project-title-wrap"> 
            <label for="pjtitle">Add Title:</label>
            <input type="text" id="pjtitle" name="pjtitle">
        </div>
        <div id="taskItems">
        </div>
        <button id="add-task">Add Task</button>
        <button id="create-project">Create Project</button>
    `;

    form.addEventListener('click', (event) => {
        event.preventDefault();
    })

    return form;
};