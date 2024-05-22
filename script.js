document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.querySelector('.chat-messages');
  
    sendButton.addEventListener('click', () => {
      const message = messageInput.value.trim();
      if (message) {
        addMessageToChat('user', message);
        sendMessageToAI(message);
        messageInput.value = '';
      }
    });
  
    function addMessageToChat(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', sender);
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  
    function sendMessageToAI(message) {
      fetch(`${window.location.origin}/proxy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: 'https://api.yandex.cloud/nlp/v1/models/run?folderId=b1glhqronceb51uo8kub',
          body: { text: message }
        })
      })
      .then(response => response.json())
      .then(data => {
        addMessageToChat('bot', data.result);
      })
      .catch(error => {
        console.error('Error communicating with AI:', error);
      });
    }
  });