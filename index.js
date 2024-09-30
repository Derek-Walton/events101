'use strict';
/**
 * Add your functions here...
 */

function targetTextToConsole(event){
  console.log(event.target.textContent);
}

function tttcAttacher(){
  const button = document.querySelector('#button0');
  button.addEventListener('click', targetTextToConsole);
}

function lovelyParaAttacher(){
  const element = document.querySelector('#thisisalovelyparagraph');
  element.addEventListener('click', lovelyToggle);
}

function lovelyButtonAttacher(){
  const button = document.querySelector('#button1');
  button.addEventListener('click', lovelyToggle);
}

function lovelyToggle(event){
  if (event.target.classList.contains('lovely')){
      event.target.classList.remove('lovely');
  } else{
      event.target.className = 'lovely';
  }
}

function concatAttacher(){
  const input1 = document.querySelector('#in1');
  const input2 = document.querySelector('#in2');

  const output = document.querySelector('#out1');
  input1.addEventListener('change', event => {
    output.textContent = input1.value + input2.value;
  });
  input2.addEventListener('change', event => {
    output.textContent = input1.value + input2.value;
  });
}

function snitchAttacher(){
  const div = document.querySelector('#mousewatcher');
  const snitch = document.querySelector('#snitch');

  div.addEventListener('mouseover', event => {
    snitch.textContent = 'IN';
  })
  div.addEventListener('mouseout', event => {
    snitch.textContent = 'OUT';
  })
}

function reportAttacher() {
  const mouseReporter = document.querySelector('#mousereporter');
  
  mouseReporter.addEventListener('mousemove', reportUpdater)
}

function reportUpdater(event) {
  const report = document.querySelector('#report');
  report.textContent = 'x: ' + event.screenX + ' y: ' + event.screenY;
}

function idValidationAttacher(){
  const input = document.querySelector('#newid');
  input.addEventListener('input', idValidation)
}

function idValidation(event){
  if (event.target.value.includes(' ')) {
    event.target.classList.add('invalid');
  } else {
    event.target.classList.remove('invalid');
  }
}