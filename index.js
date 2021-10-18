
// задание 1

let btn = document.querySelector('.btn_start');
let counter = document.querySelector('.counter');
let inputText = document.querySelector('.input_line');

let intr;

function x() {
  counter.textContent = inputText.value;
  clearInterval(intr);
  intr = setInterval(y, 1000);
}

function y(){
  
  if(counter.textContent != 0){
    counter.textContent--
  }  
}

btn.addEventListener('click', x) ;


// задание 2

let box = document.createElement('div');
document.body.append(box);
box.classList.add('box_heading');

let form = document.createElement('form');
box.append(form);

let inputDown = document.createElement('input');
form.append(inputDown);
inputDown.classList.add('input_down');

let heading = document.createElement('h2');
box.append(heading);
heading.classList.add('heading');

let timeout = 0;

function creatHeading () {
  heading.textContent = inputDown.value;
}

function start () {

  if(timeout) {
    clearTimeout(timeout)
    timeout = 0;
  }
  timeout = setTimeout(creatHeading, 300);  
}
inputDown.addEventListener('input', start)










// inputDown.addEventListener('input', setTimeout(() => {heading.textContent = inputDown.value;}, 2000));

