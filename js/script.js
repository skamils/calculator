function insert(num) {
  document.getElementById('screen').textContent = document.getElementById('screen').textContent+num;
}

function clearAll() {
  document.getElementById('screen').textContent='';
}

function back() {
  var exp = document.getElementById('screen').textContent;
  document.getElementById('screen').textContent=exp.substring(0,exp.length-1);
}

function equal() {
  var exp = document.getElementById('screen').textContent;
  if (exp) {
    document.getElementById('screen').textContent=eval(exp);
  }
}
