import calc from './calc.js';

const btnAdd = document.querySelector('#btnAdd');
const btnSubstract = document.querySelector('#btnSubstract');
const btnMultiply = document.querySelector('#btnMultiply');
const btnDivide = document.querySelector('#btnDivide');
const txtA = document.querySelector('#txtA');
const txtB = document.querySelector('#txtB');
const result = document.querySelector('#result');

btnAdd.addEventListener('click', () => {
  const res = calc.add(Number(txtA.value), Number(txtB.value));
  result.innerHTML = res;
});

btnSubstract.addEventListener('click', () => {
  const res = calc.sub(Number(txtA.value), Number(txtB.value));
  result.innerHTML = res;
});

btnMultiply.addEventListener('click', () => {
  const res = calc.mult(Number(txtA.value), Number(txtB.value));
  result.innerHTML = res;
});

btnDivide.addEventListener('click', () => {
  const res = calc.div(Number(txtA.value), Number(txtB.value));
  result.innerHTML = res;
});