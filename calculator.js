var myoutput = '';

function inputvalue(value) {
  myoutput += value;
  document.getElementById('input').value = myoutput;
}

function Equal() {
  try {
    const result = evaluateExpression(myoutput);
    myoutput = result.toString();
    document.getElementById('input').value = myoutput;
  } catch (error) {
    myoutput = 'Error';
    document.getElementById('input').value = myoutput;
  }
}

function evaluateExpression(expression) {
  // Replace percentage symbol with * 0.01 to perform the percentage operation
  expression = expression.replace(/%/g, '*0.01');
  return new Function('return ' + expression)();
}

function clearlastInput() {
  if (myoutput.length > 0) {
    myoutput = myoutput.slice(0, -1);
    document.getElementById('input').value = myoutput;
  }
}

function AllClear() {
  myoutput = '';
  document.getElementById('input').value = myoutput;
}
