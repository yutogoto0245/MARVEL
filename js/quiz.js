const btn = document.getElementById('answer-btn');
const correct = document.getElementById('correct-answer-box');
const text = document.getElementById('input-answer');
const notcorrect = document.getElementById('notcorrect-answer-box');
const body = document.getElementsByName('body');


// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  if (text.value == "AAA"){
    console.log('正解');
    correct.style.display = 'block';

  } else {
    console.log('不正解');
    notcorrect.style.display = 'block';
  }
});



// 不正解Xボタン
function butotnClick() {
  notcorrect.style.display = 'none';
}

const backBtn = document.getElementById('getback-btn');
backBtn.addEventListener('click', butotnClick);



//クイズ2--------------------------------------------
const btnA = document.getElementById('btn-a');
const quiz2Before = document.getElementById('quiz2-before');
const quiz2After = document.getElementById('quiz2-after');

btnA.addEventListener('click', btnAClick);
function btnAClick() {
  console.log('Aが押された');
  quiz2Before.style.display = 'none';
  quiz2After.style.display = 'block';
}

$img.onpointermove = function(event){
  if(event.buttons){
      this.style.left     = this.offsetLeft + event.movementX + 'px'
      this.style.top      = this.offsetTop  + event.movementY + 'px'
      this.style.position = 'absolute'
      this.draggable      = false
      this.setPointerCapture(event.pointerId)
  }
}








