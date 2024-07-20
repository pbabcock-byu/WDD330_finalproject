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
      console.log("Before validation")
      const valid = await validateRegistration(event.target.elements);
      if (valid) {
        console.log("After validation (valid)", valid)
        const firstName = document.getElementById("userFirstName").value;
        localStorage.setItem("userName", firstName); // store username in local storage
        updateGreeting(firstName); // update greeting message
      }
      else {
        // Handle validation errors (display error messages)
        console.error("Registration failed due to validation errors.");
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
    localStorage.setItem("test", "value");
    localStorage.getItem("test");
  
    console.log(firstName);
    console.log(lastName);
  console.log(email);
  console.log(password);
  
    let valid = true;
    // store error messages
    let errorMessage = ""; 
  
    // Check fields aren't empty
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      !email.includes("@") ||
      password.length === 0
    ) {
      valid = false;
      errorMessage = "Please complete all fields.";
      alert(errorMessage);
    } else {
      document.getElementById("form-contain").style.display = "none";
      document.getElementById("message").style.display = "inline-block";
      return valid;
    }
  }
  
  export function updateGreeting(username) {
    const greetElement = document.querySelector("[id='greeting']");
    greetElement.textContent = `I choose you, ${username}!`;
  }
  