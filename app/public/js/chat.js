var socket = io();

var chatUsername = document.querySelector('#chat-username');
var chatMessage = document.querySelector('#chat-message');


socket.on('connect', function(){
  var chatForm = document.forms.chatForm;

  if (chatForm) {

    chatForm.addEventListener('submit', function(e){
      e.preventDefault();

      // show the message in the panel
      // pass form submitted data to the method
      socket.emit('postMessage',{
        username: chatUsername.value,
        chatMessage: chatMessage.value
      });

      // clear and focus on the Message form field
      chatMessage.value = '';
      chatMessage.focus();
    });

    socket.on('updateMessages', function(data){
      showMessage(data);
    });
  }
});

// create the showMessage method
function showMessage(data){
  console.log(data);
  var chatDisplay = document.querySelector('.chat-display');
  var newMessage = document.createElement('p');
  if (chatUsername.value == data.username) {
    newMessage.className = 'bg-success chat-text';
  } else {
    newMessage.className = 'bg-info text-warning chat-text';
  }
  newMessage.innerHTML = '<strong>' + data.username + '</strong>' + data.chatMessage;
  chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}
