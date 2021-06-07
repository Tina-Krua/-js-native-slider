let carousel = new Carousel();

carousel.init();


// (function () {

//   const container = document.querySelector('#carousel');
//   const slides = document.querySelectorAll('.slide');
//   const indicatorsContainer = container.querySelector('#indicators-container');
//   const indicators = indicatorsContainer.querySelectorAll('.indicator');
//   const pauseBtn = container.querySelector('#pause-btn');
//   const prevBtn = container.querySelector('#prev-btn');
//   const nextBtn = container.querySelector('#next-btn');

//   const SLIDES_COUNT = slides.length;
//   const SPACE = ' ';
//   const LEFT_ARROW = 'ArrowLeft';
//   const RIGHT_ARROW = 'ArrowRight';
//   const FA_PAUSE = '<i class="far fa-pause-circle"></i>';
//   const FA_PLAY = '<i class="far fa-play-circle"></i>';

//   let currentSlide = 0;
//   let timerID = null;
//   let interval = 2000;
//   let isPlaying = true;
//   let swipeStartX = null;
//   let swipeEndX = null;

//   function gotoSlide(n) {
//     slides[currentSlide].classList.toggle('active');
//     indicators[currentSlide].classList.toggle('active');
//     currentSlide = (n + SLIDES_COUNT) % SLIDES_COUNT;
//     indicators[currentSlide].classList.toggle('active');
//     slides[currentSlide].classList.toggle('active');
//   }

//   const prevSlide = () => gotoSlide(currentSlide - 1);

//   const nextSlide = () => gotoSlide(currentSlide + 1);

//   function pause() {
//     if (isPlaying) {
//       clearInterval(timerID);
//       pauseBtn.innerHTML = FA_PLAY;
//       isPlaying = !isPlaying;
//     }
//   }

//   function play() {
//     timerID = setInterval(nextSlide, interval);
//     pauseBtn.innerHTML = FA_PAUSE;
//     isPlaying = !isPlaying;
//   }

//   const pausePlay = () => isPlaying ? pause() : play();

//   function prev() {
//     pause();
//     prevSlide();
//   }

//   function next() {
//     pause();
//     nextSlide();
//   }

//   function indicate(e) {
//     const target = e.target;

//     if (target.classList.conteins('indicator')) {
//       pause();
//       gotoSlide(+target.getAtribute('data-slide-to'));
//     }
//   }

//   function pressKey(e) {
//     if (e.Key === LEFT_ARROW) prev();
//     if (e.Key === RIGHT_ARROW) next();
//     if (e.Key === SPACE) pausePlay();
//   }

//   function swipeStart(e) {
//     swipeStartX = e.changedTouches[0].pageX;
//   }

//   function swipeEnd(e) {
//     swipeEndX = e.changedTouches[0].pageX;
//     swipeStartX - swipeEndX > 100 && next();
//     swipeStartX - swipeEndX < -100 && prev();
//   }

//   function initListeners() {
//     pauseBtn.addEventListener('click', pausePlay);
//     prevBtn.addEventListener('click', prev);
//     nextBtn.addEventListener('click', next);
//     indicatorsContainer.addEventListener('click', indicate);
//     document.addEventListener('keydown', pressKey);
//     container.addEventListener('touchstart', swipeStart);
//     container.addEventListener('touchend', swipeEnd);
//   }

//   function init() {
//     initListeners();
//     timerID = setInterval(nextSlide, interval);
//   }

//     init();

// }());