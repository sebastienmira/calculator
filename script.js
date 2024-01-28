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

function operate(aValue,operator,bValue){
  switch(operator){
    case '+':
      return add(aValue,bValue)
    case '-':
      return subtract(aValue,bValue)
    case '/':
      if(bValue!=0){
        return divide(aValue,bValue)
      }
      else{return 'Division by 0'}
    case 'x':
      return multiply(aValue,bValue)
  }
}

const display=document.querySelector('#display')
let buttons=Array.from(document.querySelectorAll('button'))
let toDisplay=''
let values=[]

buttons.map((button)=> button.addEventListener(('click'), ()=>{
  if (button.classList[0]=='numberButton'){
    toDisplay=toDisplay+button.textContent
    display.textContent=toDisplay
  }
  if(button.classList[0]=='operatorButton'){
    if(toDisplay!=''){
      values.push(toDisplay)
      if (values.length==1){
        toDisplay=''
        display.textContent=button.textContent
        values.push(button.textContent)
        }
      if (values.length==3){
        values=[''+ operate(+values[0],values[1],+values[2])]
        toDisplay=''
        display.textContent=button.textContent
        values.push(button.textContent)
      }
    }
  }
  if(button.classList[0]=='equalButton'){
    if (toDisplay!=''){
      values.push(toDisplay)
      if(values.length==3){
        toDisplay=''+ operate(+values[0],values[1],+values[2])
        display.textContent=toDisplay
        values=[]
      }
      else{
        return "press C somethingwent wrong"
      }
    }
  }
  if(button.classList[0]=='clearButton'){
    values=[]
    toDisplay=''
    display.textContent=''
  }
}))






