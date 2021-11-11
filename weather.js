

//arrow function 공부 요망

// const sucessCallback = (position) => {
//     console.log(position);
// }
// const errorCallback = (error) => {
//     console.err(error);
// }
const weatherText = document.querySelector('.tempreture');
const API_Key = '9caf1dcc3cfea9dbb6db407fa962d875';



//좌표요청 (성공콜백, 에러콜백을 매개변수로)
navigator.geolocation.getCurrentPosition(sucess, error);


function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`)
    .then(response => response.json())
    .then(json => weatherText.innerText = Math.floor(json.main['temp']));
}

function sucess(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

function error(error) {
    console.err(error);
}