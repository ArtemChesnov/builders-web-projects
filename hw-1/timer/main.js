import timer from './timer.js';
import { printError } from './printTimer.js';

const form = document.getElementById('timer');

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target).get('date');
  const date = new Date(formData).getTime();

  if (!date) {
    printError('You have not selected a due date!');
  } else {
    timer(date);
  }
};
