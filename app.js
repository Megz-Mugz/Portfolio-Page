function startTypingAnimation() {
    const introText = document.getElementById("name");
    const textToType = "rohan mengle";
    let index = 0;

    function typeCharacter() {
        if (index < textToType.length) {
            introText.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeCharacter, 350);
        }
    }

    typeCharacter();
}

window.onload = startTypingAnimation;