const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let index = 0;
var dabody = getElementBySelector('body')
dabody.addEventListener('keydown', init());

function init(e) {
  const key = parseInt(e.key || e.detail || e.which);

  if (key === code[0]) {
    console.log(key);
    index++;
    console.log(index)
  }

  if (index === code.length) {
    alert('27 Extra Lives!');
    index = 0;
  }

  else {
    index = 0;
  }
}
