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
    } else{
        event.target.classList.add('lovely')
    }
}