// 'use strict';

const checkbox = document.querySelector('.checkbox');
const basicPlanPrice = document.querySelector('.basic-plan-price');
const professionalPlanPrice = document.querySelector(
  '.professional-plan-price'
);
const masterPlanPrice = document.querySelector('.master-plan-price');

checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    basicPlanPrice.innerHTML = `<span>$</span>19.99`;
    professionalPlanPrice.innerHTML = `<span>$</span>24.99`;
    masterPlanPrice.innerHTML = `<span>$</span>39.99`;
  } else {
    basicPlanPrice.innerHTML = `<span>$</span>199.99`;
    professionalPlanPrice.innerHTML = `<span>$</span>244.99`;
    masterPlanPrice.innerHTML = `<span>$</span>399.99`;
  }
});
