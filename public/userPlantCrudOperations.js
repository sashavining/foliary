const noteEditButtons = document.querySelectorAll(".note-open-edit-modal-button");
const noteDeleteButtons = document.querySelectorAll(".note-open-delete-modal-button");
const submitNoteEditButton = document.querySelector(".submit-edit-note-button") 
const submitNoteDeleteButton = document.querySelector(".submit-delete-note-button") 
const mainSection = document.querySelector('#main-section')
const deletePlantModalOpenButton = document.querySelector('#delete-plant-modal-open-button')
const deletePlantButton = document.querySelector('#submit-delete-plant-button')
const addImageModalOpenButton = document.querySelector('#add-image-modal-open-button')
const addImageButton = document.querySelector('#add-image')
const imageInput = document.querySelector('#uploadImage')
const deleteImageModalOpenButtons = document.querySelectorAll('#deleteImageModalOpenButton')
const deleteImageButton = document.querySelector('#deleteImage')
const editImageModalOpenButtons = document.querySelectorAll('#editImageModalOpenButton')
const editImageButton = document.querySelector('#edit-image')


// Delete a note
Array.from(noteDeleteButtons).forEach((button) => {
  button.addEventListener('click', function (e) {
    let noteId = e.target.dataset.noteid
    let plantId = mainSection.dataset.plantid
        
    submitNoteDeleteButton.addEventListener('click', function(e) {
      fetch(`/users/plants/notes/${noteId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'plantId': plantId
        })
      })
        .then(function (response) {
          window.location.reload(false)
        })
        .catch(err => {
          console.log(err)
        })
    })
  })
});

// Edit a note
Array.from(noteEditButtons).forEach((button) => {
  button.addEventListener('click', function (e) {
    let noteId = e.target.dataset.noteid
    let originalNoteDate = e.target.dataset.notedate
    let originalNoteBody = e.target.previousElementSibling.innerText
    let plantId = mainSection.dataset.plantid
          
    submitNoteEditButton.addEventListener('click', function() {
      const editedBody = document.querySelector('#note-body-edited').value || originalNoteBody
      const editedDate = document.querySelector('#edited-date').value || originalNoteDate
      fetch(`/users/plants/notes/${noteId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'body': editedBody,
          'date': editedDate,
          'plantId': plantId
          })
        }).then(response => {
            console.log(response)
            window.location.reload(true)
        }).catch(err => {
            console.log(err)
        })
    })
  })
});
  
// Delete a user's plant
deletePlantModalOpenButton.addEventListener('click', function () {    
  let plantId = mainSection.dataset.plantid
  const userId = mainSection.dataset.userid

  deletePlantButton.addEventListener('click', function(e) {
    e.preventDefault()
    fetch(`/users/plants/${plantId}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: userId
      })
    }).then(response => {
      window.location = response.url    
    })
      .catch(err => {
        console.log(err)
    })
  })
})

// Add image fetch request
addImageModalOpenButton.addEventListener('click', function () {  
  let plantId = mainSection.dataset.plantid
  
  addImageButton.addEventListener('click', function(e) {
    e.preventDefault()
    const form = document.getElementById("uploadImageForm");
    const formData = new FormData(form);
    fetch(`/users/plants/${plantId}/images`, {
      method: 'POST',
      body: formData
    }).then( response => window.location = response.url   
    ).catch( error => console.log(error) // Handle the error response object
    );
  })
})

// Delete image fetch request
Array.from(deleteImageModalOpenButtons).forEach((button) => {
  button.addEventListener('click', function (e) {  
    let cloudinaryId = e.target.parentElement.dataset.cloudinaryid
    let plantId = mainSection.dataset.plantid
    deleteImageButton.addEventListener('click', function(e) {
      e.preventDefault()
      fetch(`/users/plants/${plantId}/images/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'plantId': plantId,
          'cloudinaryId': cloudinaryId
        })
      })
        .then(function (response) {
          console.log(response)
          window.location = response.url    
        })
        .catch(err => {
          console.log(err)
      })
    })  
  })
})

// Update image fetch request
Array.from(editImageModalOpenButtons).forEach((button) => {
  button.addEventListener('click', function (e) {  
    let cloudinaryId = e.target.parentElement.dataset.cloudinaryid
    let plantId = mainSection.dataset.plantid
    editImageButton.addEventListener('click', function(e) {
      let date = document.querySelector('#editImageDate').value
      e.preventDefault()
      fetch(`/users/plants/${plantId}/images/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'plantId': plantId,
          'cloudinaryId': cloudinaryId,
          'uploaded': date
        })
      })
        .then(function (response) {
          console.log(response)
          window.location = response.url    
        })
        .catch(err => {
          console.log(err)
      })
    })  
  })
})