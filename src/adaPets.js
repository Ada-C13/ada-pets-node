// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  let petList = [];

  axios.get(BASE_URL)
    .then((pets) => {
      for (let pet of pets.data) {
        let petInfo = {};

        petInfo['id'] = pet.id;
        petInfo['name'] = pet.name;

        petList.push(petInfo);
      }

      setResult(petList);
    })
    .catch((error) => {
      setError(`There was an error grabbing the list of all pets.`);
    });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  }

  axios.get(BASE_URL)
    .then((pets) => {
      for (let pet of pets.data) {
        if (selectedPetId === pet.id) {
          setResult(pet);
        };
      };
    })
    .catch((error) => {
      setError(`There was an error locating this pet.`);
    });
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
    
  }

  // Fill out as part of Wave 3.
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
