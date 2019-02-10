const form = document.querySelector('.js-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  deleteComments();
}, false);

function deleteComments() {
  let regexp = /(\/\*([^*]|(\*+([^*/])))*\*+\/)|(\/\/.*$)/gm;
  let input = document.querySelector('.js-input-file');
  let output = document.querySelector('.js-output-file');
  console.log(input.value.replace(regexp, ''));
  output.value = input.value.replace(regexp, ' ');
}