// Selectors //
const greet = document.querySelector('form#inputSection');
const head = document.querySelector('header#header');
const mainInput = document.querySelector('input#main');
const tictok = document.querySelector('#tictok');
const hello = document.querySelector('#hello');
const todoWrite = document.querySelector('#todoWrite');


//Event Listeners

// Remove Hide class name
if(localStorage.key('username') === null) {
    greet.addEventListener('submit', RemoveHide);
}
else {
    greet.classList.add('hide');
    head.classList.remove('hide');
    tictok.classList.remove('hide');
    hello.classList.remove('hide');
    todoWrite.classList.remove('hide');
}


//Functions
function RemoveHide(event) {
    event.preventDefault();
    head.classList.remove('hide');
    const userInfo = mainInput.value;
    localStorage.setItem('username', userInfo);
    greet.classList.add('hide');
    tictok.classList.remove('hide');
    hello.classList.remove('hide');
    todoWrite.classList.remove('hide');
    timeIf();
}