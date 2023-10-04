import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

window.handleSubmit = handleSubmit;

const bmiStatus = {
  underweight: {
    style: 'border border-warning bg-warning text-white',
    name: 'Abaixo do Peso',
  },
  normalWeight: {
    style: 'border border-success bg-success text-white',
    name: 'Peso Normal',
  },
  overweight1: {
    style: 'border border-warning bg-warning text-white',
    name: 'Marginalmente Acima do Peso',
  },
  overweight2: {
    style: 'border border-warning bg-warning text-white',
    name: 'Acima do Peso Ideal',
  },
  obesity: {
    style: 'border border-danger bg-danger text-white',
    name: 'Obeso',
  },
};

function handleSubmit(event) {
  event.preventDefault();

  const weight = document.querySelector('#weight').value;

  const height = document.querySelector('#height').value;

  const sex = document.querySelector('input:checked').value;

  const status = calcBMIStatus(weight, height, sex);

  const statusInput = document.querySelector('#status');

  statusInput.value = bmiStatus[status].name;

  statusInput.className = `form-control ${bmiStatus[status].style}`;
}

function calcBMIStatus(weight, height, sex) {
  const bmi = weight / height ** 2;

  if (sex === 'F') {
    if ((bmi < 19, 1)) return 'underweight';
    else if (bmi < 25.8) return 'normalWeight';
    else if (bmi < 27.3) return 'overweight1';
    else if (bmi < 32.3) return 'overweight2';
    else if (bmi < 32.3) return 'obesity';
  } else {
    if (bmi < 20.7) return 'underweight';
    else if (bmi < 26.4) return 'normalWeight';
    else if (bmi < 27.8) return 'overweight1';
    else if (bmi < 31.1) return 'overweight2';
    else if (bmi < 31.1) return 'obesity';
  }
}
