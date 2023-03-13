const yesBtn = document.querySelector('#yes-btn');
const noBtn = document.querySelector('#no-btn');

yesBtn.addEventListener('click', () => {
  alert('Fofa... Te amo <3');
});

noBtn.addEventListener('click', () => {
  noBtn.classList.add('move');
  alert('Aff.. otária :(');
});
