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
      const pets = [];

      response.data.forEach((pet) => {
        pets.push({id: pet.id, name: pet.name});
      })

      setResult(pets);
    })
    .catch((error) => {
      setError(`Something went wrong ${error}`);
    });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(`${BASE_URL}${selectedPetId}`)
      .then( (response) => {
        console.log(response.data);
        setResult(response.data);
      })
      .catch( (error) => {
        setError(`Something went wrong when showing pet details ${error}`);
      });
  } 
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(`${BASE_URL}${selectedPetId}`)
      .then( (response) => {
        setResult(response.data);
      })
      .catch( (error) => {
        setError(`Something went wrong when trying to remove pet details. Error: ${error.message}`);
      });
  }  
};

const addPet = (petInfo) => {
  console.log(petInfo);
  // Fill out as part of Wave 4.
  axios.post(BASE_URL, petInfo)
    .then( (response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(`Something went wrong when trying to add a pet. Error: ${error.message}`);
    })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};

