const dayDataValue = document.querySelector('[data-value = "days"]');
const hoursDataValue = document.querySelector('[data-value = "hours"]');
const minsDataValue = document.querySelector('[data-value = "mins"]');
const secsDataValue = document.querySelector('[data-value = "secs"]');

class CountdownTimer{
  constructor({selector, targetDate} ) {
    this.selector = selector;
    this.targetDate = targetDate;
  };

  isTimerInterval = setInterval(() => {
    const time = countTimer.targetDate - new Date();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    dayDataValue.textContent = days;
    hoursDataValue.textContent = hours;
    minsDataValue.textContent = mins;
    secsDataValue.textContent = secs;
  }, 1000);
};

const countTimer = new CountdownTimer(  
  {selector: '#timer-1',
    targetDate: new Date('Jan 01, 2023'),
  });

  


countTimer.isTimerInterval;