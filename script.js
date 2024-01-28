function add(a,b){
  return a+b
}
function subtract(a,b){
  return a-b
}
function multiply(a,b){
  return a*b
}
function divide(a,b){
  return a/b
}

let aValue
let bValue
let operator

function operate(operator,aValue,bValue){
  switch(operator){
    case '+':
      return add(aValue,bValue)
    case '-':
      return subtract(aValue,bValue)
    case '/':
      return divide(aValue,bValue)
    case '*':
      return multiply(aValue,bValue)
  }
}

const display=document.querySelector('#display')
let buttons=Array.from(document.querySelectorAll('button'))
let toDisplay=''

buttons.map((button)=> button.addEventListener(('click'), ()=>{
  toDisplay=toDisplay+button.textContent
  display.textContent=toDisplay
}))






