
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      if (getComputedStyle(menu).display === 'none') {
        menu.style.display = 'flex';
      } else {
        menu.style.display = 'none';
      }
    });
  }
});
