var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

window.addEventListener('load', function() {
  var days = document.getElementsByClassName('js-day');
  if (days && days.length === 1) {
    var today = DAYS[new Date().getDay()];
    days[0].textContent = today;
  }
});
