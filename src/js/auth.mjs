/* LOGIN Page, Get username from local storage */
export function loginUser() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      // Validate login credentials
      const valid = await validateLogin(event.target.elements);
      if (valid) {
        const username = document.getElementById("userName").value;
        localStorage.setItem("userName", username); // store username in local storage
        updateGreeting(username); // update greeting message
      }
    });
  }
  
  /* Registration page */
  export function registerUser() {
    const registerForm = document.getElementById("registerUser");
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      // Validate registration data
      const valid = await validateRegistration(event.target.elements);
      if (valid) {
        const firstName = document.getElementById("userFirstName").value;
        localStorage.setItem("userName", firstName); // store username in local storage
        updateGreeting(firstName); // update greeting message
      }
    });
  }
  
  //async function validateLogin() {
  async function validateLogin(elements) {
    const username = elements.userName.value;
    const password = elements.userPassword.value;
  
    let valid = true;
  
    // Check fields aren't empty
    if (username.length === 0 || password.length === 0) {
      valid = false;
    } else {
      document.getElementById("form-contain").style.display = "none";
      document.getElementById("message").style.display = "inline-block";
      return valid;
    }
  }
  
  //async function validateRegistration() {
  async function validateRegistration(elements) {
    const firstName = elements.userFirstName.value;
    const lastName = elements.userLastName.value;
    const email = elements.userEmail.value;
    const password = elements.userPassword.value;
  
    let valid = true;
  
    // Check fields aren't empty
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      !email.includes("@") ||
      password.length === 0
    ) {
      valid = false;
    } else {
      document.getElementById("form-contain").style.display = "none";
      document.getElementById("message").style.display = "inline-block";
      return valid;
    }
  }
  
  export function updateGreeting(username) {
    const navElement = document.querySelector("[id='nav-p']");
    navElement.textContent = `I choose you, ${username}!`;
  }
  