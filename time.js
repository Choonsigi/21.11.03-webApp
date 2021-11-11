const clock = document.querySelector('#Time');
const time = new Date();
const hour = String(time.getHours()).padStart(2,'0');
const minute = String(time.getMinutes()).padStart(2,'0');
const userInput = document.querySelector('input#main');
const Info = localStorage.getItem('username');

timeIf();
Clock();
setInterval(Clock,1000);

function timeIf() {
    if(hour < 12) {
        hello.innerText = `good morning, ${Info}`;
    } else if(hour >= 12 && hour < 18) {
        hello.innerText = `good afternoon, ${Info}`;
    }
    else {
        hello.innerText = `good evening, ${Info}`;
    }
}

function Clock() {
    // const second = String(time.getSeconds()).padStart(2, '0');

    clock.innerText = `${hour}:${minute}`;
}