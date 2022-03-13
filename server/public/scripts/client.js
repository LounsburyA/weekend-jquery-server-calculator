console.log('js working');

$(handleReady);


function handleReady() {
  console.log('jq working');

  $('#equal').on('click', handleEqual);
  $('.operator').on('click', operatorId);
 // $('#clear').on('click', clear);
  getCalcInputs();
}

function handleEqual() {
  console.log('click works');

  let inputOne = $('#inputOne').val();  //takes first input
  let inputTwo = $('#inputTwo').val();  //takes second input
  $.ajax({
    url: '/math',
    method: 'POST',
    data: {
      theInputOne: inputOne,  // ajax posts this data (from inputs) on server
      selector: selector,
      theInputTwo: inputTwo
    }
  }).then(function (response) {
    console.log(response);
    getCalcInputs();
  })

}

////////////////////
function getCalcInputs() {
  console.log('Getting Calculator Inputs');
  $.ajax({
    url: '/math',
    method: 'GET'             /////1st get


  }).then(function (response) {
    console.log(response);
    render(response);
  })
  $.ajax({
    url: '/answers',
    method: 'GET'         ///2nd get


  }).then(function (response) {
    console.log(response);
    calcAnswer(response);
  })
}


///////////////////
function render(inputs) {

  //$('#inputs').empty();     //// take this out maybe to leave inputs?

$('#inputs').empty();
  for (let input of inputs) {
    $('#inputs').append(`<li>${input}</li>`)
  }
}
///////
let selector;
function operatorId() {
  selector = $(this).text();
  console.log('operator click works');

}
//////



function clear() {
  $('input').val('');

}
//////

function calcAnswer(clientOutput) {
  $('#result').empty();
  $('#result').append(clientOutput[clientOutput.length - 1]);
}