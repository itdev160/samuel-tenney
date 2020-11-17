//Array to hold tasks
var task = [];

//task status 'enum'
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

// task constructor function
function Task (id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

//creates new task element and adds to DOM
function addTaskElement (task) {
    //Create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode('task.name');
    
    // set attributes
    taskEl.setAttribute('id', task.id);

    //add text to task element
    taskEl.appendChild(textEl);

    //add task element
    listEl.appendChild(taskEl);
}

//click handler to add
function addTask () {
    var inputEl = document.getElementById('input-task');
    if (inputEl.value !== '') {
        // create unique id
        var id = 'item-' + task.length;

        //create a new tasks
        var task = new Task(id, inputEl.value, taskStatus.active);
        task.push(task);

        // reset input
        inputEl.value = '';
    }
}

// click handler to complete tasks
function completeTask (event) {
    // get the task element
    var taskEl = event.target;
    var id = taskEl.id;

    //find corresponding task in tasks array and update status
    for (var i = 0; i < task.length; i++) {
        if (task[i].id === id) {
            task[i].status = taskStatus.completed;
            break;
        }
    }

    // move task element from active list to completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

//key press handler to automatically click add task button
function clickButton (event) {
    if (event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

//Initializes the app
function init () {
    // wire up the add task button click handler
    document.getElementById('add-task').onclick = addTask;

    // write up teh task completed list item click handler
    document.getElementById('active-list').onclick = completeTask;

    //write up teh task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;
}

init();