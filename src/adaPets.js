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
      console.log(error.response);
      return setError(`There was a(n) error from the API`);
    });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  }

  // Fill out as part of Wave 2.
  axios.get(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      const errorStatus = error.response.status.toString();
      setError(`Error status: ${errorStatus}\nError message: You failed to show details. You must select a pet first`)
    })
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  }

  // Fill out as part of Wave 3.
  axios.delete(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      console.log(error.response);
      setError(`Error status: ${error.response.status}\n
      Error message: You failed to remove a pet. You must select a pet first`)
    })
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
