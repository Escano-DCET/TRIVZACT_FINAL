const loginPage = document.getElementById('login-page'); // Login page container
const frontPage = document.getElementById('front-page'); // Front page container after login
const quizContainer = document.getElementById('quiz-container'); // Quiz section container
const loginBtn = document.getElementById('login-btn'); // Login button element
const startQuizBtn = document.getElementById('start-quiz-btn'); // Button to start the quiz
const exitQuizBtn = document.getElementById('exit-quiz-btn'); // Button to exit the quiz
const usernameInput = document.getElementById('username'); // Pag Tytype-an ng Username
const loginError = document.getElementById('login-error'); // Mag didisplay ng error kapag nag fail yung log in
const userDisplay = document.getElementById('user-display'); // Element to show logged-in username
const totalScoreDisplay = document.getElementById('total-score-display'); // Element para ma display yung score


const questionContainer = quizContainer.querySelector('.question'); // Area to display quiz question
const answerButtons = quizContainer.querySelectorAll('.answers li'); // List items for possible answers
const answersContainer = quizContainer.querySelector('.answers'); // Container for answer choices
const feedback = quizContainer.querySelector('.answer-feedback'); // Mag didisplay ng correct/incorrect kapag pumili ng sagot
const nextBtn = quizContainer.querySelector('.next-btn'); // Button to go to next question
const scoreContainer = quizContainer.querySelector('.score-container'); // Container to display final score
const logoutBtn = document.getElementById('logout-btn');

const users = {};
let loggedInUser = null;
let currentQuiz = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let questionBatchIndex = 0;
let answerSelected = false;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Para sa Sign up and Password
const signUpBtn = document.createElement('button');
signUpBtn.textContent = 'Sign Up';
signUpBtn.id = 'signup-btn';
signUpBtn.className = 'styled-button';
loginBtn.parentNode.insertBefore(signUpBtn, loginBtn.nextSibling);

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.id = 'password';
passwordInput.name = 'password';
passwordInput.placeholder = 'Password';
loginBtn.parentNode.insertBefore(passwordInput, loginBtn);

// Post-quiz option buttons
const nextSetBtn = document.createElement('button');
nextSetBtn.textContent = 'Next 10 Questions';
nextSetBtn.className = 'styled-button';
nextSetBtn.style.display = 'none';
quizContainer.appendChild(nextSetBtn);

const leaderboardBtn = document.createElement('button');
leaderboardBtn.textContent = 'Score Leaderboard';
leaderboardBtn.className = 'styled-button';
leaderboardBtn.style.display = 'none';
quizContainer.appendChild(leaderboardBtn);

const triviaBtn = document.createElement('button');
triviaBtn.textContent = 'Trivia';
triviaBtn.className = 'styled-button';
triviaBtn.style.display = 'none';
quizContainer.appendChild(triviaBtn);

// ====== Local Storage ======
function saveUserData() {
  localStorage.setItem('quizUsers', JSON.stringify(users));
}

function loadUserData() {
  const stored = localStorage.getItem('quizUsers');
  if (stored) Object.assign(users, JSON.parse(stored));
}

// Para sa Sign Up 
signUpBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  if (!username || !password) {
    loginError.style.display = 'block';
    loginError.textContent = 'Username and password are required.';
    return;
  }
  if (users[username]) {
    loginError.style.display = 'block';
    loginError.textContent = 'User already exists.';
    return;
  }
  users[username] = { password, score: 0 };
  saveUserData();
  loginError.style.display = 'block';
  loginError.style.color = 'green';
  loginError.textContent = 'Sign up successful! You can now log in.';
});

// log In
loginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  if (username && password && users[username]?.password === password) {
    loggedInUser = username;
    userDisplay.textContent = loggedInUser;
    totalScoreDisplay.textContent = users[loggedInUser].score;
    loginPage.style.display = 'none';
    frontPage.style.display = 'block';
    loginError.style.display = 'none';
  } else {
    loginError.style.display = 'block';
    loginError.textContent = 'Invalid username or password.';
  }
});

// Quiz 
function loadQuestion() {
  if (currentQuestionIndex < currentQuiz.length) {
    const currentQuestionData = currentQuiz[currentQuestionIndex];
    questionContainer.textContent = currentQuestionData.question;
    const shuffledAnswers = [...currentQuestionData.answers];
    shuffleArray(shuffledAnswers);

    answerButtons.forEach((answerButton, index) => {
      const answerData = shuffledAnswers[index];
      answerButton.textContent = answerData.text;
      answerButton.dataset.correct = answerData.correct;
      answerButton.classList.remove('correct', 'incorrect');
      answerButton.style.pointerEvents = 'auto';
      answerButton.style.display = 'block';
    });

    feedback.style.display = 'none';
    nextBtn.style.display = 'none';
    answerSelected = false;
  } else {
    finishQuiz();
  }
}

