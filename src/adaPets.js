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
    setError(`There was an error retrieving the pets: Error ${error.response.status} `);
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
      setError( `Test failed! ${error}`);
    })
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + selectedPetId)
    .then(() => {
      setResult(`The pet with ID: ${selectedPetId} has been adopted.`);
    })
    .catch((error) => {
      setError(`Failed to remove pet. ${error}`);
    })
  }
};

const addPet = (petInfo) => {
  const params = {
    name: petInfo.name,
    age: petInfo.options.age,
    species: petInfo.options.species,
    owner: petInfo.options.owner,
    about: petInfo.options.about
  }
  console.log(petInfo.options)
  axios.post(BASE_URL, params)
  
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError(`Failed to add pet. ${error}`);
  })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
