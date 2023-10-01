import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

window.handleSubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();

  const weight = document.querySelector('#weight').value;

  const height = document.querySelector('#height').value;

  const sex = document.querySelector('input:checked').value;

  const status = imc(weight, height, sex);

  document.querySelector('#status').value = status;
}

function imc(weight, height, sex) {
  const result = weight / height ** 2;

  return 'normal';
}
