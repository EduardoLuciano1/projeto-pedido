const welcomeScreen = document.querySelector('#welcome-screen');
const memoriesScreen = document.querySelector('#memories-screen');
const letterScreen = document.querySelector('#letter-screen');
const adjectivesScreen = document.querySelector('#adjectives-screen');
const questionScreen = document.querySelector('#question-screen');
const openLetterButton = document.querySelector('#open-letter');
const continueButton = document.querySelector('#continue-button');
const adjectivesContinueButton = document.querySelector('#adjectives-continue');
const memoryImage = document.querySelector('#memory-image');
const memoryCounter = document.querySelector('#memory-counter');
const nextMemoryButton = document.querySelector('#next-memory');
const backgroundMusic = document.querySelector('#background-music');
let currentMemory = 0;

const memoryPhotos = [
	'assets/foto-01.jpeg',
	'assets/foto-02.jpeg',
	'assets/foto-03.jpeg',
	'assets/foto-04.png',
	'assets/foto-05.png',
	'assets/foto-06.png'
];

function showScreen(screenToShow, screenToHide) {
	screenToHide.classList.add('is-hidden');
	screenToHide.setAttribute('aria-hidden', 'true');
	screenToShow.classList.remove('is-hidden');
	screenToShow.setAttribute('aria-hidden', 'false');
}

openLetterButton.addEventListener('click', async () => {
	showScreen(memoriesScreen, welcomeScreen);
	backgroundMusic.volume = 0.12;
	try {
		await backgroundMusic.play();
	} catch {}
});

nextMemoryButton.addEventListener('click', () => {
	currentMemory += 1;

	if (currentMemory >= memoryPhotos.length) {
		showScreen(letterScreen, memoriesScreen);
		return;
	}

	memoryImage.classList.add('is-changing');
	memoryImage.src = memoryPhotos[currentMemory];
	memoryCounter.textContent = `${currentMemory + 1} / ${memoryPhotos.length}`;
	window.setTimeout(() => memoryImage.classList.remove('is-changing'), 50);
	if (currentMemory === memoryPhotos.length - 1) {
		nextMemoryButton.innerHTML = 'Ver minha carta <span aria-hidden="true">→</span>';
	}
});

continueButton.addEventListener('click', () => {
	showScreen(adjectivesScreen, letterScreen);
});

adjectivesContinueButton.addEventListener('click', () => {
	showScreen(questionScreen, adjectivesScreen);
});


