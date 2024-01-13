
 var toggleMenu=()=>{
   var menu = document.querySelector(".menu");
   menu.classList.toggle("show");
 }

const horoscopes = {
  aries: "Aries, you are adventurous and energetic.",
  taurus: "Taurus, you are reliable and stable.",
  gemini: "Gemini, you are curious and adaptable.",
  cancer: "Cancer, you are nurturing and intuitive.",
  leo: "Leo, you are confident and passionate.",
  virgo: "Virgo, you are analytical and precise.",
  libra: "Libra, you are harmonious and diplomatic.",
  scorpio: "Scorpio, you are intense and mysterious.",
  sagittarius: "Sagittarius, you are optimistic and adventurous.",
  capricorn: "Capricorn, you are responsible and disciplined.",
  aquarius: "Aquarius, you are unique and independent.",
  pisces: "Pisces, you are imaginative and sensitive."
};

const submitBtn = document.getElementById("submit-btn");
const birthdateInput = document.getElementById("birthdate");
const horoscopeResult = document.getElementById("horoscope-result");

submitBtn.addEventListener("click", () => {
  const birthdate = birthdateInput.value;
  const zodiacSign = determineZodiacSign(birthdate);
  const horoscope = horoscopes[zodiacSign];
  horoscopeResult.textContent = horoscope;
});

function determineZodiacSign(birthdate) {
  const [month, day, year] = birthdate.split("/").map(Number);

  // Determine the zodiac sign based on the month and day
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "aries";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "taurus";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return "gemini";
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return "cancer";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "leo";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "virgo";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return "libra";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return "scorpio";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "sagittarius";
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return "capricorn";
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "aquarius";
  } else {
    return "pisces";
  }
}

// function toggleMenu() {
//   var menu = document.querySelector(".menu");
//   if (menu.style.display === "block") {
//     menu.style.display = "none";
//   } else {
//     menu.style.display = "block";
//   }
// }

// game compabily
function calculateLove() {
  var name1 = document.getElementById('name1').value;
  var name2 = document.getElementById('name2').value;

  var lovePercentage = Math.floor(Math.random() * 101); // Generate a random number between 0 and 100

  var result = name1 + ' and ' + name2 + ' have a ' + lovePercentage + '% love compatibility!';
  document.getElementById('result').textContent = result;
}

// QCM game 

const questions = [{
    question: "Which zodiac sign is represented by the scales?",
    options: ["Aries", "Libra", "Cancer", "Leo"],
    answer: 1
  },
  {
    question: "What is the birthstone for the zodiac sign Aquarius?",
    options: ["Garnet", "Amethyst", "Opal", "Aquamarine"],
    answer: 1
  },
  {
    question: "Which planet is the ruling planet of Sagittarius?",
    options: ["Venus", "Saturn", "Jupiter", "Mercury"],
    answer: 2
  },
];

let currentQuestion = 0;
let score = 0;

// Function to display the current question and options
function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const scoreElement = document.getElementById("score");

  questionElement.textContent = questions[currentQuestion].question;

  optionsElement.innerHTML = "";
  for (let i = 0; i < questions[currentQuestion].options.length; i++) {
    const optionButton = document.createElement("button");
    optionButton.textContent = questions[currentQuestion].options[i];
    optionButton.onclick = function () {
      checkAnswer(i);
    };
    optionsElement.appendChild(optionButton);
  }

  scoreElement.textContent = "Score: " + score;
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    endGame();
  }
}

// Function to end the game and display the final score
function endGame() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const scoreElement = document.getElementById("score");
  questionElement.textContent = "Game Over";
  optionsElement.innerHTML = "";
  scoreElement.textContent = "Final Score: " + score;
}
displayQuestion();

// game  love advice 

document.addEventListener("DOMContentLoaded", function () {
  const getLoveAdviceButton = document.getElementById('getLoveAdviceButton');
  const loveAdviceMessageElement = document.getElementById('loveAdviceMessage');

  // Love advice  sign
  const loveAdviceMessages = {
    aries: "You are passionate and energetic. Focus on maintaining the excitement in your relationship and keep the flame alive.",
    taurus: "You are loyal and reliable. Build a strong foundation of trust and security in your relationship.",
    gemini: "You are curious and adaptable. Keep communication lively and engage in new experiences together.",
    cancer: "You are sensitive and nurturing. Create a harmonious and supportive environment for your relationship.",
    leo: "You are confident and generous. Show appreciation and admiration for your partner to keep the love strong.",
    virgo: "You are practical and dependable. Pay attention to the details and strive for perfection in your relationship.",
    libra: "You are diplomatic and fair. Seek balance and harmony in your relationship and prioritize open communication.",
    scorpio: "You are intense and passionate. Embrace trust and emotional intimacy in your relationship.",
    sagittarius: "You are adventurous and independent. Encourage personal growth and freedom in your relationship.",
    capricorn: "You are ambitious and responsible. Focus on long-term goals and commitment in your relationship.",
    aquarius: "You are unconventional and open-minded. Embrace individuality and intellectual stimulation in your relationship.",
    pisces: "You are compassionate and imaginative. Nurture emotional connection and foster creativity in your relationship."
  };


  // Function to retrieve love advice based on the selected zodiac sign
  function getLoveAdvice() {
    const zodiacSignSelect = document.getElementById('zodiacSignSelect');
    const selectedSign = zodiacSignSelect.value.toLowerCase();

    // Retrieve the love advice message for the selected zodiac sign
    const loveAdvice = loveAdviceMessages[selectedSign];
    loveAdviceMessageElement.textContent = loveAdvice;
  }
  getLoveAdviceButton.addEventListener('click', getLoveAdvice);
});


