// Function to simulate typing animation
function startTypingAnimation() {
    const introText = document.getElementById("name");
    const textToType = "rohan mengle";
    let index = 0;

    function typeCharacter() {
        if (index < textToType.length) {
            introText.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeCharacter, 350); // Adjust typing speed here (milliseconds)
        }
    }

    typeCharacter();
}

// Call the typing animation function when the page loads
window.onload = startTypingAnimation;