const quizData = [
  {
    question: 'What is Africa\'s original name?',
    a: 'Afrika',
    b: 'Alkebulan',
    c: 'Nubians',
    d: 'Noors',
    correct: 'b'
  },
  {
    question: 'When was the first computer program invented?',
    a: '1383',
    b: '1388',
    c: '1327',
    d: '1883',
    correct: 'd'
  },
  {
    question: 'What is a normal body temperature for an adult?',
    a: '100',
    b: '37.5',
    c: '97',
    d: '89',
    correct: 'c'
  },
  {
    question: 'What is the fastest problem-solving method?',
    a: 'Evaluate your options',
    b: 'Analyze the data',
    c: 'Define the problem',
    d: 'Break the problem',
    correct: 'c'
  },
  {
    question: 'Which of the following is not a primitive data type in JavaScript?',
    a: 'String',
    b: 'Boolean',
    c: 'Array',
    d: 'Number',
    correct: 'c'
  }
];



const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('js_submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  if (currentQuiz >= quizData.length) {

    quiz.innerHTML = `<h2>Quiz completed! Congratulations! Your score is: ${score}/${quizData.length}</h2> 
    
    <button onclick="location.reload()"> Play Again!</button>`;
    return;
  }

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  deselectAnswers();
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}

function getSelected() {
  for (const answerEl of answerEls) {
    if (answerEl.checked) {
      return answerEl.id;
    }
  }

  return undefined;
}

submitBtn.addEventListener('click', () => {
  const selectedAnswer = getSelected();

  if (selectedAnswer) {
    const currentQuizData = quizData[currentQuiz];
    if (selectedAnswer === currentQuizData.correct) {
      score++;
    }

    currentQuiz++;
    loadQuiz();
  } else {
    alert('Please select an option to see the next question.');
  }
});