function checkAnswer(selectedAnswer) {
  if (!answerSelected) {
    answerSelected = true;
    const isCorrect = selectedAnswer.dataset.correct === 'true';
    selectedAnswer.classList.add(isCorrect ? 'correct' : 'incorrect');
    feedback.textContent = isCorrect ? 'Correct!' : 'Incorrect.';
    if (isCorrect) currentScore++;
  }

  answerButtons.forEach(ans => ans.style.pointerEvents = 'none');
  feedback.style.display = 'block';
  nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

function loadBatch() {
  shuffleArray(quizData);
  currentQuiz = quizData.slice(questionBatchIndex * 10, (questionBatchIndex + 1) * 10);
  currentQuestionIndex = 0;
  currentScore = 0;
  scoreContainer.textContent = '';
  loadQuestion();
}

function startQuiz() {
  frontPage.style.display = 'none';
  quizContainer.style.display = 'block';
  logoutBtn.style.display = 'none';
  nextSetBtn.style.display = 'none';
  leaderboardBtn.style.display = 'none';
  triviaBtn.style.display = 'none';
  questionBatchIndex = 0;
  loadBatch();
}

function finishQuiz() {
  questionContainer.textContent = 'Quiz Finished!';
  answerButtons.forEach(ans => ans.style.display = 'none');
  feedback.style.display = 'none';
  nextBtn.style.display = 'none';
  scoreContainer.textContent = `Your score for this quiz: ${currentScore} out of ${currentQuiz.length}`;

  if (loggedInUser) {
    users[loggedInUser].score += currentScore;
    totalScoreDisplay.textContent = users[loggedInUser].score;
    saveUserData();
  }

  exitQuizBtn.style.display = 'inline-block';
  logoutBtn.style.display = 'inline-block';
  nextSetBtn.style.display = 'inline-block';
  leaderboardBtn.style.display = 'inline-block';
  if (users[loggedInUser].score >= 0) triviaBtn.style.display = 'inline-block';
}

function exitQuiz() {
  quizContainer.style.display = 'none';
  frontPage.style.display = 'block';
  exitQuizBtn.style.display = 'none';
  currentQuestionIndex = 0;
  currentScore = 0;
  answerButtons.forEach(ans => {
    ans.style.display = 'block';
    ans.classList.remove('correct', 'incorrect');
    ans.style.pointerEvents = 'auto';
  });
  feedback.style.display = 'none';
  nextBtn.style.display = 'none';
  scoreContainer.textContent = '';
}

logoutBtn.addEventListener('click', () => {
  loggedInUser = null;
  usernameInput.value = '';
  passwordInput.value = '';
  loginPage.style.display = 'block';
  frontPage.style.display = 'none';
  quizContainer.style.display = 'none';
});

startQuizBtn.addEventListener('click', startQuiz);
exitQuizBtn.addEventListener('click', exitQuiz);
nextBtn.addEventListener('click', nextQuestion);
answerButtons.forEach(answer => answer.addEventListener('click', () => checkAnswer(answer)));

// Leaderboard
leaderboardBtn.addEventListener('click', showLeaderboard);

// Next set of questions
nextSetBtn.addEventListener('click', () => {
  questionBatchIndex++;
  loadBatch();
  triviaBtn.style.display = 'none';
  nextSetBtn.style.display = 'none';
  leaderboardBtn.style.display = 'none';
});

// Trivia button logic
// List of trivia facts
if (triviaBtn) {
  triviaBtn.addEventListener('click', () => {
    localStorage.setItem('loggedInUser', loggedInUser);
    window.location.href = 'trivia.html';
  });
}

// Responsive font scale
window.addEventListener('resize', () => {
  document.body.style.fontSize = window.innerWidth < 600 ? '14px' : '16px';
});

// INIT
loadUserData();
loginPage.style.display = 'block';
frontPage.style.display = 'none';
quizContainer.style.display = 'none';
exitQuizBtn.style.display = 'none';

function showLeaderboard() {
  const leaderboardList = document.getElementById('leaderboard-list');
  leaderboardList.innerHTML = ''; // Clear previous items

  const sortedUsers = Object.entries(users)
    .sort(([, a], [, b]) => b.score - a.score);

  sortedUsers.forEach(([name, data], index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${name}: ${data.score}`;
    leaderboardList.appendChild(li);
  });

  document.getElementById('leaderboard-container').style.display = 'block';
  quizContainer.style.display = 'none'; // hide quiz if visible
}

function closeLeaderboard() {
  document.getElementById('leaderboard-container').style.display = 'none';
  quizContainer.style.display = 'block'; // return to quiz
}
