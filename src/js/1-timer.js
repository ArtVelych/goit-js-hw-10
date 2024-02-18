import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const input = document.querySelector('#datetime-picker');
const button = document.querySelector('[data-start]');
const day = document.querySelector('.value[ data-days]');
const hour = document.querySelector('.value[ data-hours]');
const minute = document.querySelector('.value[ data-minutes]');
const second = document.querySelector('.value[ data-seconds]');

let userSelectedDate;
let timerInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  dateFormat: 'Y-m-d H:i',
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

  if (userSelectedDate < new Date()) {
      iziToast.error({
        message: 'Please choose a date in the future',
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
      });
    
    clearInterval(timerInterval);
    timerInterval = null;
    button.disabled = true;
    button.style.backgroundColor = '#cfcfcf';
    button.style.color = '#989898';
    
  } else {
    button.disabled = false;
    button.style.background = 'blue';
    button.style.color = 'white';
  }
  },
};

flatpickr(input, options);

button.disabled = true;

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function startTimer() {
  button.disabled = true;
  button.style.backgroundColor = '#cfcfcf';
  button.style.color = '#989898';
  timerInterval = setInterval(() => {
    const current = Date.now();
    const difference = userSelectedDate - current;

    if (difference <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      displayTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      iziToast.success({
        message: 'The countdown has reached zero.',
        messageColor: 'white',
        backgroundColor: '#59a10d',
        position: 'topRight',
      });
      button.disabled = true;
      input.disabled = false;
      button.style.backgroundColor = '#cfcfcf';
      button.style.color = '#989898';
    } else {
      const timeObject = convertMs(difference);
      displayTime(timeObject);
    }
  }, 1000);
}

function displayTime({ days, hours, minutes, seconds }) {
  day.textContent = addLeadingZero(days);
  hour.textContent = addLeadingZero(hours);
  minute.textContent = addLeadingZero(minutes);
  second.textContent = addLeadingZero(seconds);
}

button.addEventListener('click', () => {
  button.disabled = true;
  input.disabled = true;
  startTimer();
});