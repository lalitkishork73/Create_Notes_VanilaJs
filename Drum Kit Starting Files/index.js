const btn = document.querySelectorAll(".drum");
const btns = document.querySelectorAll(".drum").length;

for (let i = 0; i < btns; i++) {
    console.log(i);
    btn[i].addEventListener("click", function () {
        const key = this.innerHTML;
        tune(key);
        animation(key);
        console.log(i);

    })

}
document.addEventListener("keypress", function (event) {
    tune(event.key);
    animation(event.key);
});

function tune(key) {
    switch (key) {
        case 'w':
            const sound1 = new Audio("sounds/tom-1.mp3");
            sound1.play();
            break;
        case 'a':
            const sound2 = new Audio("sounds/tom-2.mp3");
            sound2.play();
            break;
        case 's':
            const sound3 = new Audio("sounds/tom-3.mp3");
            sound3.play();
            break;
        case 'd':
            const sound4 = new Audio("sounds/tom-4.mp3");
            sound4.play();
            break;
        case 'j':
            const sound5 = new Audio("sounds/snare.mp3");
            sound5.play();
            break;
        case 'k':
            const sound6 = new Audio("sounds/crash.mp3");
            sound6.play();
            break;
        case 'l':
            const sound7 = new Audio("sounds/kick-bass.mp3");
            sound7.play();
            break;

        default:
            break;
    }
}
function animation(key) {
    const press = document.querySelector("." + key);
    press.classList.add("pressed");
    setTimeout(() => {
        press.classList.remove("pressed");

    }, 100);
}