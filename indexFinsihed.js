'use strict';
/**
 * Add your functions here...
 */

function targetTextToConsole(event){
    console.log(event.target.textContent);
}

function tttcAttacher(){
    const myButton = document.querySelector('#button0');
    myButton.addEventListener('click', targetTextToConsole);
}

function lovelyParaAttacher(){
    const myElem = document.querySelector('#thisisalovelyparagraph')
    myElem.addEventListener('click', lovelyToggle)
}

function lovelyToggle(event){
    if (event.target.classList.contains('lovely')){
        event.target.classList.remove('lovely');
        event.target.classList.remove('lovely');
    } else{
        event.target.className = 'lovely';
    }
}

function lovelyButtonAttacher(){
    const elem = document.querySelector('#button1');
    elem.addEventListener('click', lovelyToggle);
}

function joinOut1(event){
    console.log(event.target);
}

function concatAttacher(){
    const elem1 = document.querySelector('#in1');
    const elem2 = document.querySelector('#in2');
    const out1 = document.querySelector('#out1');
    elem1.addEventListener('change', () => {out1.textContent = elem1.value + elem2.value})
    elem2.addEventListener('change', () => {out1.textContent = elem1.value + elem2.value})
}

function snitchUpdater(event) { // eslint-disable-line no-unused-vars
    window.snitch.textContent = (event.type === 'mouseover' ? 'IN' : 'OUT');
}

function snitchAttacher(){
    const elem = document.querySelector('#mousewatcher');
    elem.addEventListener('mouseover', snitchUpdater);
    elem.addEventListener('mouseout', snitchUpdater);
}

function reportAttacher(){
    const mouseReporter = document.querySelector('#mousereporter');
    mouseReporter.addEventListener('mousemove', reportUpdater);
}

function reportUpdater(event){
    event.target.firstChild.textContent = `x: ${event.screenX} y: ${event.screenY}`;
}

function idValidationAttacher(){
    const newIdInput = document.querySelector('#newid');
    newIdInput.addEventListener('input', idValidation);
    // console.log(newIdInput.value)
}

function idValidation(event){
    if (event.target.value.includes(' ')){
        event.target.classList.add('invalid');
    } else {
        if (event.target.classList.contains('invalid')){
            event.target.classList.remove('invalid');
        }
    }
}