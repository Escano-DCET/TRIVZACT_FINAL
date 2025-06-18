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

const users = {
};

let currentQuestionIndex = 0;
let currentScore = 0;
let currentQuiz = [];
let loggedInUser = null;
let answerSelected = false; // To prevent multiple clicks on the answers


// Para random yung mga choices
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    if (currentQuestionIndex < currentQuiz.length) {
        const currentQuestionData = currentQuiz[currentQuestionIndex];
        questionContainer.textContent = currentQuestionData.question;
        
        // para naka shuffle yung pwesto nung tamang sagot
        const shuffledAnswers = [...currentQuestionData.answers];
        shuffleArray(shuffledAnswers);

        answerButtons.forEach((answerButton, index) => {
            const answerData = shuffledAnswers[index];
            answerButton.textContent = answerData.text;
            answerButton.dataset.correct = answerData.correct;
            answerButton.classList.remove('correct', 'incorrect');
            answerButton.style.pointerEvents = 'auto';
        });
        feedback.style.display = 'none';
        nextBtn.style.display = 'none';
        answerSelected = false; // Para mag reset sa bagong set ng question
    } else {
        finishQuiz();
    }
}

// Dito yung kapag pumili ng sagot lalabas kung correct/incorrect yung piniling sagot
function checkAnswer(selectedAnswer) {
    if (!answerSelected) {
        answerSelected = true;
        const isCorrect = selectedAnswer.dataset.correct === "true";
        if (isCorrect) {
            selectedAnswer.classList.add('correct');
            feedback.textContent = "Correct!";
            currentScore++;
        } else {
            selectedAnswer.classList.add('incorrect');
            feedback.textContent = "Incorrect.";
            }
        }

        answerButtons.forEach(ans => ans.style.pointerEvents = 'none');
        feedback.style.display = 'block';
        nextBtn.style.display = 'inline-block';
    }

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function startQuiz() {
    // Para pag nag start quiz naka hide yung front page or parang next page na sya
    frontPage.style.display = 'none';
    // Show the quiz container
    quizContainer.style.display = 'block';

    logoutBtn.style.display = 'none';


    shuffleArray(quizData);
    currentQuiz = quizData.slice(0, Math.min(10, quizData.length));
    currentQuestionIndex = 0;
    currentScore = 0;
    scoreContainer.textContent = "";
    loadQuestion();
}

function finishQuiz() {
    questionContainer.textContent = "Quiz Finished!";
    answerButtons.forEach(ans => ans.style.display = 'none');
    feedback.style.display = 'none';
    nextBtn.style.display = 'none';
    scoreContainer.textContent = `Your score for this quiz: ${currentScore} out of ${currentQuiz.length}`;

    if (loggedInUser && users.hasOwnProperty(loggedInUser)) {
        users[loggedInUser] += currentScore;
        totalScoreDisplay.textContent = users[loggedInUser];
    }

    exitQuizBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'inline-block';

}

function exitQuiz() {
    // Hide quiz container
    quizContainer.style.display = 'none';
    // Pag nag exit naman babalik sa front page 
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
    scoreContainer.textContent = "";

}

loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const username = usernameInput.value.trim();
    if (username !== "") {
        if (!users.hasOwnProperty(username)) {
            users[username] = 0; 
        }
        loggedInUser = username;
        userDisplay.textContent = loggedInUser;
        totalScoreDisplay.textContent = users[loggedInUser];
        loginPage.style.display = 'none';
        frontPage.style.display = 'block';
        loginError.style.display = 'none';

    } else {
        loginError.style.display = 'block';
        loginError.textContent = 'Username cannot be empty.';
    }
});

// Log Out Button
const logoutBtn = document.getElementById('logout-btn'); // Button to log out

function logout() {
    loggedInUser = null;
    usernameInput.value = ""; // Clear the input field
    loginPage.style.display = 'block'; // Show login
    frontPage.style.display = 'none'; // Hide front page
    quizContainer.style.display = 'none'; // Just in case
}

logoutBtn.addEventListener('click', logout); // Add event listener

startQuizBtn.addEventListener('click', startQuiz);
exitQuizBtn.addEventListener('click', exitQuiz);

// Attach event listeners to each answer button so that when clicked, 
// the checkAnswer function is triggered with the clicked button as its argument.
// Para isang beses lang mag rerepon yung bawat button para din ma avoid o ma duplicate yung event attachments.
// Attach event listeners only once
answerButtons.forEach(answer => {
    answer.addEventListener('click', function() {
        checkAnswer(this);
    });
});

nextBtn.addEventListener('click', nextQuestion); // Naglalagay ng event listener sa "Next" button para tawagin ang nextQuestion function kapag na-click

loadUserData(); // Load data if available from localStorage
loginPage.style.display = 'block';
frontPage.style.display = 'none';
quizContainer.style.display = 'none';
exitQuizBtn.style.display = 'none';



