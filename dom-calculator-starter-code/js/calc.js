//some global variables
var firstNumber = true;
var secondNumber = false;
var operator = false;

//set up the event listeners for button on the page
function setupListeners(){

  //get the elements so we can set the event listeners on them

  // select all the number buttons on the page
  var numberButtons = document.getElementsByClassName('buttonNum');
  // select all the operators on the page
  var operatorButtons = document.getElementsByClassName('operator');
  //select the equal button
  var equalButton = document.getElementsByClassName("equals");
  // select the clear button
  var clearButton = document.getElementsByClassName("buttonClear");
  clearButton[0].addEventListener('click', clearCalculator);
  equalButton[0].addEventListener('click', getAnswer);
  setNumberButtonListeners(numberButtons);
  setOperatorButtonListeners(operatorButtons);



}

//setting the listeners for the number buttons
function setNumberButtonListeners(buttons) {
  var calculatorScreen = document.getElementById("screen");

  // create a loop to set the listener on each button
  for(var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function(event){
      if(firstNumber === true) {
        calculatorScreen.innerHTML = this.innerHTML;
        firstNumber = parseInt(this.innerHTML);
        operator = true;
        console.log("First Number", firstNumber);
      } else if (secondNumber === true) {
        calculatorScreen.innerHTML = this.innerHTML;
        secondNumber = parseInt(this.innerHTML);
        console.log(this.innerHTML);
      }
		});
	}
}


// Set the listeners for the operators
function setOperatorButtonListeners(opButtons){
  var calculatorScreen = document.getElementById("screen");

  // create a loop to set the listener on each operator
  for(var i = 0; i < opButtons.length; i++) {
		opButtons[i].addEventListener('click', function(event){
      if(operator === true){
        calculatorScreen.innerHTML = this.innerHTML;
        operator = this.innerHTML;
        secondNumber = true;
        console.log("Operator", operator);
      }
		});
	}
}

function clearCalculator() {
  var calculatorScreen = document.getElementById('screen')
  calculatorScreen.innerHTML= 'Sparta Calculator';
  firstNumber=true;
  secondNumber=false;
  operator=false;
}
function doCalculation() {

  switch (operator) {
    case '+':
      return (firstNumber + secondNumber).toFixed(2)
      break;
    case '-':
      return (firstNumber - secondNumber).toFixed(2)
      break;
    case '*':
      return (firstNumber * secondNumber).toFixed(2)
      break;
    case '/':
      return (firstNumber / secondNumber).toFixed(2)
      break;
    default:
      return 'error';


  }
}
function getAnswer() {
  console.log('event fired');
  var calculatorScreen = document.getElementById('screen');
  var answer = doCalculation();
  console.log('Answer-----' + answer);
    calculatorScreen.innerHTML = answer;
}
setupListeners();
