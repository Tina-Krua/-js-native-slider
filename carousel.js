function Carousel() {
  this.container = document.querySelector('#carousel');
  this.slides = this.container.querySelectorAll('.slide');
  this.indicatorsContainer = this.container.querySelector('#indicators-container');
  this.indicators = this.indicatorsContainer.querySelectorAll('.indicator');
  this.pauseBtn = this.container.querySelector('#pause-btn');
  this.prevBtn = this.container.querySelector('#prev-btn');
  this.nextBtn = this.container.querySelector('#next-btn');

  this.interval = 1000;

  this._initProps();
}

Carousel.prototype = {

  _initProps() {
    this.currentSlide = 0;
    this.timerID = null;
    this.isPlaying = true;
    this.swipeStartX = null;
    this.swipeEndX = null;

    this.SLIDES_COUNT = this.slides.length;
    this.SPACE = ' ';
    this.LEFT_ARROW = 'ArrowLeft';
    this.RIGHT_ARROW = 'ArrowRight';
    this.FA_PAUSE = '<i class="far fa-pause-circle"></i>';
    this.FA_PLAY = '<i class="far fa-play-circle"></i>';
  },

  gotoSlide(n) {
    this.slides[this.currentSlide].classList.toggle('active');
    this.indicators[this.currentSlide].classList.toggle('active');
    this.currentSlide = (n + this.SLIDES_COUNT) % this.SLIDES_COUNT;
    this.indicators[this.currentSlide].classList.toggle('active');
    this.slides[this.currentSlide].classList.toggle('active');
  },

  prevSlide() {
    this.gotoSlide(this.currentSlide - 1)
  },

  nextSlide() {
    this.gotoSlide(this.currentSlide + 1)
  },

  pause() {
    if (this.isPlaying) {
      clearInterval(this.timerID);
      this.pauseBtn.innerHTML = this.FA_PLAY;
      this.isPlaying = !this.isPlaying;
    }
  },

  play() {
    this.timerID = setInterval(() => this.nextSlide(), this.interval);
    this.pauseBtn.innerHTML = this.FA_PAUSE;
    this.isPlaying = !this.isPlaying;
  },

  pausePlay() {
    this.isPlaying ? this.pause() : this.play();
  },

  prev() {
    this.pause();
    this.prevSlide();
  },

  next() {
    this.pause();
    this.nextSlide();
  },

  indicate(e) {
    const target = e.target;

    if (target.classList.conteins('indicator')) {
      this.pause();
      this.gotoSlide(+target.getAtribute('data-slide-to'));
    }
  },

  pressKey(e) {
    if (e.Key === this.LEFT_ARROW) this.prev();
    if (e.Key === this.RIGHT_ARROW) this.next();
    if (e.Key === this.SPACE) this.pausePlay();
  },

  swipeStart(e) {
    this.swipeStartX = e.changedTouches[0].pageX;
  },

  swipeEnd(e) {
    this.swipeEndX = e.changedTouches[0].pageX;
    this.swipeStartX - this.swipeEndX > 100 && this.next();
    this.swipeStartX - this.swipeEndX < -100 && this.prev();
  },

  initListeners() {
    this.pauseBtn.addEventListener('click', this.pausePlay.bind(this));
    this.prevBtn.addEventListener('click', this.prev.bind(this));
    this.nextBtn.addEventListener('click', this.next.bind(this));
    this.indicatorsContainer.addEventListener('click', this.indicate.bind(this));
    document.addEventListener('keydown', this.pressKey.bind(this));
    this.container.addEventListener('touchstart', this.swipeStart.bind(this));
    this.container.addEventListener('touchend', this.swipeEnd.bind(this));
  },

  init() {
    this.initListeners();
    this.timerID = setInterval(() => this.nextSlide(), this.interval);
  }

};
