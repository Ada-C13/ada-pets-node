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
      // console.log(response);
      setResult(response.data);
    })
    .catch((error) => {
      // console.log(error);
      setError(error.message);
    });
};


const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {
    const singlePetURL = BASE_URL + selectedPetId.toString();
    
    axios.get(singlePetURL)
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
    const singlePetURL = BASE_URL + selectedPetId.toString();
    
    axios.delete(singlePetURL)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError(`ERROR to remove pet: ${error.message}`);
      });
  };
};

const addPet = (petInfo) => {
  axios.post(BASE_URL, petInfo)
    .then((response) => {
      setResult(response.data);
    }).catch((error) => {
      setError(`ERROR to add a pet: ${error.message}`);
    });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
