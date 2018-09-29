import { addNumber } from '../components/calculator.js';

const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');

const addNumberCaller = (e) => {
  addNumber(e.target.value);
};
const sevenButtonEvent = () => {
  sevenButton.addEventListener('click', addNumberCaller);
};

const eightButtonEvent = () => {
  eightButton.addEventListener('click', addNumberCaller);
};

const attachEvents = () => {
  sevenButtonEvent();
  eightButtonEvent();
};

export default attachEvents;
