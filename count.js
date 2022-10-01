const btns = document.querySelectorAll(".btn");
const showCount = document.querySelector('#count');
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const tap = e.currentTarget.classList;
        let hexColor='#';
        for(let i=0;i<6;i++){
            hexColor+=hex[RandomNumber()];
        }

        if (tap.contains("prev")) {
            count--;    
            if(count<0){
            showCount.style .color="red";
            document.body.style.backgroundColor=hexColor;
        }
    }
    if (tap.contains("next")) {
        count++;    
        if(count>0){
            showCount.style .color="green";
            document.body.style.backgroundColor=hexColor;
        }
    }
    if (tap.contains("reset")) {
        count=0;    
        if(count===0){
            showCount.style .color="yellow";
            document.body.style.backgroundColor=hexColor;
            }
        }

        showCount.textContent = count;
        
    });
});

const RandomNumber=()=>{
    return Math.floor(Math.random()*hex.length);
}
