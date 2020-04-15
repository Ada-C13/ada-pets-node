// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
// Making the request for a list of all pets
  axios.get(BASE_URL)
    .then((response) => {
      setResult(response.data)
    })
    .catch((error) => {
      setError('An Error has occured: ${error}')
    });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(BASE_URL + selectedPetId)
    .then((response) => {
      console.log(response)
      setResult(response.data)
    })
    .catch((error) => {
      setError('Error: Request failed with status code 404')
    })
  };
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + selectedPetId)
    .then((response) => {
      setResult('Request to remove pet successful.')
    })
    .catch((error) => {
      setError('Request to remove failed.')
    })
  };

  // Fill out as part of Wave 3.
};

const addPet = (petInfo) => {
  axios.post(BASE_URL, petInfo)
  .then((response) => {
    setResult(response.data)
  })
  .catch((error) => {
    setError('Request to add pet failed.')
  })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};