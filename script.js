//your JS code here. If required.
const inputCode = document.querySelectorAll(".code");

inputCode.forEach((input, index) => {
    input.setAttribute("maxlength", "1"); // Allow only one character

    // Typing Forward
    input.addEventListener("input", (e) => {
        const value = e.target.value;

        if (value && index < inputCode.length - 1) {
            inputCode[index + 1].focus(); // Move to next input
        }
    });

    // Backspace Behavior
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            input.value = ""; // Clear current input

            if (index > 0) {
                inputCode[index - 1].focus(); // Move to previous input
            }
            e.preventDefault();
        } else if (e.key === "ArrowLeft" && index > 0) {
            inputCode[index - 1].focus(); // Move left
        } else if (e.key === "ArrowRight" && index < inputCode.length - 1) {
            inputCode[index + 1].focus(); // Move right
        }
    });
});
