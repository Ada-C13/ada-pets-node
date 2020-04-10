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
    setError("Not a valid HTTP call");
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  }

  // Fill out as part of Wave 2.
  axios.get(BASE_URL + selectedPetId)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    console.log(errorMessage);
    setError ("Code 404 Fail")

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } 
  // Fill out as part of Wave 3.
  // call API
  //removePet const
  //setResult valid message
  //setErroe error message
  axios.delete(BASE_URL + selectedPetId)
  .then{(response) =>{
       setError("Pet already chosen");
     }
  }
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  //addPet const
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
