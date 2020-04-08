// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL, 
    {
      params: {
        format: 'json'
      }
    })
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(error.message);
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
    
  } else {
    axios.get(BASE_URL + selectedPetId, 
      {
        params: {
          format: 'json'
        }
      })
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError(error.message);
    });
  };
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
    
  } else {
    axios.delete(BASE_URL + selectedPetId, 
      {
        params: {
          format: 'json'
        }
      })
      .then(() => {
        setResult(`Success! Pet #${selectedPetId} has been removed.`);
      })
      .catch((error) => {
        setError(`${error.message}. Could not remove Pet #${selectedPetId}!`);
    });
  };
};

const addPet = (petInfo) => {
  // makes a post request using BASE_URL, add Content-Type: application/json to the header according to the json-server documentation
  // setResult should be passed the new pet (from the API, not from petInfo)
  // setError should be passed an error message containing the words failed and add
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
