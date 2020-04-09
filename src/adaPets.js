// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  // Fill out as part of Wave 1.
  axios.get(BASE_URL)
    .then((response) => {
      setResult(response.data);
    })

    .catch((error) => {
      setError(`Error in listing pets: ${error.message}`);
    });
};

const showDetails = (selectedPetId) => {
  if (selectedPetId == null) {
    setError("You tried to show details for a pet without selecting it!");
    
  } else {
    //make get call using selected id
    axios.get(BASE_URL + `${selectedPetId}`)
      .then((response) => {
        setResult(response.data);
      })

      .catch((error) => {
        setError(`Error in retrieving data based on this Pet ID: ${error.message}`);
      });
  }
  // Fill out as part of Wave 2.
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
    
  } else {
    //make get call using selected id
    axios.delete(BASE_URL + `${selectedPetId}`)
      .then((response) => {
        setResult(`Successfully deleted this Pet ID: ${selectedPetId}.`);
      })

      .catch((error) => {
        setError(`Failed to remove data based on this Pet ID: ${selectedPetId}`);
      });
    }
  // Fill out as part of Wave 3.
};

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
  if (!petInfo) {
    setError("Failed to add due to no pet details to add.");
    
  } else {
  
  //create empty hash
  let newPetInfo = {}
  // ex: petInfo{ options: { age: 7, species: 'dog', owner: 'cindy' }, name: 'Kevin' } <--main using this format
  // result: {name: 'Kevin', age: 7, species: 'dog', owner: 'cindy'} <--wave4 test format
  //check if key "options" exists
  if(petInfo.hasOwnProperty("options")) {
    //if true, enter loop
    //loop through options 
    for (let key in petInfo.options) {
      let value = petInfo.options[key]
      //add to hash via keys
      newPetInfo[key] = value
    }
    //add name key value pair
    newPetInfo.name = petInfo.name

  } else {
    //else set newPetInfo = petInfo 
    newPetInfo = petInfo
  }
    //do post to add pet info
    axios.post(BASE_URL, newPetInfo)
    //axios.post('BASE_URL')
    .then((response) => {
      setResult(response.data);
    })

    .catch((error) => {
      setError(`Failed to add this Pet: ${newPetInfo.name}`);
    });
  }
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
