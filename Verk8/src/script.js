document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameField = form.querySelector("input[type='text']");
  const emailField = form.querySelector("input[type='email']");
  const departmentField = form.querySelector("select");
  const messageField = form.querySelector("textarea");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset field borders
    [nameField, emailField, departmentField, messageField].forEach((field) => {
      field.classList.remove("border-red-500");
    });

    let hasError = false;

    // Name validation
    if (nameField.value.trim() === "") {
      nameField.classList.add("border-red-500");
      hasError = true;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value.trim())) {
      emailField.classList.add("border-red-500");
      hasError = true;
    }

    // Department selection
    if (departmentField.value === "") {
      departmentField.classList.add("border-red-500");
      hasError = true;
    }

    // Message
    if (messageField.value.trim() === "") {
      messageField.classList.add("border-red-500");
      hasError = true;
    }

    // Show success if no errors
    if (!hasError) {
      form.reset();

      // Show and animate success message
      successMsg.classList.remove("hidden", "opacity-0");
      successMsg.classList.add("opacity-100");

      // Hide it after 4s
      setTimeout(() => {
        successMsg.classList.remove("opacity-100");
        successMsg.classList.add("opacity-0");
        setTimeout(() => {
          successMsg.classList.add("hidden");
        }, 300); // After fade-out
      }, 4000);
    }
  });
});
