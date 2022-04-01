var NAV_MENU_SHOW_REGEX = new RegExp(`(?:^|\\s)nav-menu--show(?!\\S)`);

var openMenu = function(navMenu, navMenuCover) {
  navMenu.className += ' nav-menu--show';
  navMenuCover.className += ' nav-menu--show';
}

var closeMenu = function(navMenu, navMenuCover) {
  navMenu.className = navMenu.className.replace(NAV_MENU_SHOW_REGEX, '');
  navMenuCover.className = navMenuCover.className.replace(NAV_MENU_SHOW_REGEX, '');
}

var initNavMenu = function() {
  var navMenus = document.getElementsByClassName('js-nav-menu');
  var navMenuCovers = document.getElementsByClassName('js-nav-menu--cover');
  var navMenuOpens = document.getElementsByClassName('js-nav-menu--open');
  var navMenuCloses = document.getElementsByClassName('js-nav-menu--close');
  if (navMenus && navMenus.length === 1
      && navMenuCovers && navMenuCovers.length === 1
      && navMenuOpens && navMenuOpens.length === 1
      && navMenuCloses && navMenuCloses.length === 1) {

    var navMenu = navMenus[0];
    var navMenuCover = navMenuCovers[0];
    navMenuOpens[0].addEventListener('click', openMenu.bind(this, navMenu, navMenuCover));
    navMenuCloses[0].addEventListener('click', closeMenu.bind(this, navMenu, navMenuCover));
    navMenuCover.addEventListener('click', closeMenu.bind(this, navMenu, navMenuCover));
  }
}


window.addEventListener('load', function() {
  initNavMenu();

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-85394854-1', 'auto');
  ga('send', 'pageview');
});
