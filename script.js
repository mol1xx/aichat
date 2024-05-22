function sendMessageToAI(message) {
  fetch('http://mol1xx.beget.tech:3000/proxy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: 'https://api.aicloud.sbercloud.ru/public/v2/boltalka/predict',
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
