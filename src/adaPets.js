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
    setError(`Response unsuccessful.`);
  });
};

const showDetails = (selectedPetId) => {
  axios.get(BASE_URL + selectedPetId)

  .then((response) => {
    setResult(response.data);
  })

  .catch((error) => {
    setError(`Request failed with status code 404 and failed to show details and select pet`);
  });

  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  }
};

const removePet = (selectedPetId) => {
  axios.delete(BASE_URL + selectedPetId)
    .then((response) => {
      setResult('This pet has been removed because it found it\'s forever home!');
    })
  
    .catch((error) => {
      setError(`Request failed with status code 404 and failed to remove and selected pet`);
    });
  
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
