// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get('http://localhost:3000/pets')
    .then((response) => {
      let petCollection = []   //I got this how to from Kate P's classroom support slack post
      
      response.data.forEach(pet => {
        petCollection.push({id: pet.id, name: pet.name});
      })
    
      setResult(petCollection);
    })
    .catch((error) => {
      setError(`made up error message for wave one list pets ${error.response}`);
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!"); 
  }
  const url = `http://localhost:3000/pets/${selectedPetId}`

  axios.get('url')  // how is this added with params
    .then((response) => {
      let selectedPetInfo = response 
      // console.log(response)
      setResult(selectedPetInfo);
    })
    .catch((error) => {
      setError(error);
  });
  // Fill out as part of Wave 2.
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