// carat game 
const horoscopeSymbols = [
  "♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"
];

const gameBoard = document.getElementById("game-board");
let cards = [];
let flippedCards = [];
let matchedCards = [];

// Create the game board
function createGameBoard() {
  const symbols = horoscopeSymbols.concat(horoscopeSymbols);
  symbols.sort(() => Math.random() - 0.5);

  for (let i = 0; i < symbols.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbols[i];
    card.addEventListener("click", handleCardClick);
    gameBoard.appendChild(card);
    cards.push(card);
  }
}

// Handle card click event
function handleCardClick(event) {
  const card = event.target;
  if (flippedCards.includes(card) || matchedCards.includes(card)) {
    return;
  }
  flipCard(card);

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}

// Flip the card
function flipCard(card) {
  card.innerText = card.dataset.symbol;
  card.classList.remove("hidden");
  flippedCards.push(card);
}

// Check if the flipped cards match
function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.symbol === card2.dataset.symbol) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedCards.push(card1, card2);
  } else {
    card1.innerText = "";
    card2.innerText = "";
    card1.classList.add("hidden");
    card2.classList.add("hidden");
  }
  flippedCards = [];

  if (matchedCards.length === cards.length) {
    setTimeout(showGameResult, 500);
  }
}

// Show the game result
function showGameResult() {
  const gameResult = document.getElementById("game-result");
  gameResult.innerText = "Congratulations! You have completed the game.";
}

// start  game
function resetGame() {
  gameBoard.innerHTML = "";
  cards = [];
  flippedCards = [];
  matchedCards = [];
  createGameBoard();
  const gameResult = document.getElementById("game-result");
  gameResult.innerText = "";
}
createGameBoard();


//  fortune game 
const fortunes = {

  love: "You will find love and happiness soon.",
  career: "Your career is on the rise. Expect great success.",
  health: "Take care of your health by maintaining a balanced lifestyle.",
  finances: "Financial abundance is coming your way. Keep an eye out for new opportunities.",
  relationships: "Your relationships will flourish with understanding and open communication.",
  family: "Your family bond will strengthen, bringing joy and harmony to your home.",
  travel: "Adventure awaits! A memorable journey is on the horizon.",
  personalGrowth: "Embrace personal growth and self-discovery. Unlock your full potential."
};

function revealFortune(aspect) {
  const fortuneText = fortunes[aspect];

  const fortuneElement = document.querySelector(`.${aspect}`);
  fortuneElement.innerHTML = `
      <h2>${aspect.toUpperCase()}</h2>
      <p>${fortuneText}</p>
    `;
}
function generateFortune() {
  const fortuneContainer = document.getElementById("fortune-container");
  fortuneContainer.innerHTML = `
      <div class="fortune love" onclick="revealFortune('love')">
        <h2>Love</h2>
        <p>Click to reveal your love fortune.</p>
      </div>
      <div class="fortune career" onclick="revealFortune('career')">
        <h2>Career</h2>
        <p>Click to reveal your career fortune.</p>
      </div>
      <div class="fortune health" onclick="revealFortune('health')">
        <h2>Health</h2>
        <p>Click to reveal your health fortune.</p>
      </div>
      <div class="fortune finances" onclick="revealFortune('finances')">
        <h2>Finances</h2>
        <p>Click to reveal your financial fortune.</p>
      </div>
      <div class="fortune relationships" onclick="revealFortune('relationships')">
        <h2>Relationships</h2>
        <p>Click to reveal your relationship fortune.</p>
      </div>
      <div class="fortune family" onclick="revealFortune('family')">
        <h2>Family</h2>
        <p>Click to reveal your family fortune.</p>
      </div>
      <div class="fortune travel" onclick="revealFortune('travel')">
        <h2>Travel</h2>
        <p>Click to reveal your travel fortune.</p>
      </div>
      <div class="fortune personalGrowth" onclick="revealFortune('personalGrowth')">
        <h2>Personal Growth</h2>
        <p>Click to reveal your personal growth fortune.</p>
      </div>
    `;
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('signin-link').addEventListener('click', function (event) {
    event.preventDefault();
    var signinForm = document.getElementById('signin-form');
    signinForm.style.display = (signinForm.style.display === 'none') ? 'block' : 'none';
  });
});


