console.log('js working');

$(handleReady);

let operator = '';

function handleReady() {
  console.log('jq working');

  $('#equal').on('click', handleEqual)
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
      theInputTwo: inputTwo,
    }
  }).then(function (response) {
    console.log(response);
  })

}
function getCalcInputs(){
  console.log('Getting Calculator Inputs');
  $.ajax({
    url: '/math',
    method: 'GET'


}).then(function (response) {
    console.log(response);
    render(response);
  })
}

function render(inputs) {

  $('#inputs').empty();

  for (let input of inputs) {
    $('#inputs').append(`<li>${input.theInputOne} ${input.theInputTwo}</li>`)
  }
}
