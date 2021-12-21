const firstOperand = document.querySelector('#input-1');
const secondOperand = document.querySelector('#input-2');
const operator = document.querySelector('#select');
const submit = document.querySelector('#submit');
const result = document.querySelector('#result');

submit.addEventListener('click', calculate);

function calculate(event) {
  event.preventDefault();
  let calcResult;
  switch (operator.value) {
    case '+':
      calcResult = +firstOperand.value + +secondOperand.value;
      break;
    case '-':
      calcResult = +firstOperand.value - +secondOperand.value;
      break;
    case '*':
      calcResult = +firstOperand.value * +secondOperand.value;
      break;
    case '/':
      calcResult = +firstOperand.value / +secondOperand.value;
      break;
    case '':
      calcResult = null;
      break;
  }

  if (calcResult) {
    result.innerHTML = Math.trunc(calcResult);
  } else {
    result.innerHTML = 'Please, complete all fields!';
  }

  firstOperand.value = '';
  secondOperand.value = '';
  operator.value = '';
}
