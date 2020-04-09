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
    setError(`There was an error retrieving the pets: Error ${error.response.status} `)
  })
};


const showDetails = (selectedPetId) => {

  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    
    axios.get(`http://localhost:3000/pets/${selectedPetId}`)
    .then((response) => {
    setResult(response.data)
    })
    .catch((error) => {
      setError( `Test failed! ${error}`);
    })
  }

  
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(`http://localhost:3000/pets/${selectedPetId}`)
    .then(() => {
    setResult(console.log(`The pet with ID: ${selectedPetId} has been adopted.`))
    })
    .catch((error) => {
      setError( `Failed to remove pet. Error: ${error}`);
    })
  }
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
