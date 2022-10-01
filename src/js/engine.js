/* class calculator{
    constructor(params) {
        
    }
} */
const remove = document.querySelector(".remove");
const screen = document.getElementById("screen");
const nums = document.querySelectorAll("button");
let screenValue = '';
console.log(screen);

for (items of nums) {
    items.addEventListener("click", (e) => {
        num = e.target.innerText;
        console.log(num);
        if (num == 'X') {
            num = "*";
            screenValue += num;
            screen.value = screenValue;
        }
        else if(num=='C'){
            screenValue="";
            screen.value=screenValue;
        }
        else if(num=='CE'){
            screenValue="";
            screen.value=screenValue;
        }
        else if(num=='x2'){
            num=screen.value;
            num=Math.pow(num,2);
            screenValue=num;
            screen.value=screenValue;

        }
        else if (num == '=') {
            screen.value = eval(screenValue);
        }
        else if(num=='←'){
            backspace = screen.value;
            restNum = backspace.slice(0, -1);
            screenValue = restNum;
            screen.value = screenValue;
        }
        else if (num =="√x")
        {
            num=screen.value;
            screenValue=Math.sqrt(num);
            screen.value=screenValue;
        }
        else if (num =="±")
        {
            num=screen.value;
            if(num==-num){
                screenValue=+num;
                screen.value=screenValue;
            }
            else{
                screenValue=-num;
                screen.value=screenValue;
            }

        }
        else{
            screenValue+=num;
            screen.value=screenValue;
        }

    })
}
