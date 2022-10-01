const counter = document.querySelector('#counter');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        if (styles.contains('pre')) {
            count--;
        }
        else if (styles.contains('reset')) {
            count = 0;
        }
        else if (styles.contains('next')) {
            count++;
        }

        if(count>0)
        {
            counter.style.color='green';
        }
        if(count<0)
        {
            counter.style.color='red';
        }
        if(count==0)
        {
            counter.style.color='black';

        }
        counter.textContent = count;
    })

})

