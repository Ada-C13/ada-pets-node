// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
  .then((result) => {setResult(result.data)})
  .catch((error) => {setError("Local Host down")})
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(BASE_URL + selectedPetId)
    .then((result) => {setResult(result.data)})
    .catch((error) => {setError(`Error message: ${error}`)})
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
    
  } else {
    axios.delete(BASE_URL + selectedPetId)
    .then((result) => {setResult(result.data)})
    .catch((error) => {setError(`Unable to remove pet: ${error}`)})
  }
};

const addPet = (petInfo) => {
  axios.post(BASE_URL, petInfo)
  .then((result) => {setResult(result.data)})
  .catch((error) => {setError(`Adding pet failed: ${error}`)})
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
