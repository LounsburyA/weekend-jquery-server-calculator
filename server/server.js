const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

let inputVals = []; // the history 
let outputVals = []; // the calculated results

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})

app.post('/math', (req, res) => {
  console.log('POST inputs', req.body);

  // inputVals.push(req.body);   //// pushes are talking place in switch

  console.log(inputVals);
  calculate(req.body);
  res.sendStatus(201);

  // calculate(req.body)
})

app.get('/math', (req, res) => {
  console.log('Get inputVals');
  res.send(inputVals);
})

app.get('/answers', (req, res) => {
  console.log('Get inputVals');
  res.send(outputVals);
})

function calculate(solution) {
  console.log('inside calculate');
  
  let inputOne = solution.theInputOne;
  let selector = solution.selector;
  let inputTwo = solution.theInputTwo;

  switch (selector) {
    case '+':
      answer = Number(inputOne) + Number(inputTwo);
      inputVals.push(`${inputOne} + ${inputTwo} = ${answer}`);
      outputVals.push(answer);
      console.log(answer);
      
      break;

    case '-':
      answer = (Number(inputOne) - Number(inputTwo));
      inputVals.push(`${inputOne} - ${inputTwo} = ${answer}`);
      outputVals.push(answer);
      break;

    case '/':
      answer = (Number(inputOne) / Number(inputTwo));
      inputVals.push(`${inputOne} / ${inputTwo} = ${answer}`);
      outputVals.push(answer);
      break;

    case '*':
      answer = (Number(inputOne) * Number(inputTwo));
      inputVals.push(`${inputOne} * ${inputTwo} = ${answer}`);
      outputVals.push(answer);
      break;
    default:
      break;
  }
}


// app.get('/history', (req, res) => {
//   console.log('Get inputVals');
//   res.send(outputVals);
// })