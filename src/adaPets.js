// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  // Wave 1.
  axios.get(BASE_URL)
  .then(response => {
    setResult(response.data);
  })
  .catch(error => {
    setError(`Error occured: ${error}`);
})
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  
    // Wave 2.
  } else {
    axios.get(BASE_URL + selectedPetId)
  .then(response => {
    setResult(response.data)
  })
  .catch(error => {
    setError(`Error: ${error.message}`);
  })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
    
  }

  // Fill out as part of Wave 3.
  axios.delete(BASE_URL + selectedPetId)
  .then(response => {
    setResult(response.data)
  })
  .catch(error => {
    setError(`Can't remove a selected pet: ${error.message}`);
  })

};

const addPet = (petInfo) => {
  // Wave 4.
  axios.post(BASE_URL, {
    name: petInfo.name,
    species: petInfo.species,
    age: petInfo.age,
    owner: petInfo.owner,
    about: petInfo.about    
  })
  .then(response => {
    setResult(response.data)
  })
  .catch(error => {
    setError(`Failed to add a new pet: ${error.message}`);
  })

};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
