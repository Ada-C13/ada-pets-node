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
    setError("Unable to list pets. ${error.message}.");
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it. ${error.message}.") 
  };

  // Fill out as part of Wave 2.
  axios.get(BASE_URL+selectedPetId)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError ("ERROR 404: Failed to select and show details");
  });
}

  // Fill out as part of Wave 3.
const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it");
  } 
  axios.delete(BASE_URL+selectedPetId)
    .then((response)=>{
      setResult(console.log("Pet id:${selectedPetId} is removed!"));
    })
    .catch((error)=>{
      setError(`Failed to remove or select error:${error}`);
    });
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  axios.post(BASE_URL,petInfo)
  .then((response) => {
    setResult(response.data);
  })
  .catch((error) => {
    setError("Failed to select and add a ne pet to the database");
  })
};


// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
