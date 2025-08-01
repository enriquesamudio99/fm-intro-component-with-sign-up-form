const form = document.getElementById('form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

const initApp = () => {
  form.addEventListener("submit", handleSubmit);
}

const handleSubmit = (e) => {
  e.preventDefault();

  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid;

  if (!isFormValid) return;

  console.log("Form submitted");
  form.reset();
}

const validateFirstName = () => {
  const firstNameValue = firstNameInput.value;

  const firstNameParent = firstNameInput.parentElement;
  const firstNameError = firstNameParent.querySelector(".form__error");

  if (firstNameValue === "") {
    firstNameParent.classList.add("form__group--error");
    firstNameError.style.display = "block";
    firstNameError.textContent = "First Name is required";
    return false;
  }

  firstNameParent.classList.remove("form__group--error");
  firstNameError.style.display = "none";
  firstNameError.textContent = "";

  return true;
}

const validateLastName = () => {
  const lastNameValue = lastNameInput.value;

  const lastNameParent = lastNameInput.parentElement;
  const lastNameError = lastNameParent.querySelector(".form__error");

  if (lastNameValue === "") {
    lastNameParent.classList.add("form__group--error");
    lastNameError.style.display = "block";
    lastNameError.textContent = "Last Name is required";
    return false;
  }

  lastNameParent.classList.remove("form__group--error");
  lastNameError.style.display = "none";
  lastNameError.textContent = "";

  return true;
}

const validateEmail = () => {
  const emailValue = email.value;

  const emailParent = email.parentElement;
  const emailError = emailParent.querySelector(".form__error");

  if (emailValue === "") {
    emailParent.classList.add("form__group--error");
    emailError.style.display = "block";
    emailError.textContent = "Email is required";
    return false;
  }

  if (!validEmail(emailValue)) {
    emailParent.classList.add("form__group--error");
    emailError.style.display = "block";
    emailError.textContent = "Email is invalid";
    return false;
  }

  emailParent.classList.remove("form__group--error");
  emailError.style.display = "none";
  emailError.textContent = "";

  return true;
}

const validatePassword = () => {
  const passwordValue = password.value;

  const passwordParent = password.parentElement;
  const passwordError = passwordParent.querySelector(".form__error");

  if (passwordValue === "") {
    passwordParent.classList.add("form__group--error");
    passwordError.style.display = "block";
    passwordError.textContent = "Password is required";
    return false;
  }

  passwordParent.classList.remove("form__group--error");
  passwordError.style.display = "none";
  passwordError.textContent = "";

  return true;
}

const validEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}