const welcomeScreen = document.querySelector('#welcome-screen');
const letterScreen = document.querySelector('#letter-screen');
const questionScreen = document.querySelector('#question-screen');
const successScreen = document.querySelector('#success-screen');
const openLetterButton = document.querySelector('#open-letter');
const continueButton = document.querySelector('#continue-button');
const yesButton = document.querySelector('#yes-button');
const noButton = document.querySelector('#no-button');
const answerMessage = document.querySelector('#answer-message');
const copyRingButton = document.querySelector('#copy-ring-button');
const copyMessage = document.querySelector('#copy-message');

function showScreen(screenToShow, screenToHide) {
	screenToHide.classList.add('is-hidden');
	screenToHide.setAttribute('aria-hidden', 'true');
	screenToShow.classList.remove('is-hidden');
	screenToShow.setAttribute('aria-hidden', 'false');
}

function acceptProposal() {
	showScreen(successScreen, questionScreen);
}

openLetterButton.addEventListener('click', () => {
	showScreen(letterScreen, welcomeScreen);
});

continueButton.addEventListener('click', () => {
	showScreen(questionScreen, letterScreen);
});

yesButton.addEventListener('click', acceptProposal);

noButton.addEventListener('click', () => {
	if (noButton.dataset.converted === 'true') {
		acceptProposal();
		return;
	}

	noButton.dataset.converted = 'true';
	noButton.textContent = 'Sim! ♡';
	noButton.classList.add('no-button--converted');
	noButton.setAttribute('aria-label', 'Sim, quero namorar com você');
	answerMessage.textContent = 'Acho que essa era a resposta certa. ♡';
});

copyRingButton.addEventListener('click', async () => {
	try {
		await navigator.clipboard.writeText('💍');
		copyMessage.textContent = 'Aliança copiada! Agora é só colar na bio. ♡';
	} catch {
		copyMessage.textContent = 'Selecione e copie esta aliança: 💍';
	}
});
