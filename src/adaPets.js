// Node-style imports for dependencies
const axios  = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError  = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions
const listPets = () => {

  axios.get(BASE_URL)

  .then((response) => {
    allPets = response.data.map((petData) => (
      { id: petData.id, name: petData.name } // mapping just the required fields
    ));
    setResult(allPets);
  })

  .catch((error) => {
    setError(`${error.message} in list pets`);
  })

};

const showDetails = (selectedPetId) => {

  if (!selectedPetId) {
    setError(`You must select a pet before attempting to show details!`);
  }

  axios.get(BASE_URL + `${selectedPetId}`)

  .then((response) => {
    setResult(response.data);
  })
  
  .catch((error) => {
    setError(`${error.message} in show details for selected pet`);
  })

};

const removePet = (selectedPetId) => {

  if (!selectedPetId) {
    setError(`You tried to remove a pet without selecting it!`);
  }

  axios.delete(BASE_URL + `${selectedPetId}`)

  .then((response) => {
    setResult(response.data);
  })
  
  .catch((error) => {
    setError(`${error.message} in remove for selected pet`);
  })

};

const addPet = (petInfo) => {

  axios.post(BASE_URL, {
      name: petInfo.name,
      species: petInfo.species,
      about: petInfo.about,
      age: petInfo.age,
      owner: petInfo.owner,
  })

  .then((response) => {
    setResult(response.data);
  })
  
  .catch((error) => {
    setError(`${error.message} in add pet`);
  })

};

// Node-style exports functions for tests and main
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};