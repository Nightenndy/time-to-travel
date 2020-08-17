(function () {
  let slides = document.querySelectorAll('.slide');
  let carousel = document.querySelector('.carousel');
  let pauseButton = document.querySelector('#pause');
  let next = document.querySelector('#next');
  let previous = document.querySelector('#previous');
  let sliderBtn = document.querySelector('.sliderBtn');
  let indicatorsContainer = document.querySelector('.indicators');
  let indicators = document.querySelectorAll('.indicator');

  let currentSlide = 0;
  let isPlaying = true;
  let interval = 3000;
  let slidesLenght = slides.length;
  let timerID = null;

  let gotoSlide = (n) => {
    slides[currentSlide].classList.toggle('active');
    indicators[currentSlide].classList.toggle('active');
    currentSlide = (n + slidesLenght) % slidesLenght;
    slides[currentSlide].classList.toggle('active');
    indicators[currentSlide].classList.toggle('active');
  };

  let gotoNextSlide = () => {
    gotoSlide(currentSlide + 1);
  };

  let gotoPrevSlide = () => {
    gotoSlide(currentSlide - 1);
  };

  let pause = () => {
    if (isPlaying) {
      pauseButton.innerHTML = 'Play';
      isPlaying = !isPlaying;
      clearInterval(timerID);
    }
  };

  let play = () => {
    pauseButton.innerHTML = 'Pause';
    isPlaying = true;
    timerID = setInterval(gotoNextSlide, interval);
  };

  let clickPause = () => isPlaying ? pause() : play();

  let clickNext = () => {
    pause();
    gotoNextSlide();
  };

  let clickPrev = () => {
    pause();
    gotoPrevSlide();
  };

  let clickIndicatorButton = (e) => {
    let target = e.target;
    if (target.classList.contains('indicator')) {
      pause();
      gotoSlide(+target.getAttribute('data-slide-to'));
    }
  };

  let other = () => {
    timerID = setInterval(gotoNextSlide, interval);
    indicatorsContainer.style.display = 'flex';

  }

  other();
}());