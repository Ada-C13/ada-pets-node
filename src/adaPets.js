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
    setError('Not a valid HTTP call');
  });

};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  }
  // http://localhost:3000/pets/3
  //console.log('BASE_URL + selectedPetId: ', BASE_URL + selectedPetId);
  axios.get(BASE_URL + selectedPetId)
  .then((response) => {
    console.log('response: ', response);
    setResult(response.data);
  })   
  .catch((error) => {
    const errorMessage = `select show details ${error}`
    setError(errorMessage);
  });

};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
    
  }

  // Fill out as part of Wave 3.
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

