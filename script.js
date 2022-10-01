const colors = ['green', 'black', 'yellow', 'rgba(133,122,200)', '#f15025'];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    let hexcolor = '#';
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[RandomNumber()];
        console.log(hex[RandomNumber()]);

    }
    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
});

const RandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
} 