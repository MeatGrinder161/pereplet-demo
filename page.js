const button = document.querySelector('#about-toggle');
const details = document.querySelector('#about');
button.addEventListener('click', () => {
  details.hidden = !details.hidden;
  button.setAttribute('aria-expanded', String(!details.hidden));
});
