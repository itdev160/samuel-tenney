//Variables
var messages = [];

//Seed Data
var data = [
    {
        type: 'messageType.out',
        user: 'Jon',
        message: 'wawaweewah'
    },
    {
        type: 'messageType.out',
        user: 'Kaleb',
        message: 'Can you repeat that please?',
    },
    {
        type: 'messageType.out',
        user: 'Jon',
        message: 'Dont tell me what to do',
    }
];

//Message Constructor
 function Message(type, user, message) {
     this.type = type;
     this.user = user;
     this.message = message;
 }

//create and return element
function createMessageElement(message) {
    //creates message text element
    var messageText = document.createTextNode(
        message.user + ': ' +message.message
    );


//creates element and adds message text
var messageEl = document.createElement('div');
messageEl.appendChild(messageText);

//Adds class using message type
messageEl.className = message.type;

return messageEl;
}


//Button Click Event Handler
function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    // Determine message type and set message variables
    switch (event.target.id) {
        case 'send-button':
            user = 'Jon';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Kaleb';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    //create new message
    if (messageInput.value != '') {
        //construct message and add to array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //create message element
        var el = createMessageElement(message);

        //add message element to DOM
        messagesContainerEl.appendChild(el);

        //reset input

        messageInput.value = '';
    }
}

//Load seed data from array
function loadSeedData(){
    for (var i=0; i< data.length; i++) {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    //Load view
    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);
    }
}

var init = function() {
    //wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();
};

init();
