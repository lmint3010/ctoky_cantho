document.addEventListener('DOMContentLoaded', function() {

  var pone = document.querySelector('.parallax-one');
  var ptwo = document.querySelector('.parallax-two');
  var pthree = document.querySelector('.parallax-three');
  
  window.addEventListener('scroll', function() {
    var wScroll = this.pageYOffset;

    pone.style.transform = `translate(0px, ${wScroll / 5}%)`;
    ptwo.style.transform = `translate(0px, ${wScroll / 6}%)`;
    pthree.style.transform = `translate(0px, -${wScroll / 14}%)`;
  });

  // Scroll Monitor Handler
  var leftMonitorElement = document.querySelectorAll('.left-monitor');
  var rightMonitorElement = document.querySelectorAll('.right-monitor');
  var centerMonitorElement = document.querySelectorAll('.center-monitor');
  var popupMonitorElement = document.querySelectorAll('.popup-monitor');

  // For Left Animations
  for(let i = 0; i < leftMonitorElement.length; i++) {
    let leftElementWatched = scrollMonitor.create(leftMonitorElement[i]);
    let leftMonitorStatus = false;
    leftElementWatched.fullyEnterViewport(function() {
      leftMonitorElement[i].classList.add('left-in');
    });
  }

  // For Right Animation
  for(let i = 0; i < rightMonitorElement.length; i++) {
    let rightElementWatched = scrollMonitor.create(rightMonitorElement[i]);
    let rightMonitorStatus = false;
    rightElementWatched.fullyEnterViewport(function() {
      rightMonitorElement[i].classList.add('right-in');
    });
  }

  // For Popup Animation
  for(let i = 0; i < popupMonitorElement.length; i++) {
    let popupElementWatched = scrollMonitor.create(popupMonitorElement[i]);
    let popupMonitorStatus = false;
    popupElementWatched.fullyEnterViewport(function() {
      popupMonitorElement[i].classList.add('popup');
    });
  }

  // For Center Animation
  for(let i = 0; i < centerMonitorElement.length; i++) {
    let centerElementWatched = scrollMonitor.create(centerMonitorElement[i]);
    let centerMonitorStatus = false;
    centerElementWatched.fullyEnterViewport(function() {
      centerMonitorElement[i].classList.add('down-in');
    });
  }

}, false);