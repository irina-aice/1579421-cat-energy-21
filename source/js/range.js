let imageBefore = document.querySelector('.js-image-before');
let rangeScale = document.querySelector('.js-range-scale');

let buttonBefore = document.querySelector('.js-range-button-before');
let buttonAfter = document.querySelector('.js-range-button-after');

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
