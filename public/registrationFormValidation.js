
  const registerForm = document.querySelector('#register-form')

  registerForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = document.querySelector('#username')
    const password = document.querySelector('#password')
    const password2 = document.querySelector('#password2')
  
    checkInputs(username, password, password2);
  });
  
  function checkInputs(username, password, password2) {
    let usernameValue = username.value;
    let passwordValue = password.value;
    let password2Value = password2.value;

    let errors = 0

    if (usernameValue === '' || !isEmail(usernameValue)) {
      errors++
      setErrorFor(username, 'Enter a valid email address!');
    } else {
      setSuccessFor(username);
    }

    if (passwordValue !== password2Value) {
      errors++
      setErrorFor(password2, 'Passwords do not match!');
    }

    if (passwordValue === '' || !isValidPassword(passwordValue)) {
      errors++
      setErrorFor(password, 'Password does not meet requirements above!');
    } else {
      setSuccessFor(password);
    }

    console.log(usernameValue, passwordValue)

  if (errors === 0) {
    fetch(`/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: usernameValue,
        password: passwordValue
      })
    })
      .then(response => {
      window.location = response.url    
    })
      .catch(err => {
      console.log(err)
    })      
  }
  
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList.remove('success')
    formControl.classList.add('error')
    formControl.classList.add('mb-5')
    small.innerText = message;
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList.remove('error')
    formControl.classList.remove('mb-5')
    formControl.classList.add('success')
    small.innerText = '';
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/.test(password);
  }
}
  
