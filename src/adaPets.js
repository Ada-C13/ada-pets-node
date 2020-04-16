// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
    .then((pets) => {
      setResult(pets.data);
    })
    .catch(() => {
      setError(`There was an error grabbing the list of all pets.`);
    });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError('You tried to show details for a pet without selecting it!');
  } else {
    axios.get(BASE_URL + selectedPetId)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        setError(`${error.response.status}: Failed with a 404 code to select and show details.`);
      });
  };
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + selectedPetId)
      .then(() => {
        setResult(`Successfully deleted pet from list; it has been adopted!`);
      })
      .catch((error) => {
        setError(`${error.response.status}: Failed to remove this pet.`);
      });
  };
};

const addPet = (petInfo) => {
  axios.post(BASE_URL, petInfo)
    .then(() => {
      setResult(petInfo);
    })
    .catch((error) => {
      setError(`${error.response.status}: Failed to add pet to list.`);
    });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
