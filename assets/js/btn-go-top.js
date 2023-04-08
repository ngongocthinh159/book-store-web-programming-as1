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
