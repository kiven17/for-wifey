// Select all hearts
const hearts = document.querySelectorAll(".heart");
const messageBox = document.getElementById("message-box");
const messageText = document.getElementById("message-text");

// Add click event to each heart
hearts.forEach(heart => {
    heart.addEventListener("click", function() {
        const message = this.getAttribute("data-message");

        // Show the message box with the heart's message
        messageText.textContent = message;
        messageBox.style.display = "block";  
        setTimeout(() => {
            messageBox.style.opacity = "1";
        }, 50);
    });
});
