import { addNumber, setMathType } from '../components/calculator.js';

const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');
const divideButton = document.getElementById('divide');

const addNumberCaller = (e) => {
  addNumber(e.target.value);
};

const sevenButtonEvent = () => {
  sevenButton.addEventListener('click', addNumberCaller);
};

const eightButtonEvent = () => {
  eightButton.addEventListener('click', addNumberCaller);
};

const nineButtonEvent = () => {
  nineButton.addEventListener('click', addNumberCaller);
};

const divideButtonEvent = () => {
  divideButton.addEventListener('click', () => {
    setMathType('divide');
  });
};

const attachEvents = () => {
  sevenButtonEvent();
  eightButtonEvent();
  nineButtonEvent();
  divideButtonEvent();
};

export default attachEvents;
