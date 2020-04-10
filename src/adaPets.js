// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get('http://localhost:3000/pets/')
    .then((response) => {
      setResult(response.data)
    })
    .catch((error) => {
      setError(`Unfortunately your request didn't work: ${error}`)  
    });
  
  // Fill out as part of Wave 1.
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  }
  else {
  axios.get(BASE_URL + selectedPetId)
    .then((response) => {
      setResult(response.data)
    })
    .catch((error) => {
      setError(`${error}`)
    })
  }

  // Fill out as part of Wave 2.
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  }
  axios.delete(BASE_URL + selectedPetId)
    .then((response) => {
      setResult(response.data)
    })
    .catch((error) => {
      setError(`Your request to remove a pet failed, please select the right petId!: ${error}`)
    })

  // Fill out as part of Wave 3.
};

const addPet = (petInfo) => { 
  axios.post(BASE_URL,  petInfo)
    .then((response) => {
      setResult(response.data)
      
    })
    .catch((error) => {
      setError(`your request to add a pet failed, all details to add a new pet is needed: ${JSON.stringify(petInfo)}`)

    })
  // Fill out as part of Wave 4.
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
