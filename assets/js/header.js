/**
 * RMIT University Vietnam
 * Course: COSC2430 Web Programming
 * Semester: 2023A
 * Assessment: Assignment 1
 * Author: Ngo Ngoc Thinh
 * ID: s3879364
 * Acknowledgement:
 *   1. https://fullstack.edu.vn/
 *   2. https://gacxepbookstore.vn/
 *   3. https://www.figma.com/community/file/1187662275043405075
 *   4. https://www.figma.com/community/file/1165460163859589084
 */

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
};

export { handleBurgerMenu };
