// Use Node-style imports for dependencies.

// const axios = require('axios').default;
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
  .catch((response) => {
    setError(`List pets failed with a ${response.response} response!`);
  })
  .then(function () {
    console.log("list pets request is complete!");
  });
};


const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!"); 
  }else {
    axios.get(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data);
    })
    .catch((response) => {
      setError(`show details failed: /${response.response.status}/ `);
      console.log(`show details failed with a ${response.response.status} response!`)
    })
    .then(function () {
      console.log("show details request is complete!");
    });
  }
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  }else{
     axios.delete(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      setResult(response.data);
    })
    .catch((response) => {
      setError(`Remove pet failed with a ${response.response.status} response! `);
    })
    .then(function () {
      console.log("remove pets request is complete!");
    });
  } 
};

const addPet = (petInfo) => {
  axios.post(BASE_URL,petInfo)
    .then((response) => {
      setResult(response.data);
    })
    .catch((response) => {
      setError(`Add pet failed with a ${response.response.status} response!`);
    })
    .then(function () {
      console.log("add pet request is complete!");
    });

};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
