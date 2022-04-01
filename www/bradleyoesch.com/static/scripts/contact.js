var submitForm = function(submitMsg, formValues) {
  [].forEach.call(formValues, function(formValue) {
    formValue.value = '';
  });
  submitMsg.style.display = '';
}

var initSubmitForm = function() {
  var submitBtns = document.getElementsByClassName('js-submit-btn');
  var submitMsgs = document.getElementsByClassName('js-submit-msg');
  var formValues = document.getElementsByClassName('js-form-value');
  if (submitBtns && submitBtns.length === 1
      && submitMsgs && submitMsgs.length === 1
      && formValues && formValues.length > 1) {
    submitBtns[0].addEventListener('click', submitForm.bind(this, submitMsgs[0], formValues));
  }
}


window.addEventListener('load', function() {
  initSubmitForm();
});
