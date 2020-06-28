let username;
let password;

// Elements
let inputs = document.querySelectorAll('input');
let btnLogin = document.getElementById('btn-login');

inputs.forEach((input) => {
  // Input Fields Focus Styles
  input.addEventListener('focusin', (e) => {
    let parent = e.target.parentNode;
    parent.classList.add('form-field-focus')
    let label = parent.children[0]; // Input label
    label.classList.add('label-active')
  })

  input.addEventListener('focusout', (e) => {
    let parent = e.target.parentNode;
    parent.classList.remove('form-field-focus')
    let label = parent.children[0]; // Input label
    label.classList.remove('label-active')
  })

  // On Change Input
  input.oninput = (e) => {
    if (e.target.id === 'username') {
      username = e.target.value;
    } else {
      password = e.target.value;
    }

    // Log in button is disabled if username and password is blank
    if (username && password) {
      btnLogin.classList.remove('login-disabled')
    } else {
      btnLogin.classList.add('login-disabled')
    }
  }
});