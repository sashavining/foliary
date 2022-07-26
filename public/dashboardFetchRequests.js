const mainSection = document.querySelector('#main-section')

const waterPlantButtons = document.querySelectorAll('#water-plant')

// Water plant fetch request
Array.from(waterPlantButtons).forEach((button) => {
    button.addEventListener('click', function (e) {    
    const plantId = e.target.parentElement.dataset.plantid
    const userId = mainSection.dataset.userid

    e.preventDefault()
  
    fetch(`/users/plants/${plantId}/water`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: userId,
      })
    })
      .then(response => {
      window.location = response.url    
    })
      .catch(err => {
      console.log(err)
    })
    })
  })

const fertilizePlantButtons = document.querySelectorAll('#fertilize-plant')

// Fertilize plant fetch request
Array.from(fertilizePlantButtons).forEach((button) => {
    button.addEventListener('click', function (e) {    
    const plantId = e.target.parentElement.dataset.plantid
    const userId = mainSection.dataset.userid

    e.preventDefault()
  
    fetch(`/users/plants/${plantId}/fertilize`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: userId,
      })
    })
      .then(response => {
      window.location = response.url    
    })
      .catch(err => {
      console.log(err)
    })
    })
  })

const deleteLocationModalOpenButtons = document.querySelectorAll('#deleteLocationModalOpenButton')
const deleteLocationButton = document.querySelector("#delete-location")

//   Delete location fetch request
  Array.from(deleteLocationModalOpenButtons).forEach((button) => {
    button.addEventListener('click', function (e) {    
    const location = e.target.parentElement.innerText
    const userId = mainSection.dataset.userid

    e.preventDefault()
  
    deleteLocationButton.addEventListener('click', function() {
        fetch(`/users/${userId}/locations`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              location: location,
            })
          })
            .then(response => {
            window.location = response.url    
          })
            .catch(err => {
            console.log(err)
          })      
    })
    })
  })
  const editLocationModalOpenButtons = document.querySelectorAll('#editLocationModalOpenButton')
  const editLocationButton = document.querySelector("#edit-location")
  
  //   Edit location fetch request
  Array.from(editLocationModalOpenButtons).forEach((button) => {
    button.addEventListener('click', function (e) {    
    const location = e.target.parentElement.innerText
    const userId = mainSection.dataset.userid
  
    editLocationButton.addEventListener('click', function() {
      e.preventDefault()
      const newLocation = document.querySelector('#edit-location-input').value
        fetch(`/users/${userId}/locations`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              location: location,
              newLocation: newLocation
            })
          })
            .then(response => {
            window.location = response.url    
          })
            .catch(err => {
            console.log(err)
          })      
    })
    })
  })
  // Set maximum date of form date picker to today
  const datePickers = document.querySelectorAll('.date-picker')
  datePickers.forEach(datePicker => datePicker.max = new Date().toLocaleDateString('en-ca'))

  // const addPlantForm = document.querySelector('.add-plant-form')

  // // Form validation for add plant form
  // addPlantForm.addEventListener('submit', (e) => {
  //   for (element of 
  //     [
  //     document.querySelector('#plantspecies'),
  //     document.querySelector('#location'),
  //     document.querySelector('#wateringFrequency'),
  //     document.querySelector('#lastWatered'),
  //     document.querySelector('#lastFertilized'),
  //     document.querySelector('#lastRepotted')
  //     ]) 
  //   {
  //     console.log('checking if valid!')
  //     addErrorIfInvalid (element)
  //   }

  //   function addErrorIfInvalid (element) {
  //     if (!element.validity.valid) {
  //       element.classList.add('error')
  //       e.preventDefault()
  //     }
  //   }
  // })
