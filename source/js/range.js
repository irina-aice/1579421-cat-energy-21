let imageBefore = document.querySelector('.result__image-wrapper');
let rangeScale = document.querySelector('.range__scale');

let buttonBefore = document.querySelector('.range__button--before');
let buttonAfter = document.querySelector('.range__button--after');

buttonBefore.addEventListener('click', function () {
  imageBefore.style.width = '100%';
  rangeScale.style.left = '0%';
  rangeScale.style.right = 'auto';
});

buttonAfter.addEventListener('click', function () {
  imageBefore.style.width = '0%';
  rangeScale.style.left = 'auto';
  rangeScale.style.right = '0%';
});
