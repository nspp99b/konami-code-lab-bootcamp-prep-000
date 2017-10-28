const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let index = 0;
document.body.addEventListener('keydown', function(event) {
  init();
})

function init() {
  const keyStroke = parseInt(event.which);

  if (keyStroke === code[index]) {
    console.log(keyStroke);
    index++;
    console.log(index)
    if (index === code.length) {
      alert("27 Extra Lives!");
      index = 0;
    }
  }
  else {
    index = 0;
  }
}
