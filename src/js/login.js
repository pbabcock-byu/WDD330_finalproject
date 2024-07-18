import { loadHeaderFooter } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", function () {
  // Load header and footer
  loadHeaderFooter();
});

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("userName").value;
  localStorage.setItem("userName", username); // store username in local storage
  updateGreeting(username); // update greeting message
  // After successful login, redirect with message:
  //window.location.href = "./index.html?message=Sign in successful!";
});

export function updateGreeting(username) {
  const greetingElement = document.getElementById("nav-p");
  greetingElement.textContent = `I choose you, ${username}!`;
}
