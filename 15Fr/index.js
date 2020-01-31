document.addEventListener('DOMContentLoaded', () => {
  
  const padlockElement = document.querySelector('#padlock');
  const textElement = document.querySelector('#text');
  padlockElement.addEventListener('mouseenter', () => {
    textElement.style.visibility = 'visible';
  });
  padlockElement.addEventListener('mouseleave', () => {
    textElement.style.visibility = 'hidden';
  });
});