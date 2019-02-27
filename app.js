window.addEventListener('load', init);
//Globals

const level = {
	easy: 8,
	medium: 5,
	hard: 3
}

const currentLevel = levels.easy;


let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-Input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#timeDisplay');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
'hat',
'river',
'lucky'

];

//Initialize Game
function init() {
	seconds.innerHTML = currentLevel;
	showWord(words);
	wordInput.addEventListener('input', startMatch);
	setInterval(countdown, 1000);
	setInterval(checkStatus, 50);
}
function startMatch(){
	if(matchWords()) {
		isPlaying = true;
		time = currentLevel +1;
		showWord(words);
		wordInput.value = '';
		score++;
	}

if( score === -1){
	scoreDisplay.innerHTML = 0;
} else {
	scoreDisplay.innerHTML = score;
}
}
function matchWords() {
	if(wordInput.value === currentWord.innerHTML){
			message.innerHTML = 'correct!!!';
			return true
		} else {
			message.innerHTML = '';
			return false;
		}
}
//Pick and show random word
function showWord(words){
	const randIndex = Math.floor(Math.random() * words.length);
	currentWord.innerHTML = words[randIndex];
}

function countdown() {
	if(time> 0) {
		time--;
	} else if(time ===0) {
		isPlaying = false;
	}

	timeDisplay.innerHTML = time; 
}

function checkStatus() {
	if(!isPlaying && time === 0) {
		message.innerHTML = 'Game Over!!!';
		score = -1;
	}
}