import $ from 'jquery';

// used to keep track of mobile navigation being open
var isTriggeredMobileNav = 0
// used to keep track of stay informed in navigation being open
var isTriggeredStayInformed = 0

var stayInformedTrigger = document.getElementById('stay-informed-trigger')
var stayMobileTrigger = document.querySelector('.site-mobile-trigger')
var stayInformedBody = document.querySelector('.site-stay-informed')
var header = document.querySelector('header')

var stayInformedHide = function() {
  $(header).removeClass('site-header--isStayInformed')
  isTriggeredStayInformed = false
}


var stayInformedShow = function() {
  $(header).addClass('site-header--isStayInformed')
  isTriggeredStayInformed = true
}


const mobileNavHide = function() {
  $(header).removeClass('site-header--isMobileNav')
  isTriggeredMobileNav = false
}


var mobileNavShow = function() {
  $(header).addClass('site-header--isMobileNav')
  isTriggeredMobileNav = true
}

// toggle stay informed on click
stayInformedTrigger.addEventListener('click', function() {
  if(isTriggeredStayInformed) {
    stayInformedHide()
  } else {
    stayInformedShow()
  }
});


// click event - toggle mobile navigation
stayMobileTrigger.addEventListener('click', function() {

  if(isTriggeredMobileNav) {
    // if mobile navigation is open hide it
    mobileNavHide()
  } else if (isTriggeredStayInformed){
    // if stay informed is open hide it
    stayInformedHide()
  }
  else {
    // if stay informed is open show it
    mobileNavShow()
  }
});

// on click of navigation item hide mobile navigation
$('.site-nav__item').click(mobileNavHide)



