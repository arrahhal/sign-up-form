const form = document.getElementById('sign-up-form');
const passwordInputs = document.querySelectorAll(
  '.form__input[type="password"]'
);
const passwordInput = document.getElementById('password');
const passDiv = document.getElementById('not-match');
const passwordPatternMismatch = document.getElementById(
  'password-pattern-mismatch'
);
const passwordLengthTooShort = document.getElementById(
  'password-length-tooshort'
);
const passwordConfirmMismatch = document.getElementById(
  'password-confirm-mismatch'
);
const submitButton = document.getElementById('form__submit-button');
const emailInput = document.getElementById('email');
const emailInvalidMes = document.getElementById('email-invalid');
const firstNameInput = document.getElementById('first-name');
const firstNameInvalidMes = document.getElementById('first-name-invalid');

function checkPasswordValidity() {
  let isPasswordValid = true;

  if (passwordInputs[0].value !== passwordInputs[1].value) {
    isPasswordValid = false;
    passwordConfirmMismatch.classList.add('is-visible');
  } else passwordConfirmMismatch.classList.remove('is-visible');

  if (passwordInput.validity.patternMismatch) {
    isPasswordValid = false;
    passwordPatternMismatch.classList.add('is-visible');
  } else passwordPatternMismatch.classList.remove('is-visible');

  if (passwordInput.validity.tooShort || passwordInput.validity.valueMissing) {
    passwordLengthTooShort.classList.add('is-visible');
    isPasswordValid = false;
  } else passwordLengthTooShort.classList.remove('is-visible');

  if (!isPasswordValid) setInvalid(...passwordInputs);
  else setValid(...passwordInputs);
}

function setInvalid(...inputs) {
  inputs.forEach((input) => {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
  });
}

function setValid(...inputs) {
  inputs.forEach((input) => {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  });
}

function checkPasswordValidation() {
  if (email.validity.typeMismatch || emailInput.validity.valueMissing) {
    setInvalid(email);
    emailInvalidMes.classList.add('is-visible');
  } else {
    setValid(email);
    emailInvalidMes.classList.remove('is-visible');
  }
}

function checkFirstNameValidation() {
  if (firstNameInput.validity.valueMissing) {
    setInvalid(firstNameInput);
    firstNameInvalidMes.classList.add('is-visible');
  } else {
    setValid(firstNameInput);
    firstNameInvalidMes.classList.remove('is-visible');
  }
}

submitButton.addEventListener('click', (e) => {
  if (!form.checkValidity()) e.preventDefault();
});

passwordInputs.forEach((pass) =>
  pass.addEventListener('input', checkPasswordValidity)
);

emailInput.addEventListener('input', checkPasswordValidation);

firstNameInput.addEventListener('input', checkFirstNameValidation);
