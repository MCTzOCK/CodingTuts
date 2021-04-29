/**
 * @author Ben Siebert
 * @copyright 2018-2021 Ben Siebert. All rights reserved.
 */

let inputField = undefined;

window.onload = function (){
    // init inputField variable
    inputField = document.getElementById('challange');
}

// the core function
function process(button){
    if(button.innerText.length > 0){
        if(button.innerText !== 'C' && button.innerText !== '='){
            inputField.value = inputField.value + button.innerText;
        }else {
            if(button.innerText === 'C'){
                inputField.value = '';
            }else {
                inputField.value = eval(inputField.value);
            }
        }
    }else {
        if(button.classList.contains('bi-backspace-fill')){
            // delete last char
            inputField.value = inputField.value.substring(0, inputField.value.length - 1);
        }
    }
}