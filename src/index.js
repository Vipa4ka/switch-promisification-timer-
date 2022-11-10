import './css/index.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let timerId;

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const colorBody = document.querySelector('body');

btnStart.addEventListener('click', onclickStart);
btnStop.addEventListener('click', onclickStop);


// генерация случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


function onclickStart(e) {    
    onChangeColorBody()
  btnStart.disabled = true;
};

function onclickStop() {
    clearInterval(timerId)
    btnStart.disabled = false;
};


function onChangeColorBody() {
    timerId = setInterval(() => {
        colorBody.style.background = `${colors[randomIntegerFromInterval(0, 5)]}`
    }, 1000);      
};


