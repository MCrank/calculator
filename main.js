const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

const multiply = (n1, n2) => {
  return n1 * n2;
};

const calculate = (num1, num2, mathType) => {
  let answer = 0;
  switch (mathType) {
    case 'multiply':
      answer = multiply(num1, num2);
      break;
    case 'divide':
      answer = num1 / num2;
      break;
    case 'add':
      answer = num1 + num2;
      break;
    case 'subtract':
      answer = num1 - num2;
      break;
    default:
      answer = 'nope';
      break;
  }
  printToDom(answer, 'result');
};

calculate(4, 2, 'multiply');
