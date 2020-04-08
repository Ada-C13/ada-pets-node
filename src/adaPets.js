// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)

  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError(`This went wrong: ${error.message}`);
  });
}

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
    return;
  }
  axios.get(BASE_URL + selectedPetId)
  .then((response) => {
    setResult(response.data);
    })
  .catch((error) => {
    setError("Failed with a 404 code to select and show details");
  });
}

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }
  axios.delete(BASE_URL + selectedPetId)
  .then((response) => {
    setResult(response.data);
    })
  .catch((error) => {
    setError("Failed to select and remove pet from database");
  });
}

const addPet = (petInfo) => {
  axios.post(BASE_URL, petInfo)

  .then((response) => {
    setResult(petInfo);
    })
  .catch((error) => {
    setError("Failed to select and add new pet to database");
  });
}

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};

/* Pseudocode
Fill out as part of Wave 1.
Function to complete
listPets
setResult should be passed the array of pets.
setError should be passed an error message. 

Fill out as part of Wave 2.
Function to complete
showDetails
setResult should be passed the Object that represents the pet.
setError should be passed an error message.

Fill out as part of Wave 3.
Function to complete (call Api)
removePet
setResult should be passed a success message. 
setError should be passed an error message.

Fill out as part of Wave 4.
Function to complete (call Api, post)
addPet
setResult should be passed the new pet (from the API).
setError should be passed an error message.
*/