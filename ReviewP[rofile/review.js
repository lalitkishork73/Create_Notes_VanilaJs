const reviews = [
    {
        id: 1,
        name: "Milan misoo",
        job: "software developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "hey, there i m milan misoo co-founder and worker at jismon corprations. i have 8 years of experice in this field so we have to find out the way.",
    },
    {
        id: 2,
        name: " Bad bunny",
        job: "software developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "hey, there i m milan misoo co-founder and worker at jismon corprations. i have 8 years of experice in this field so we have to find out the way.",
    },
    {
        id: 3,
        name: "Alex killer",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "hey, there i m milan misoo co-founder and worker at jismon corprations. i have 8 years of experice in this field so we have to find out the way.",
    },
    {
        id: 4,
        name: "Natti natasha",
        job: "software developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "hey, there i m milan misoo co-founder and worker at jismon corprations. i have 8 years of experice in this field so we have to find out the way.",
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;
window.addEventListener("DOMContentLoaded", () => {
   
    showPerson(currentItem);
});
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
nextBtn.addEventListener('click',()=>{
    currentItem++;
    if(currentItem>reviews.length-1)
    {
        currentItem=0;
    }
    showPerson(currentItem);
});
prevBtn.addEventListener('click',()=>{
    currentItem--;
    if(currentItem<0)
    {
        currentItem=reviews.length-1;

    }
    showPerson(currentItem);
});
randomBtn.addEventListener('click',()=>{
    currentItem=RandomNumber();
    showPerson(currentItem);
})

const RandomNumber = () => {
    return Math.floor(Math.random() * reviews.length);
} 