// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';


//WAVE 1: To do this fill out the listPets function. This will need to make a call to the Pets API and should setResult a list of objects containing (at least) the pet's id and name and should call setError with an error message if the request fails.

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
  .then((response) => {
    //ASSIGNMENT REQ: setResult should be passed the array of pets.
    setResult(response.data);
  })
  .catch((error) => {
    //ASSIGNMENT REQ: setError should be passed an error message. (You may need to write this message.)
    setError("There was an error");
  });
};

//WAVE 2: This will need to make a call to the Pets API and should setResult and object with details for the pet and should call setError with an error message if the request fails.
const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  }
  else if (selectedPetId) {
    axios.get(BASE_URL + selectedPetId)
    .then((response) => {
      //ASSIGNMENT REQ: setResult should be passed the Object that represents the pet.
      setResult(response.data);
    })
    .catch((error) => {
      //ASSIGNMENT REQ: setError should be passed an error message. (You may need to write this message.)
      setError("404: Request failed.");
    });
  }
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
