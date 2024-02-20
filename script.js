
var questions = [
  { hindi: 'वह स्कूल जाता है', english: 'He goes to school' },
  { hindi: 'ट्रेन आ रही है', english: 'Train is arriving' },
  { hindi: 'वह एक शरारती लड़का है', english: 'He is a naughty boy' },
  { hindi: 'जावास्क्रिप्ट एक महान भाषा है', english: 'JavaScript is a great language' },
  { hindi: 'वेब विकास महान है', english: 'Web Development is great' },
];

var currentQuestionIndex = 0;

function displayQuestion() {
  var questionElement = document.getElementById('question');
  var translationContainer = document.getElementById('translation-container');
  var answerInput = document.getElementById('answer');

  questionElement.textContent = questions[currentQuestionIndex].hindi;
  translationContainer.innerHTML = '<input type="text" id="answer" placeholder="Click on Speak to answer">';
  answerInput = document.getElementById('answer');
}

function checkAnswer() {
  var userAnswer = document.getElementById('answer').value.toLowerCase();
  var correctAnswer = questions[currentQuestionIndex].english;
  var explanationContainer = document.getElementById('explanation');

  if (userAnswer === correctAnswer.toLowerCase()) {
      explanationContainer.innerHTML = 'Correct! Well done!';
      explanationContainer.style.backgroundColor = "#90b692";
      explanationContainer.style.color = "#115713";
      explanationContainer.style.borderRadius = "15px"
      explanationContainer.style.textAlign = "center";
      
      nextButton.classList.remove('hidden');
  } else {
      explanationContainer.innerHTML = 'Incorrect. Try again!';
      explanationContainer.style.color = "#7f1416";
      explanationContainer.style.backgroundColor = "#ffbebd";
      explanationContainer.style.borderRadius = "15px";
      explanationContainer.style.textAlign = "center";
      
      nextButton.classList.remove('hidden');
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  var checkButton = document.getElementById('check-btn');
  var nextButton = document.getElementById('next-btn');
  var explanationContainer = document.getElementById('explanation');

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    checkButton.disabled = false;
    nextButton.addClassList("hidden");
    explanationContainer.innerHTML = '';
    explanationContainer.addClassList("hidden");
  } else {
    explanationContainer.innerHTML = 'Quiz completed!';
    checkButton.disabled = true;
    nextButton.addClassList("hidden");
    explanationContainer.addClassList("hidden");
  }
}

function voice() {
  var recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  var answerInput = document.getElementById('answer');

  recognition.lang = 'en-US';
  recognition.onresult = function (event) {
    var voiceAnswer = event.results[0][0].transcript.toLowerCase();
    answerInput.value = voiceAnswer;
  };

  recognition.start();
}

displayQuestion();

// var questions = [
//   { hindi: 'वह स्कूल जाता है', english: 'He goes to school' },
//   { hindi: 'ट्रेन आ रही है', english: 'Train is arriving' },
//   { hindi: 'वह एक शरारती लड़का है', english: 'He is a naughty boy' },
//   { hindi: 'जावास्क्रिप्ट एक महान भाषा है', english: 'JavaScript is a great language' },
//   { hindi: 'वेब विकास महान है', english: 'Web Development is great' },
// ];

// var currentQuestionIndex = 0;

// function displayQuestion() {
//   var questionElement = document.getElementById('question');
//   var translationContainer = document.getElementById('translation-container');
//   var answerInput = document.getElementById('answer');

//   questionElement.textContent = questions[currentQuestionIndex].hindi;
//   translationContainer.innerHTML = '<input type="text" id="answer" placeholder="Click on Speak to answer">';
//   answerInput = document.getElementById('answer');
// }

// function checkAnswer() {
//   var userAnswer = document.getElementById('answer').value.toLowerCase();
//   var correctAnswer = questions[currentQuestionIndex].english;
//   var explanationContainer = document.getElementById('explanation');

//   if (userAnswer === correctAnswer.toLowerCase()) {
//       explanationContainer.innerHTML = 'Correct! Well done!';
//       explanationContainer.style.backgroundColor = "#b6f2aa";
//       explanationContainer.style.color = "#062902";
      
//       nextButton.classList.remove('hidden');
//   } else {
//       explanationContainer.innerHTML = 'Incorrect. Try again!';
//       explanationContainer.style.color = "#610d02";
//       explanationContainer.style.backgroundColor = "#c28b84";
//       nextButton.classList.remove('hidden');
//   }
// }

// function nextQuestion() {
//   currentQuestionIndex++;
//   var checkButton = document.getElementById('check-btn');
//   var nextButton = document.getElementById('next-btn');
//   var explanationContainer = document.getElementById('explanation');

//   if (currentQuestionIndex < questions.length) {
//       displayQuestion();
//       checkButton.disabled = false;
//       nextButton.classList.add('hidden');
//       explanationContainer.innerHTML = '';
//       explanationContainer.classList.add('hidden');
//   } else {
//       explanationContainer.innerHTML = 'Quiz completed!';
//       checkButton.disabled = true;
//       nextButton.classList.add('hidden');
//       explanationContainer.classList.add('hidden');
//   }
// }

// function voice() {
//   var recognition = new webkitSpeechRecognition() || new SpeechRecognition();
//   var answerInput = document.getElementById('answer');

//   recognition.lang = 'en-US';
//   recognition.onresult = function (event) {
//       var voiceAnswer = event.results[0][0].transcript.toLowerCase();
//       answerInput.value = voiceAnswer;
//   };

//   recognition.start();
// }

// displayQuestion();