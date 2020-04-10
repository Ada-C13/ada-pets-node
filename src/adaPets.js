// Use Node-style imports for dependencies.

// const axios = require('axios').default;
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  //  let result = {}
   axios.get(BASE_URL)
  .then((response) => {
    // handle success
    setResult(response.data);
  })
  .catch((response) => {
    // handle error
    setError(`wrong output ${response.error}`);
    console.log(`wrong output ${response.error}`);
  })
  .then(function () {
    // always executed
  });
};

console.log(listPets());

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
    
  }else {
    axios.get(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      // handle success
      setResult(response.data);
    })
    .catch((response) => {
      // handle error

      setError(`/failed/i /${response.response.status}/ `);
      // console.log(`wrong output ${response.status}`);
      // console.log(`${BASE_URL}${selectedPetId}`);
      // console.log(response.status);
      // console.log(error);
    })
    .then(function () {
      // always executed
    });

  }

};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  }else{
     axios.delete(`${BASE_URL}${selectedPetId}`)
    .then((response) => {
      // handle success
      setResult(response.data);
    })
    .catch((response) => {
      // handle error
      setError(`failed: could not remove pet `);
    })
    .then(function () {
      // always executed
    });
  } 
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  console.log(petInfo);
  axios.post(BASE_URL,petInfo)
  // ?name=${petInfo.name}&species=${petInfo.species}&about=${petInfo.about}
    .then((response) => {
      // handle success
      
      setResult(response.data);
    })
    .catch((response) => {
      // handle error
      setError(`Test failed! ${response.error}, counld not add pet`);
    })
    .then(function () {
      // always executed
    });

};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
