

const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbw45bpmxzLIrUHzQFjf-VeS1Jy2WRN0XM8MB8HADQ6p9bSCD9ZRrbq_sOSeqWE2RbJNCg/exec'
//'https://script.google.com/macros/s/AKfycbw6ZeQwJoRl81TcDdlaKZ3uHlFHyLqvcsFvHaAPg4W7i3qGVDweH_aIlNvIJBbU2yxVhg/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
      if (response.ok){
       alert('Success!'); //only display message
    } else {
      throw new Error('Network response was not ok.');
    }
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!' + error.message);
      submitButton.disabled = false;

    });
});