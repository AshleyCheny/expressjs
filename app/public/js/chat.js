
  var chatForm = document.forms.chatForm;

  if (chatForm) {
    var chatUsername = document.querySelector('#chat-username');
    var chatMessage = document.querySelector('#chat-message');

    chatForm.addEventListener('submit', function(e){
      e.preventDefault();

      // show the message in the panel
      // pass form submitted data to the method
      showMessage({
        username: chatUsername.value,
        chatMessage: chatMessage.value
      });

      // clear and focus on the Message form field
      chatMessage.value = '';
      chatMessage.focus();
    });
  }

  // create the showMessage method
  function showMessage(data){
    console.log(data);
    var chatDisplay = document.querySelector('.chat-display');
    var newMessage = document.createElement('p');
    newMessage.className = 'bg-success chat-text';
    newMessage.innerHTML = '<strong>' + data.username + '</strong>' + data.message;
    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
  }
