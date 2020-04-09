// Node-style imports for dependencies
const axios  = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError  = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions
const listPets = () => {

  axios.get(BASE_URL)

  .then((response) => {
    allPets = response.data.map((petData) => (
      { id: petData.id, name: petData.name } // no need to do this!!! response.data is enough
    ));
    setResult(allPets);
  })

  .catch((error) => {
    setError(`There was an Error: ${error}`);
  })

};

const showDetails = (selectedPetId) => {

  if (!selectedPetId) {
    setError(`You must select a pet before attempting to show details!`);
  }

  axios.get(BASE_URL + `${selectedPetId}`)

  .then((response) => {
    console.log(`Result ---> `, response.data, typeof response.data);
    setResult(response.data);
  })
  
  .catch((error) => {
    setError(`Failed: code ${error} in show details for selected pet`);
  })

};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError(`You tried to remove a pet without selecting it!`);
    
  }

  // Fill out as part of Wave 3.
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
};

// Node-style exports functions for tests and main
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};