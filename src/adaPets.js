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
    console.log(response);
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
  axios.get(BASE_URL + selectedPetId)
  .then((response) => {
   
    setResult(response.data);
  })   
  .catch((error) => {
    const errorMessage = `failed to show details, please select a valid pet id: ${error}`
    setError(errorMessage);
  });

};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  }
  axios.delete(BASE_URL + selectedPetId)
  .then((response) => {
    setResult(response.data);
  })   
  .catch((error) => {
    const errorMessage = `failed to remove pet, please select a valid pet ID: ${error}`
    setError(errorMessage);
  });
};

const addPet = (petInfo) => {

  axios.post(BASE_URL, petInfo)
  .then((response) => {
    setResult(response.data);
  })   
  .catch((error) => {
    const errorMessage = `failed to add pet, please enter valid pet parameters: ${error}`
    setError(errorMessage);
  });
};

module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};

