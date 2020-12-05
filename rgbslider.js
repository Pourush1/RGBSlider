var slider = document.querySelectorAll('input')

for (var i = 0; i < slider.length; i++) {
  slider[i].addEventListener('input', function() {
    var red = document.getElementById('red').value
    var green = document.getElementById('green').value
    var blue = document.getElementById('blue').value

    display.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')'
  })
  console.log('test')
}
