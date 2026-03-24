const num = document.querySelector('button');
const display = document.querySelector('#display');
// console.log(num);

num.addEventListener('click', getValue);

function getValue(e){
    // console.log(e.target.value);
    const val = e.target.value;
    display.appendChild(val);
}