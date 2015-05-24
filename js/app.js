$(document).ready(function() {
var count = 1;
while (count <= 100) {
  // divisible by both 3 and 5 = fizz buzz
  if (count % 3 === 0 &&
    count % 5 === 0) {
    console.log('fizzbuzz');
    $('#numbers').append($('<li>fizzbuzz</li>').css('color', 'orange'));
  }

  // divisible by 3 = fizz
  else if (count % 3 === 0) {
    console.log('fizz');
    $('#numbers').append($('<li>fizz</li>').css('color', 'darkorange'));
  }
  // divisible by 5 = buzz    
  else if (count % 5 === 0) {
    console.log('buzz');
    $('#numbers').append($('<li>buzz</li>').css('color', 'maroon'));
  }
  // numbers 
  else {
    console.log(count);
    $('#numbers').append('<li>' + count + '</li>');
  }
  count = count + 1;
}
});