document.addEventListener('DOMContentLoaded', function() {
    const chatBody = document.getElementById('chatBody');
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');

    // Function to add a message to the chat window
    function addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(type);

        const messageText = document.createElement('p');
        messageText.textContent = content;
        messageDiv.appendChild(messageText);

        const messageTime = document.createElement('span');
        messageTime.classList.add('message-time');
        const time = new Date();
        messageTime.textContent = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        messageDiv.appendChild(messageTime);

        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
    }

    // Event listener for the Send button
    sendMessageBtn.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message, 'sent');
            messageInput.value = '';
            simulateReceivedMessage(); // Simulate a received message
        }
    });

    // Function to simulate receiving a message
    function simulateReceivedMessage() {
        setTimeout(function() {
            const responses = [
                "How's it going?",
                "That's great!",
                "Interesting!",
                "Tell me more...",
                "Okay, got it.",
                "I'll get back to you on that.",
                "Thanks for the update!"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, 'received');
        }, 1000);
    }

    // Event listener for Enter key to send message
    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessageBtn.click();
        }
    });
});
