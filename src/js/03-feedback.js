import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));

form.addEventListener('submit', onSubmit);

if (localStorage.getItem('feedback-form-state')) {
  try {
    const valueStorage = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    form.elements.email.value = valueStorage.email;
    form.elements.message.value = valueStorage.message;
  } catch (error) {
    console.log(error);
  }
}
function onInput() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const resultOnInput = {
    email,
    message,
  };
  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(resultOnInput));
  } catch (error) {
    console.log(error);
  }
  return resultOnInput;
}
function onSubmit(event) {
  event.preventDefault();
  console.log(onInput());
  localStorage.clear();
  event.currentTarget.reset();
}
