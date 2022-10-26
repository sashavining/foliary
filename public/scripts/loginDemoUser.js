const demoUserLink = document.querySelector("#login-test-user");

demoUserLink.addEventListener('click', () => {
    fetch(`/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: "demo@test.com",
          password: "Testtest1!"
        })
      })
        .then(response => {
        window.location = response.url   
      })
        .catch(err => {
        console.log(err)
      }) 
})