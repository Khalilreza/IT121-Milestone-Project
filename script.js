var formfield = document.getElementById('formfield');

function add(){
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','text');
  newField.setAttribute('class','text');
  newField.setAttribute('siz',50);
  newField.setAttribute('placeholder','Optional Field');
  formfield.appendChild(newField);
}

function remove(){
  var input_tags = formfield.getElementsByTagName('input');
  if(input_tags.length > 2) {
    formfield.removeChild(input_tags[(input_tags.length) - 1]);
  }
}
// Check for CSS transitions support
function supportsTransitions() {
  const style = document.documentElement.style;
  return 'transition' in style || 'webkitTransition' in style;
}

// Check for CSS animations support
function supportsAnimations() {
  const style = document.documentElement.style;
  return 'animation' in style || 'webkitAnimation' in style;
}

// Fade in/out animation fallback using JavaScript
function fadeInOut(element) {
  let opacity = 0;
  const delta = 0.01;
  const interval = 20;
  const duration = 2000;

  const fadeInterval = setInterval(function() {
    opacity += delta;
    element.style.opacity = opacity;

    if (opacity >= 1) {
      setTimeout(function() {
        fadeOut();
      }, duration);
      clearInterval(fadeInterval);
    }
  }, interval);

  function fadeOut() {
    const fadeOutInterval = setInterval(function() {
      opacity -= delta;
      element.style.opacity = opacity;

      if (opacity <= 0) {
        clearInterval(fadeOutInterval);
        fadeIn();
      }
    }, interval);
  }

  function fadeIn() {
    const fadeInInterval = setInterval(function() {
      opacity += delta;
      element.style.opacity = opacity;

      if (opacity >= 1) {
        clearInterval(fadeInInterval);
        fadeOut();
      }
    }, interval);
  }
}

// Check if both transitions and animations are not supported
if (!supportsTransitions() && !supportsAnimations()) {
  const element = document.querySelector('.fade-in');
  fadeInOut(element);
}
