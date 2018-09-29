const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

// Export goes at the bottom
export { printToDom };
