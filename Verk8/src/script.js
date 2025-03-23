


































//Fyrir button.html verkefnið
/*document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("counter");
    const messageElement = document.getElementById("message");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
    const stepInput = document.getElementById("step");
    const limitInput = document.getElementById("limit");

    let step = localStorage.getItem("step") ? parseInt(localStorage.getItem("step")) : 5;
    let limit = localStorage.getItem("limit") ? parseInt(localStorage.getItem("limit")) : 35;
    let counter = 0;

    // Update input fields with stored values
    stepInput.value = step;
    limitInput.value = limit;

    function toAlternatingCase(text) {
        return text
            .split("")
            .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
            .join("");
    }

    function updateCounter(value) {
        counter = value;
        counterElement.textContent = counter;

        if (counter > limit || counter < -limit) {
            messageElement.style.display = "block"; // Show "BOOM"
        } else {
            messageElement.style.display = "none"; // Hide "BOOM" if within limits
        }
    }

    incrementButton.addEventListener("click", function () {
        updateCounter(counter + step);
    });

    decrementButton.addEventListener("click", function () {
        updateCounter(counter - step);
    });

    // Live update step and limit when user changes inputs
    stepInput.addEventListener("input", function () {
        step = parseInt(stepInput.value) || 5;
        localStorage.setItem("step", step);
    });

    limitInput.addEventListener("input", function () {
        limit = parseInt(limitInput.value) || 35;
        localStorage.setItem("limit", limit);

        // Immediately check if we should display BOOM
        updateCounter(counter);
    });

    updateCounter(0);
});*/
