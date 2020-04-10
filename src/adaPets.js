// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  let pets = [];

  axios.get(BASE_URL)
  .then(response => {   
    const allPets = response.data;
    allPets.forEach(pet => {
      pets.push({name: pet.name, id: pet.id});  
    });        
    setResult(pets); 
  })
  .catch(error => {    
    setError('API call failed: ' + error.response.status + ' error')
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  } else {    
    axios.get(BASE_URL + selectedPetId)
    .then(response => {      
      setResult(response.data); 
    })
    .catch(error => {          
      setError('API call failed: ' + error.response.status + ' error')
    });
  };
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    axios.delete(BASE_URL + selectedPetId)
    .then(response => {
      setResult('Pet #' + selectedPetId + ' has been successfully removed from the list.'); 
    })
    .catch(error => {
      setError('API call failed: ' + error.response.status + ' error. Pet not removed from list')
    });     
  }
};

const addPet = (petInfo) => {
  axios.post(BASE_URL, petInfo)
  .then(response => {        
    setResult(response.data); 
  })
  .catch(error => {
    setError('API call failed: ' + error.response.status + ' error. Pet not added to list')
  })
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
