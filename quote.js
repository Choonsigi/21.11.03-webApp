const quo = document.querySelector('#quotes');
const quote = [
    {quotes:"오늘도 행복하자!:)"},
    {quotes:"오늘도 나는 최고야!"},
    {quotes:"주눅은 잠깐만 들어!"},
    {quotes:"3초의 여유: 락균이 생각"},
    {quotes:"기능을 추가하고 싶다면 연락해!"},
]

randomQuote();

function randomQuote() {
    const ranquote = quote[Math.floor(Math.random()*quote.length)];
    quo.innerText = ranquote.quotes;
}