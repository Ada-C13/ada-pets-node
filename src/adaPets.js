// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';


//ASSIGNMENT REQ: To do this fill out the listPets function. This will need to make a call to the Pets API and should setResult a list of objects containing (at least) the pet's id and name and should call setError with an error message if the request fails.

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.
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

// We now want to be able to look at individual pets. Like in Slack CLI we're going to want to select a given pet before we ask for details on one. To do this we're going to fill out a few functions that we're creating within a closure. There is a provided function selectPet that will prompt you for a pet's id and save it.

// To do this you will need to fill out the petDetails function. This will need to make a call to the Pets API and should setResult and object with details for the pet and should call setError with an error message if the request fails.

// Function to complete
// showDetails
// setResult should be passed the Object that represents the pet.
// setError should be passed an error message. (You may need to write this message.)

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  }
  else if (selectedPetId) {
    axios.get(BASE_URL + selectedPetId)
    .then((response) => {
      //ASSIGNMENT REQ: setResult should be passed the array of pets.
      setResult(response.data);
    })
    .catch((error) => {
      //ASSIGNMENT REQ: setError should be passed an error message. (You may need to write this message.)
      setError("Request failed.");
    });
  }

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
