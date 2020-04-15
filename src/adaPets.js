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
    setError('request to list pets failed! try again later.');
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError('You tried to show details for a pet without selecting it!');
    return;
  } 
  // Fill out as part of Wave 2.
  axios.get(BASE_URL + selectedPetId)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError(`your request failed with code: ${error.response.status}`);
  });
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError('You tried to remove a pet without selecting it!');
    return;
  }
  // Fill out as part of Wave 3.
  axios.delete(BASE_URL + selectedPetId)
  .then((response) => {
    setResult(`Success! pet with ID ${selectedPetId} is now removed!`);
  })
  .catch((error) => {
    setError(`your request to remove a pet with ID ${selectedPetId}` +
    ` failed with code: ${error.response.status}`);
  });
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  const {options, ...rest} = petInfo
  const newPetInfo = {...options, ...rest}
  axios.post(BASE_URL, newPetInfo)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    // set(petInfo)
    setError('The program failed to add the new pet :( please try again later!');
  });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
