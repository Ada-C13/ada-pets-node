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
      setError(`Unable to list pets due to: ${error.message}.`);
    });
  }


const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    axios.get(BASE_URL + selectedPetId) 
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError(`Unable to select pet due to: ${error.message}.`);
      });
    }
  };

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + selectedPetId)
      .then((response) => {
        setResult("Your pet was successfully removed.");
      })
      .catch((error) => {
        setError(`Unable to remove selected pet due to: ${error.message}`);
      });
  }
};

const addPet = (petInfo) => {
  axios.post(BASE_URL, petInfo)
    .then((response) => {
      console.log("Your pet was successfully added.");
      setResult(response.data);
    })
    .catch((error) => {
      setError(`Unable to add pet due to: ${error.message}`);
    });
};

module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};