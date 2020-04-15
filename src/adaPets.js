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
      setError('Failed to list pets.');
    })
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(BASE_URL + selectedPetId)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError(`Failed to show details. Error code ${error.response.status}`);
      })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + selectedPetId)
      .then((response) => {
        setResult(`Pet ${selectedPetId} has been successfully removed.`);
      })
      .catch((error) => {
        setError(`Failed to remove pet: Error code ${error.response.status}`);
      })
  }
};

const addPet = (petInfo) => {
  let params;
  // if options object exists, parse through shape
  if (petInfo.options) {
    params = {
      name: petInfo.name,
      species: petInfo.options.species,
      age: petInfo.options.age,
      owner: petInfo.options.owner,
      about: petInfo.options.about
    };
  } else {
    params = {
      name: petInfo.name,
      species: petInfo.species,
      age: petInfo.age,
      owner: petInfo.owner,
      about: petInfo.about
    };
  }
  
  axios.post(BASE_URL, params)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(`Failed to add pet. Error code ${error.response.status}.`);
    })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};