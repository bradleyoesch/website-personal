var THREE_HUNDRED_MILLISECONDS = 300;

/**
 * https://github.com/jashkenas/underscore/blob/master/underscore.js#L806
 */
var throttle = function(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
};

var revealMacbookIfScrollingOver = function(macbookImg, macbookTitle, e) {
  console.log('revealMacbookIfScrollingOver')
  console.log(e)
}

var revealMacbookElements = function(macbookImg, macbookTitle) {
  console.log('revealMacbookElements')
  macbookImg.style.opacity = 1;
  macbookImg.style.top = 0;
  macbookTitle.style.opacity = 1;
  macbookTitle.style.top = 0;
}

var initMacbookFadeIn = function() {
  var contents = document.getElementsByClassName('js-content');
  var macbookContainers = document.getElementsByClassName('js-macbook-container');
  var macbookImgs = document.getElementsByClassName('js-macbook-img');
  var macbookTitles = document.getElementsByClassName('js-macbook-title');
  if (contents && contents.length === 1
      && macbookContainers && macbookContainers.length === 1
      && macbookImgs && macbookImgs.length === 1
      && macbookTitles && macbookTitles.length === 1) {

    var content = contents[0];
    var macbookContainer = macbookContainers[0];
    var macbookImg = macbookImgs[0];
    var macbookTitle = macbookTitles[0];
    var throttledScroll = throttle(revealMacbookIfScrollingOver.bind(this, macbookImg, macbookTitle), THREE_HUNDRED_MILLISECONDS);
    macbookContainer.addEventListener('scroll', throttledScroll);
    macbookContainer.addEventListener('mouseenter', revealMacbookElements.bind(this, macbookImg, macbookTitle));
  }
}


window.addEventListener('load', function() {
  initMacbookFadeIn();
});
