let time = document.getElementById("timer");
let display = document.getElementById("quotedisplay");
let input = document.getElementById("quoteinput");
let correct = true;
input.addEventListener("input", function () {
    const array = display.querySelectorAll("span");
    const arrayValue = input.value.split('');
    array.forEach((characterSpan, index) => {
        const character = arrayValue[index];
        if (character == null) {
            characterSpan.classList.remove("correct");
            characterSpan.classList.remove("incorrect");
            correct = false;
        }
        else if (character === characterSpan.innerText) {
            characterSpan.classList.add("correct");
            characterSpan.classList.remove("incorrect");
            
        }
        else {
            characterSpan.classList.add("incorrect");
            characterSpan.classList.remove("correct");
            correct = false;
        }

    })
    if (correct) { getRandomQuotes(); }

})
const Random_Qutes_API_URL = 'http://api.quotable.io/random';

function getRandomQuotes() {
    return fetch(Random_Qutes_API_URL).then(response => response.json()).then(data => data.content);

}
async function getNextQuotes() {
    const Quote = await getRandomQuotes();
    display.innerHTML = '';
    Quote.split('').forEach(character => {
        const characterSpan = document.createElement("span");
        characterSpan.innerText = character;
        display.appendChild(characterSpan);

    });
    input.value = null;
    startTimer();
}
let startTime;
function startTimer() {
    time.innerText = 0;
    startTime = new Date();
    setInterval(() => {
        time.innerText = getTimerTime();
    }, 1000)
}
function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000);
}
getNextQuotes();

