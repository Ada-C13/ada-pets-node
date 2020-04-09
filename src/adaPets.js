// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
  .then( (response) => {
    setResult(response.data);
  })
  .catch( (error) => {
    setError(`ENCOUNTERED PROBLEM: \" ${error} \"`);
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  }
  else {
    axios.get(`http://localhost:3000/pets/${selectedPetId}`)
    .then( (response) => {
      setResult(response.data);
    })
    .catch( (error) => {
      setError(`ENCOUNTERED PROBLEM: \" ${error} \"`);
    });
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  }
  else {
    axios.delete(`http://localhost:3000/pets/${selectedPetId}`)
    .then( (response) => {
      setResult(`Pet ${selectedPetId} successfully removed from list`);
    })
    .catch( (error) => {
      setError(`Could not remove Pet ${selectedPetId} from list, encountered a problem: \" ${error} \"`);
    });
  }
};

const addPet = (petInfo) => {
  const PARAMS = {name: petInfo.name, age: petInfo.age, species: petInfo.species, owner: petInfo.owner, about: petInfo.about};
  axios.post(BASE_URL, PARAMS)
  .then( (response) => {
    setResult(response.data);
  })
  .catch( (error) => {
    setError(`Could not add ${petInfo.name} to list, encountered a problem: \" ${error} \"`);
  });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};