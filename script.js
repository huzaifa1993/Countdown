const inputContainer = document.getElementById('input-container');
const countDownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const today = new Date().toISOString().split('T')[0];
// console.log(today)
dateEl.setAttribute('min', today);