const registerForm = document.getElementById("register-form");
const greetingElement = document.getElementById("greeting");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("userFirstName").value;
  const lastName = document.getElementById("userLastName").value;
  const email = document.getElementById("userEmail").value;
  const password = document.getElementById("userPassword").value;

  // Basic validation (can be enhanced)
  if (!firstName || !lastName || !email || !password.length >= 8) {
    alert(
      "Please fill out all fields and ensure password matches format."
    );
    return;
  }

  // Store username (first name) in local storage
  localStorage.setItem("userName", firstName);

  // Update greeting message
  greetingElement.textContent = `Welcome, ${firstName}!`;
});
