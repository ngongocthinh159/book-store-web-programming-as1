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

const handleBtnGoTop = () => {
  let btn = document.querySelector('#btn-go-top');

  window.onscroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btn.classList.remove('btn-go-top--hide');
    } else {
      btn.classList.add('btn-go-top--hide');
    }
  };

  btn.addEventListener('click', function (e) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

export { handleBtnGoTop };
