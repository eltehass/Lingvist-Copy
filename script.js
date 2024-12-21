// script.js

// Vocabulary Data
const vocabulary = [
    { word: "cat", sentence: "I have a ___ at home.", translation: "кошка" },
    { word: "run", sentence: "I ___ every morning to stay fit.", translation: "бегать" },
    { word: "book", sentence: "I am reading a very interesting ___.", translation: "книга" },
    { word: "house", sentence: "This is my ___.", translation: "дом" },
    { word: "apple", sentence: "An ___ a day keeps the doctor away.", translation: "яблоко" },
    // Add at least 1,000 more entries for a full vocabulary
];

// State Variables
let currentIndex = 0;
let wordsLearned = 0;

// DOM Elements
const sentenceEl = document.getElementById("sentence");
const answerEl = document.getElementById("answer");
const feedbackEl = document.getElementById("feedback");
const checkBtn = document.getElementById("check-btn");
const wordsLearnedEl = document.getElementById("words-learned");

// Load First Word
function loadWord() {
    const currentWord = vocabulary[currentIndex];
    sentenceEl.textContent = currentWord.sentence.replace("___", "...");
    feedbackEl.textContent = "";
    answerEl.value = "";
}

// Check Answer
function checkAnswer() {
    const userAnswer = answerEl.value.trim().toLowerCase();
    const correctAnswer = vocabulary[currentIndex].word.toLowerCase();

    if (userAnswer === correctAnswer) {
        feedbackEl.textContent = "Correct! 🎉";
        feedbackEl.style.color = "green";
        wordsLearned++;
        wordsLearnedEl.textContent = wordsLearned;
        currentIndex = (currentIndex + 1) % vocabulary.length;
        setTimeout(loadWord, 1000); // Load next word after 1 second
    } else {
        feedbackEl.textContent = `Incorrect. The correct word is "${correctAnswer}" (${vocabulary[currentIndex].translation}).`;
        feedbackEl.style.color = "red";
    }
}

// Event Listener for Check Button
checkBtn.addEventListener("click", checkAnswer);

// Event Listener for Enter Key Press
answerEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

// Load First Word with Translation
function loadWord() {
  const currentWord = vocabulary[currentIndex];
  sentenceEl.textContent = currentWord.sentence.replace("___", "...");
  translationEl.textContent = `Translation: ${currentWord.translation}`;
  feedbackEl.textContent = "";
  answerEl.value = "";
}

// DOM Elements
const translationEl = document.getElementById("translation");

// Event Listener
checkBtn.addEventListener("click", checkAnswer);

// Initialize App
loadWord();

// Initialize App
loadWord();