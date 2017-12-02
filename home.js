//変数設定
var time =0;
var total=0;

//押すと色を変える
function changeColor(id) {
  var element = document.getElementById(id);
    if (time < 2) {
      element.style.backgroundColor = 'red';
    }
  time = time + 1
}
//ここまでが色を変える機能

function judge() {
  if (time==2) {
    for (var i = 1; i <=16 ; i++) {
      var element = document.getElementById(i);
      if (element.style.backgroundColor == 'red') {
        total=total+i
      }
    }
    if (total%2==1) {
      alert("win")
    }else {
      alert("lose")
    }
  }
}

//リセットの機能
function Reset() {
  var i = 0;
  for (i = 1; i <= 16; i++) {
    var element = document.getElementById(i);
    element.style.backgroundColor = 'white';
  }
  total=0;
  time = 0;
}
