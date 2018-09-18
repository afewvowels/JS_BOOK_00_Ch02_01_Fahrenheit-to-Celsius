function convert() {
  var degF = document.getElementById('fvalue').value;
  var degC = (degF - 32) * (5/9);
  document.getElementById('cvalue').innerHTML = degC;
}

document.getElementById('convert_button').addEventListener('click', convert, false);
