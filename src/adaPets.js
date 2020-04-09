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
    setResult(response.data) 
  })
  .catch((error) => {
    setError(`An error has occurred from the API.`)
  });
};

const showDetails = (selectedPetId) => {
  
  axios.get(BASE_URL + selectedPetId)
  .then((response) => {
    setResult(response.data)
  })
  .catch((error) => {
    setError(!selectedPetId ? "You tried to show details for a pet without selecting it!": `${error}`)
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
