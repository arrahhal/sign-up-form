const passwords = document.querySelectorAll('.form__input[type="password"]');
const passDiv = document.getElementById('not-match');
let passFlag = true;

passwords.forEach(pass => pass.addEventListener('keyup',checkValidation));
function checkValidation() {
  if(passwords[0].value === passwords[1].value)
    removeInvalid();
  else
    setInvalid();
}

function setInvalid() {
   passwords.forEach(pass => pass.classList.add('invalid'));
   passDiv.classList.add('not-match');
   passFlag = false;
}
function removeInvalid() {
  passwords.forEach(pass => pass.classList.remove('invalid'));
  passDiv.classList.remove('not-match');
  passFlag = true;
}

const button = document.getElementById('form__button');
button.addEventListener('click', (e)=>{
  if(!passFlag)
    e.preventDefault();
});