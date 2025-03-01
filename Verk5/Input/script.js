document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading immediately

        // Create the popup div
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML = `
            <p>Complaint received</p>
            <p class="hidden-text">and promptly deleted</p>
        `;

        document.body.appendChild(popup); // Add popup to the page

        // Auto-hide popup after 3 seconds
        setTimeout(() => {
            popup.remove();
        }, 3000);

        // Optional: Reset the form
        form.reset();
    });
});
