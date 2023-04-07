const handleBurgerMenu = function () {
  const checkBox = document.querySelector('.header__mobile-menu-checkbox');
  const navList = document.querySelector('.header__nav-list');
  checkBox.addEventListener('change', (e) => {
    if (checkBox.checked) {
      navList.style.setProperty('display', 'block');
    } else {
      navList.style.setProperty('display', 'none');
    }
  });

  function handleMatchMedia(matchObject) {
    if (matchObject.matches) {
      navList.style.setProperty('display', 'none');
    } else {
      navList.style.setProperty('display', 'flex');
    }
    checkBox.checked = false;
  }
  let matchMediaObject = window.matchMedia('(max-width: 739px)');
  matchMediaObject.addListener(handleMatchMedia); // Attach listener function on state changes
}

export { handleBurgerMenu };
