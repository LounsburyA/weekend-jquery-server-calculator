const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let inputVals = [];
let outputVals = []

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})

app.post('/math', (req, res) => {
  console.log('POST inputs', req.body);

  inputVals.push(req.body);

  console.log(inputVals);
  res.sendStatus(201);

  calculate(req.body)
})

app.get('/math', (req, res) => {
  console.log('Get inputVals');
  res.send(inputVals)
})

function calculate(solution) {
  let inputOne = (solution.theInputOne);
  let selector = (solution.selector);
  let inputTwo = (solution.theInputTwo);
 
  switch (selector) {
  case '+':
    answer = inputOne + inputTwo;
    inputVals.push(`${inputOne} + ${inputTwo} = ${answer}`)
    outputVals.push(answer);
    break;

  case '-':
    answer = inputOne - inputTwo;
    inputVals.push(`${inputOne} - ${inputTwo} = ${answer}`)
    outputVals.push(answer);
    break;

    case '/':
    answer = inputOne / inputTwo;
    inputVals.push(`${inputOne} / ${inputTwo} = ${answer}`)
    outputVals.push(answer);
    break;

      case '*':
    answer = inputOne * inputTwo;
    inputVals.push(`${inputOne} * ${inputTwo} = ${answer}`)
    outputVals.push(answer);
    break;
  }
}