const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let index = 0;
document.addEventListener('keydown', function(event) {
  init()
});

function init() {
  const keyStroke = parseInt(event.which);

  if (index === parseInt(code.length)) {
    console.log("27 Extra Lives!");
    index = 0;
  }

  else if (keyStroke === code[index]) {
    console.log(keyStroke);
    return index++;
    console.log(index)
  }

  else {
    return index = 0;
  }
}
