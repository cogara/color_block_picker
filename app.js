var boxArray = [];

function Box(color) {
  this.color = color;
  boxArray.push(this);
}

var box1 = new Box('blue');
var box2 = new Box('red');
var box3 = new Box('green');
var box4 = new Box('orange');
var box5 = new Box('magenta');
var box6 = new Box('yellow')

// console.log(array);
$(document).ready(function() {
  $('h1').html('Pick a box:');

  for (var i = 0; i < boxArray.length; i++) {
    $('.game').append('<div class="'+ boxArray[i].color +'"></div>');
  }

  var randomBox = Math.floor(Math.random() * boxArray.length);

  console.log(boxArray[randomBox]);
  $('.game').on('click', 'div', function() {

    if (boxArray[randomBox].color === $(this).attr('class')) {
      $('.output').html('You are correct, good job!');
      randomBox = Math.floor(Math.random() * boxArray.length);
      console.log(boxArray[randomBox]);
    }
    else {
      $('.output').html('You picked wrong! Try again!');
    }
  })
})
