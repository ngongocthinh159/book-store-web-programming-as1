function setupCarousel(
  carouselId,
  autoSwipe = false,
  swipeEach = 2000,
  delayTime = 0
) {
  let ul = document.querySelector(`#${carouselId} .carousel__list`);
  let items = document.querySelectorAll(`#${carouselId} .carousel__item`);
  const nextBtn = document.querySelector(`#${carouselId} .carousel__next-btn`);
  const prevBtn = document.querySelector(`#${carouselId} .carousel__prev-btn`);
  let currentSetIntervalId = null;
  let isNext = true;

  function scrollToActiveItem() {
    const activeItem = document.querySelector(
      `#${carouselId} .carousel__item--active`
    );
    activeItem.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function getActiveIndex() {
    let activeIndex;
    for (let i = 0; i < ul.children.length; i++) {
      if (ul.children[i].classList.contains('carousel__item--active')) {
        activeIndex = i;
        break;
      }
    }

    return activeIndex;
  }

  function toggleControlBtn() {
    let currentActiveIndex = getActiveIndex();
    let shouldNext =
      currentActiveIndex === ul.children.length - 1 ? false : true;
    let shouldPrev = currentActiveIndex === 0 ? false : true;

    if (!shouldNext) {
      nextBtn.setAttribute('disabled', '');
    } else {
      nextBtn.removeAttribute('disabled');
    }
    nextBtn.classList.toggle('carousel__next-btn--disabled', !shouldNext);

    if (!shouldPrev) {
      prevBtn.setAttribute('disabled', '');
    } else {
      prevBtn.removeAttribute('disabled');
    }
    prevBtn.classList.toggle('carousel__prev-btn--disabled', !shouldPrev);
  }

  // scrollToActiveItem();
  toggleControlBtn();

  nextBtn.addEventListener('click', (e) => {
    let currentActiveIndex = getActiveIndex();
    items[currentActiveIndex].classList.remove('carousel__item--active');
    currentActiveIndex++;
    items[currentActiveIndex].classList.add('carousel__item--active');
    scrollToActiveItem();
    toggleControlBtn();

    // Clear interval auto swipe, then set back
    // if (currentSetIntervalId) {
    //   clearInterval(currentSetIntervalId);
    //   currentSetIntervalId = autoSwipeNow();
    // }
  });

  prevBtn.addEventListener('click', (e) => {
    let currentActiveIndex = getActiveIndex();
    items[currentActiveIndex].classList.remove('carousel__item--active');
    currentActiveIndex--;
    items[currentActiveIndex].classList.add('carousel__item--active');
    scrollToActiveItem();
    toggleControlBtn();

    // Clear interval auto swipe, then set back
    // if (currentSetIntervalId) {
    //   clearInterval(currentSetIntervalId);
    //   currentSetIntervalId = autoSwipeNow();
    // }
  });

  // Swipe in mobile;
  let start = null;
  ul.addEventListener('touchstart', function (event) {
    if (event.touches.length === 1) {
      //just one finger touched
      start = event.touches.item(0).clientX;
    } else {
      //a second finger hit the screen, abort the touch
      start = null;
    }
  });

  ul.addEventListener('touchend', function (event) {
    let offset = 30; //at least 30px are a swipe
    if (start) {
      //the only finger that hit the screen left it
      let end = event.changedTouches.item(0).clientX;

      if (end - start > offset) {
        //a left -> right swipe
        prevBtn.click();
      }
      if (start - end > offset) {
        //a right -> left swipe
        nextBtn.click();
      }
    }
  });

  // Auto swipe
  function autoSwipeNow() {
    return setInterval(() => {
      if (isNext) {
        if (!nextBtn.hasAttribute('disabled')) {
          nextBtn.click();
        } else {
          isNext = false;
          prevBtn.click();
        }
      } else {
        if (!prevBtn.hasAttribute('disabled')) {
          prevBtn.click();
        } else {
          isNext = true;
          nextBtn.click();
        }
        return;
      }
    }, swipeEach);
  }
  if (autoSwipe) {
    setTimeout(() => {
      currentSetIntervalId = autoSwipeNow();
    }, delayTime);
  }
}

export { setupCarousel };
