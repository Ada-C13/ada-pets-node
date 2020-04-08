 // Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
// Fill out as part of Wave 1
  axios.get(BASE_URL)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError(`There was an ERROR: ${error.response}`);
  })

};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
    return;
  }
      // Fill out as part of Wave 2.
  axios.get(BASE_URL+selectedPetId)
    .then((response) => {
        setResult(response.data);
    })
    .catch((error) => {
      setError(`Failed Request: 404 ${error.response}`);
    })
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  }
  // Fill out as part of Wave 3.
  axios.delete(BASE_URL + selectedPetId)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(`Failed toremove the pet - you must select a pet_id: ${error.response}`);
    })
  };
  // /pets/:pet_id where :pet_id is a pet id, such as 1. Deletes a pet, by id
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
