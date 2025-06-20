function checkPassword() {
  const enteredPassword = document.getElementById("password-input").value;
  const correctPassword = "summers";
  
  if (enteredPassword === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("portfolio-content").style.display = "block";
  } else {
    document.getElementById("password-error").style.display = "block";
  }
}
