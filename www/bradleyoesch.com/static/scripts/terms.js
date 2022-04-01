var submitAgreement = function(agreeBtn, disagreeBtn, alreadySaved) {
  agreeBtn.className = agreeBtn.className + ' btn-success';
  disagreeBtn.setAttribute('disabled', 'disabled');
  if (!alreadySaved && localStorage) {
    localStorage.setItem('agreed', 'true');
  }
}

var initBtns = function() {
  var agreeBtns = document.getElementsByClassName('js-agree-btn');
  var disagreeBtns = document.getElementsByClassName('js-disagree-btn');
  if (agreeBtns && agreeBtns.length === 1
      && disagreeBtns && disagreeBtns.length === 1) {
    var alreadySaved = false;
    var agreeBtn = agreeBtns[0];
    var disagreeBtn = disagreeBtns[0];

    if (localStorage) {
      alreadySaved = !!localStorage.getItem('agreed');
    }
    if (alreadySaved) {
      submitAgreement(agreeBtn, disagreeBtn, alreadySaved);
    } else {
      agreeBtn.addEventListener('click', submitAgreement.bind(this, agreeBtn, disagreeBtn, alreadySaved));
      disagreeBtn.addEventListener('click', submitAgreement.bind(this, agreeBtn, disagreeBtn, alreadySaved));
    }
  }
}


window.addEventListener('load', function() {
  initBtns();
});
