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
      const petsArray = response.data
      setResult(petsArray);
    }
    ).catch((error) => {
      setError(error.message);
    });
}

const showDetails = (selectedPetId) => {
  // Fill out as part of Wave 2.
  if (!selectedPetId) {
    setError('You tried to show details for a pet without selecting it!');
  } else {
    axios.get(BASE_URL + selectedPetId)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError(`The data given back by the API response failed, status: ${error.response.status}`);
      });
  }
}

const removePet = (selectedPetId) => {
  // Fill out as part of Wave 3.
  if (!selectedPetId) {
    setError('You tried to remove a pet without selecting it!');
  } else {
    axios.delete(BASE_URL + selectedPetId)
      .then((response) => {
        setResult(response.status);
      })
      .catch((error) => {
        setError(`The API response failed: ${error.response.status}. The pet was not remove`);
      });
  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  axios.post(BASE_URL, petInfo).then((response) => {
    setResult(response.data);
  }).catch((error) => {
    setError(`The API response failed, status: ${error.response.status}. The pet was not add`);
  });
};

// // Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
