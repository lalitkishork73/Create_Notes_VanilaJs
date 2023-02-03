const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));

/* console.log('working    on another version');

let element = document.createElement('li');
let text=document.createTextNode('i am groot');
element.appendChild(text);


element.className = 'list';
element.id = 'listid';
element.setAttribute('title', 'mytitle');
element.innerHTML='<b> hello';

let ul= document.querySelector('ul.ulist');
ul.appendChild(element);
console.log(ul);
console.log(element);

let elem=document.createElement('h3');
elem.id='hid';
elem.className='hclass';
let tnode=document.createTextNode('hello world it was good experience');
elem.appendChild(tnode);

element.replaceWith(elem);
let mula=document.getElementById('hid');
// mula.removeChild(document.getElementById(''));

let pr=elem.removeAttribute('class')
elem.removeAttribute('id')
console.log(elem, pr)


 */