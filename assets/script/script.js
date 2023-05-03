let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let showText = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = ' No number!';
    showText(' No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = ' Correct Number!';
    showText(' Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#f0ffff';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Your number is too big!' : 'Your number is too small!';
      showText(guess > secretNumber ? 'Your number is too big!' : 'Your number is too small!');
      score--; //score=score-1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'Game over';
      showText('Game over!')
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Enter a number...';
  showText('Enter a number...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#f0ffff';
  document.querySelector('.number').style.width = '15rem';
});