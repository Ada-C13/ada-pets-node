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
    setError(`Oh bother... I encountered the following ERROR: ${error.message}.`);
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    const url = BASE_URL + selectedPetId

    axios.get(url)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(`Oops, I can't display the details of this pet because I encountered this ERROR: ${error.message}.`);
    });
  };
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else { 
    const url = BASE_URL + selectedPetId

    axios.delete(url)
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError(`Yikes, I failed to remove this pet and got this ERROR: ${error.message}`);
    });
  };
};

const addPet = (petInfo) => {
  if (petInfo) {
    axios.post(BASE_URL, petInfo)
    .then((response) => {
      setResult(response.data)
    })
    .catch((error) => {
      setError(`Oh dear, I failed to add this pet and encountered this ERROR: ${error.message}.`)
    });
  };
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
