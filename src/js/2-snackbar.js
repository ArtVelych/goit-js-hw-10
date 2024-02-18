import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (e) {
  e.preventDefault();

  const timer = Number(document.querySelector('[name="delay"]').value);
  const state = document.querySelector('[name="state"]:checked');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state.value === 'fulfilled') {
        resolve(timer);
      } else {
        reject(timer);
      }
    }, timer);
  });

  promise
    .then(() => {
      iziToast.success({
        message: `Fulfilled promise in ${timer}ms`,
        messageColor: '#FFF',
        backgroundColor: '#59A10D',
        position: 'topRight',
      });
    })
    .catch(() => {
      iziToast.error({
        message: `Rejected promise in ${timer}ms`,
        messageColor: '#FFF',
        backgroundColor: '#EF4040',
        position: 'topRight',
      });
    });
}