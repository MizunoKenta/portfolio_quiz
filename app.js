const quiz = [
  {
    question: '存在するギターブランドは次のうちどれ？',
    answers: [
      'Python',
      'Gibson',
      'Dyson',
      'Myson'
    ],
    correct: 'Gibson'
  },{
    question: '正しい「レギュラーチューニング」は次のうちどれ？',
    answers: [
      'EBGDAE',
      'EGBADE',
      'EADGBE',
      'EAGBAE'
    ],
    correct: 'EADGBE'
  },{
    question: 'ギターの音色を変えるための機材を何と呼ぶ？',
    answers: [
      'ハイハット',
      'チューナー',
      'エフェクター',
      'スラップ'
    ],
    correct: 'エフェクター'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//クイズの問題文、選択肢を定義

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else {
    window.alert('終了！あなたの正解数は'+ score +'問です！');
  }

};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
