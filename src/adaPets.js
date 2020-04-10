// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

const listPets = () => {
  axios.get(BASE_URL)
    .then((response) => {
      setResult(response.data); 
    })
    .catch((error) => {
      setError(`Failed to list pets: ${error}`);
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
      setError(`Failed to show details for selected pet: ${error}`);
    });
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
    
  } else {
    axios.delete(BASE_URL + selectedPetId)
    .then((result) => {
      setResult(result.data)
    })
    .catch((error) => {
      setError(`Failed to remove pet: ${error}`);
    });
  }
};

const addPet = (petInfo) => {
  axios.post(BASE_URL, petInfo)
  .then((result) => {
    setResult(result.data)
  })
  .catch((error) => {
    setError(`Failed to add a pet: ${error}`);
  })
};

module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
