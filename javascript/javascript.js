function validateForm(event) {
  event.preventDefault(); // Prevent form submission for testing
  let isValid = true;

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Clear previous errors
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";

  // Regular expressions
  const namePattern = /^[a-zA-Z\s]{3,30}$/; // Letters only, 3-30 chars
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 chars, 1 letter, 1 number

  // Validate Name
  if (!namePattern.test(name)) {
      document.getElementById("nameError").innerHTML =
          "Name must be 3-30 characters and letters only.";
      isValid = false;
  }

  // Validate Email
  if (!emailPattern.test(email)) {
      document.getElementById("emailError").innerHTML =
          "Please enter a valid email address.";
      isValid = false;
  }

  // Validate Password
  if (!passwordPattern.test(password)) {
      document.getElementById("passwordError").innerHTML =
          "Password must be at least 6 characters, with at least one letter and one number.";
      isValid = false;
  }

  // Submit form if valid
  if (isValid) {
      alert("Form submitted successfully!");
      document.getElementById("validationForm").submit();
  }
}