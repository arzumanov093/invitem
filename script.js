

var countDownDate = new Date('Jul 30, 2022 16:00:00').getTime();

var countDownFunction = setInterval(() => {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.querySelector('#days').innerHTML = days;
	document.querySelector('#hours').innerHTML = hours;
	document.querySelector('#minutes').innerHTML = minutes;
	document.querySelector('#seconds').innerHTML = seconds;

	if (distance < 0) {
		clearInterval(countDownFunction);
		var timerItem = document.querySelectorAll('.timer__item');
		timerItem.forEach(item => {
			item.classList.add('hide');
		})
		var timerTitle = document.querySelectorAll('.timer__title');
		timerTitle.forEach(item => {
			item.classList.add('hide');
		})

		var timerBody = document.querySelector('.timer__body');
		timerBody.innerHTML = 'The wedding has begun!';
		timerBody.style.padding = '7px 0';
	}

	const audio = document.querySelector('.audio'),
		play = document.querySelector('.header__logo');

	function playSong() {
		play.classList.add('play')
		audio.play();
	}
	function pauseSong() {
		play.classList.remove('play');
		audio.pause();
	}

	play.addEventListener('click', () => {
		const isPlaying = play.classList.contains('play');
		if (isPlaying) {
			pauseSong();
		} else {
			playSong()
		}

	})
}, 1000)















