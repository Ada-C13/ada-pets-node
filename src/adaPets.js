// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.
  axios.get(BASE_URL)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError(`request to list pets failed! try again later.`);
  });
};

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
    setError(`your request failed with code: ${error.response.status} `)
  });
  // Fill out as part of Wave 2.
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }
  axios.delete(BASE_URL + selectedPetId)
  .then((response) => {

  })
  .catch((error) => {

  });
  // Fill out as part of Wave 3.
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  console.log(petInfo)
  axios.post(BASE_URL, petInfo)
  .then((response) => {

  })
  .catch((error) => {
    // set(petInfo)
  });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
