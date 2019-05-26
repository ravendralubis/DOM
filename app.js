

const imageQuiz = document.getElementById('image-quiz');
const quizBox = document.getElementById('quiz-box');

const namaDragonBall = ['Son Goku', 'Bezita', 'Mr. Satan', 'Krilin'];

for (let index = 0; index < 4; index++) {
  const boxAnswer = document.createElement('div');
  boxAnswer.setAttribute('id', `box-answer-${index + 1}`);
  boxAnswer.setAttribute('class', 'div-answer');

  quizBox.appendChild(boxAnswer);

  const btnAnswer = document.createElement('button');

  btnAnswer.setAttribute('id', `btn-answer-${index + 1}`);
  btnAnswer.setAttribute('class', 'btn-answer');

  let insideBox = document.getElementById(`box-answer-${index + 1}`);
  insideBox.appendChild(btnAnswer);

  const listenerBtn = document.getElementById(`btn-answer-${index + 1}`);

  listenerBtn.innerHTML = namaDragonBall[index];
  listenerBtn.value = namaDragonBall[index];

  listenerBtn.addEventListener('click', () => {
    if (listenerBtn.value === 'Son Goku') {
      imageQuiz.style.filter = ('brightness(100%)');
      alert('Your answer correct!');
    } else {
      alert('Your answer wrong!');
    }
  });
}